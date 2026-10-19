/**
 * Small HTTP helpers shared by the Printful and Shopify clients.
 * Everything that touches the network goes through an injectable `fetch`
 * so the unit tests can run with mocked HTTP and no live calls.
 */

export type FetchLike = (url: string, init?: RequestInit) => Promise<Response>;
export type SleepFn = (ms: number) => Promise<void>;

export interface Logger {
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

export const defaultSleep: SleepFn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const consoleLogger: Logger = {
  info: (...args) => console.log(...args),
  warn: (...args) => console.warn(...args),
  error: (...args) => console.error(...args),
};

export const silentLogger: Logger = { info: () => {}, warn: () => {}, error: () => {} };

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body?: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

/** Parse a Retry-After style header (seconds or HTTP date) into milliseconds. */
export function retryAfterMs(headers: Headers, fallbackMs: number): number {
  const raw = headers.get('retry-after') ?? headers.get('x-ratelimit-reset');
  if (!raw) return fallbackMs;
  const seconds = Number(raw);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.min(seconds * 1000, 120_000);
  const date = Date.parse(raw);
  if (!Number.isNaN(date)) return Math.max(0, Math.min(date - Date.now(), 120_000));
  return fallbackMs;
}

export function backoffMs(attempt: number, baseMs = 1000): number {
  return Math.min(baseMs * 2 ** attempt, 60_000);
}

/** Read env from Node (process.env) without breaking if this file is ever bundled for the browser. */
export function readEnv(): Record<string, string | undefined> {
  const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
  return proc?.env ?? {};
}

function firstNonEmpty(...values: (string | undefined)[]): string | undefined {
  for (const v of values) {
    if (v && v.trim()) return v.trim();
  }
  return undefined;
}

export interface SyncSettings {
  printfulToken?: string;
  printfulStoreId?: string;
  shopifyDomain?: string;
  shopifyAdminToken?: string;
  shopifyApiVersion: string;
  /** Status for products the sync CREATES. Existing products keep their status. */
  newProductStatus: 'DRAFT' | 'ACTIVE';
  /** Skip Shopify products that Printful's own Shopify app already manages. */
  skipPrintfulManaged: boolean;
  dryRun: boolean;
  /** Why dry run is on (for logging). */
  dryRunReason: string;
  missing: string[];
}

/** Turn whatever is in the store URL secret into the bare *.myshopify.com host the Admin API needs. */
export function normalizeShopDomain(value?: string): string | undefined {
  if (!value) return undefined;
  let host = value.trim().replace(/^https?:\/\//i, '');
  host = host.split('/')[0].toLowerCase();
  if (!host) return undefined;
  if (!host.includes('.')) host = `${host}.myshopify.com`;
  return host;
}

export const DEFAULT_SHOPIFY_API_VERSION = '2026-10';

export function loadSettings(env: Record<string, string | undefined> = readEnv()): SyncSettings {
  const printfulToken = firstNonEmpty(env.PRINTFUL_API_KEY, env.PRINTFUL_API_TOKEN, env.VITE_PRINTFUL_API_KEY);
  const shopifyDomain = normalizeShopDomain(
    firstNonEmpty(env.SHOPIFY_STORE_DOMAIN, env.SHOPIFY_STORE_URL, env.VITE_SHOPIFY_STORE_URL),
  );
  const shopifyAdminToken = firstNonEmpty(env.SHOPIFY_ADMIN_ACCESS_TOKEN, env.SHOPIFY_ADMIN_API_TOKEN);

  const missing: string[] = [];
  if (!printfulToken) missing.push('PRINTFUL_API_KEY (or VITE_PRINTFUL_API_KEY)');
  if (!shopifyDomain) missing.push('SHOPIFY_STORE_DOMAIN (or VITE_SHOPIFY_STORE_URL)');
  if (!shopifyAdminToken) missing.push('SHOPIFY_ADMIN_ACCESS_TOKEN');

  const rawDry = (env.DRY_RUN ?? '').trim().toLowerCase();
  let dryRun: boolean;
  let dryRunReason: string;
  if (missing.length > 0) {
    dryRun = true;
    dryRunReason = `missing secrets: ${missing.join(', ')}`;
    if (rawDry === 'false' || rawDry === '0' || rawDry === 'no') {
      // Asked for a live run but we cannot do one: fail loudly instead of silently doing nothing.
      throw new Error(`DRY_RUN=false but required settings are missing: ${missing.join(', ')}`);
    }
  } else if (rawDry === 'false' || rawDry === '0' || rawDry === 'no') {
    dryRun = false;
    dryRunReason = 'DRY_RUN=false';
  } else {
    dryRun = true;
    dryRunReason = rawDry ? `DRY_RUN=${rawDry}` : 'DRY_RUN not set (defaults to true)';
  }

  const status = (env.SHOPIFY_NEW_PRODUCT_STATUS ?? 'DRAFT').trim().toUpperCase();

  return {
    printfulToken,
    printfulStoreId: firstNonEmpty(env.PRINTFUL_STORE_ID),
    shopifyDomain,
    shopifyAdminToken,
    shopifyApiVersion: firstNonEmpty(env.SHOPIFY_API_VERSION) ?? DEFAULT_SHOPIFY_API_VERSION,
    newProductStatus: status === 'ACTIVE' ? 'ACTIVE' : 'DRAFT',
    skipPrintfulManaged: (env.SKIP_PRINTFUL_MANAGED ?? 'true').trim().toLowerCase() !== 'false',
    dryRun,
    dryRunReason,
    missing,
  };
}
