/* eslint-disable @typescript-eslint/no-explicit-any -- loosely typed external API JSON and test fixtures */
/**
 * Printful API client (v1 "Store products" / sync products endpoints).
 * Docs: https://developers.printful.com/docs/#tag/Products-API
 *
 * Read-only: this module only GETs from Printful. Auth is a Bearer token
 * (private token from the Printful Developer Portal). For account-level
 * tokens that cover several stores, set PRINTFUL_STORE_ID (sent as X-PF-Store-Id).
 */
import {
  backoffMs,
  consoleLogger,
  defaultSleep,
  HttpError,
  retryAfterMs,
  type FetchLike,
  type Logger,
  type SleepFn,
} from './http';

export const PRINTFUL_API_BASE = 'https://api.printful.com';

export interface PrintfulSyncProductSummary {
  id: number;
  external_id?: string | null;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url?: string | null;
  is_ignored?: boolean;
}

export interface PrintfulFile {
  type?: string;
  preview_url?: string | null;
  thumbnail_url?: string | null;
}

export interface PrintfulSyncVariant {
  id: number;
  external_id?: string | null;
  sync_product_id: number;
  name: string;
  synced?: boolean;
  variant_id?: number;
  retail_price?: string | null;
  currency?: string | null;
  sku?: string | null;
  size?: string | null;
  color?: string | null;
  is_ignored?: boolean;
  availability_status?: string;
  product?: { variant_id?: number; product_id?: number; image?: string | null; name?: string };
  files?: PrintfulFile[];
}

export interface PrintfulSyncProductDetail {
  sync_product: PrintfulSyncProductSummary;
  sync_variants: PrintfulSyncVariant[];
}

export interface PrintfulClientOptions {
  token: string;
  storeId?: string;
  fetch?: FetchLike;
  sleep?: SleepFn;
  logger?: Logger;
  maxRetries?: number;
  pageSize?: number;
  baseUrl?: string;
}

export class PrintfulClient {
  private readonly fetchImpl: FetchLike;
  private readonly sleep: SleepFn;
  private readonly logger: Logger;
  private readonly maxRetries: number;
  private readonly pageSize: number;
  private readonly baseUrl: string;

  constructor(private readonly opts: PrintfulClientOptions) {
    if (!opts.token) throw new Error('Printful token is required');
    this.fetchImpl = opts.fetch ?? ((url, init) => fetch(url, init));
    this.sleep = opts.sleep ?? defaultSleep;
    this.logger = opts.logger ?? consoleLogger;
    this.maxRetries = opts.maxRetries ?? 5;
    this.pageSize = Math.min(Math.max(opts.pageSize ?? 100, 1), 100);
    this.baseUrl = opts.baseUrl ?? PRINTFUL_API_BASE;
  }

  /** GET with retry on 429 / 5xx / network errors. Returns the parsed JSON envelope. */
  async get<T = any>(path: string): Promise<{ code: number; result: T; paging?: { total: number; offset: number; limit: number } }> {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.opts.token}`,
      Accept: 'application/json',
    };
    if (this.opts.storeId) headers['X-PF-Store-Id'] = this.opts.storeId;

    for (let attempt = 0; ; attempt++) {
      let res: Response;
      try {
        res = await this.fetchImpl(`${this.baseUrl}${path}`, { method: 'GET', headers });
      } catch (err) {
        if (attempt >= this.maxRetries) throw err;
        const wait = backoffMs(attempt);
        this.logger.warn(`[printful] network error on GET ${path}; retrying in ${wait}ms`);
        await this.sleep(wait);
        continue;
      }

      if (res.status === 429 || res.status >= 500) {
        if (attempt >= this.maxRetries) {
          throw new HttpError(`Printful GET ${path} failed with ${res.status} after ${attempt + 1} attempts`, res.status, await safeText(res));
        }
        const wait = res.status === 429 ? retryAfterMs(res.headers, backoffMs(attempt, 5000)) : backoffMs(attempt);
        this.logger.warn(`[printful] ${res.status} on GET ${path}; retrying in ${wait}ms (attempt ${attempt + 1}/${this.maxRetries})`);
        await this.sleep(wait);
        continue;
      }

      if (!res.ok) {
        const body = await safeText(res);
        throw new HttpError(`Printful GET ${path} failed with ${res.status}: ${truncate(body)}`, res.status, body);
      }
      return (await res.json()) as any;
    }
  }

  /** All sync products in the store (paginated via offset/limit). */
  async listSyncProducts(): Promise<PrintfulSyncProductSummary[]> {
    const all: PrintfulSyncProductSummary[] = [];
    let offset = 0;
    for (;;) {
      const page = await this.get<PrintfulSyncProductSummary[]>(`/store/products?offset=${offset}&limit=${this.pageSize}`);
      const items = page.result ?? [];
      all.push(...items);
      const total = page.paging?.total ?? all.length;
      offset += items.length;
      if (items.length === 0 || offset >= total) break;
    }
    this.logger.info(`[printful] listed ${all.length} sync product(s)`);
    return all;
  }

  /** One sync product with all its sync variants. */
  async getSyncProduct(id: number): Promise<PrintfulSyncProductDetail> {
    const res = await this.get<PrintfulSyncProductDetail>(`/store/products/${id}`);
    return res.result;
  }

  /** Every non-ignored sync product with its variants. */
  async fetchAllProductsWithVariants(): Promise<PrintfulSyncProductDetail[]> {
    const summaries = await this.listSyncProducts();
    const details: PrintfulSyncProductDetail[] = [];
    for (const summary of summaries) {
      if (summary.is_ignored) {
        this.logger.info(`[printful] skipping ignored product ${summary.id} "${summary.name}"`);
        continue;
      }
      details.push(await this.getSyncProduct(summary.id));
    }
    return details;
  }
}

async function safeText(res: Response): Promise<string> {
  try {
    return await res.text();
  } catch {
    return '';
  }
}

function truncate(s: string, n = 300): string {
  return s.length > n ? `${s.slice(0, n)}...` : s;
}
