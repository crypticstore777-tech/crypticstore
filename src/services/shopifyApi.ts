/* eslint-disable @typescript-eslint/no-explicit-any -- loosely typed external API JSON and test fixtures */
/**
 * Shopify Admin GraphQL API client.
 * Docs: https://shopify.dev/docs/api/admin-graphql
 *
 * Needs an Admin API access token (custom app, scopes read_products + write_products).
 * The Storefront token the site uses cannot create or edit products.
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

export interface ShopifyClientOptions {
  shopDomain: string; // e.g. my-store.myshopify.com
  accessToken: string;
  apiVersion: string; // e.g. 2026-10
  fetch?: FetchLike;
  sleep?: SleepFn;
  logger?: Logger;
  maxRetries?: number;
}

export interface ShopifyIndexedProduct {
  id: string; // gid://shopify/Product/123
  legacyResourceId: string; // "123"
  title: string;
  status: string;
  printfulId?: string; // metafield printful.sync_product_id
  syncHash?: string; // metafield printful.sync_hash
}

export interface ShopifyVariantRef {
  id: string;
  sku: string | null;
}

export const METAFIELD_NAMESPACE = 'printful';
export const METAFIELD_ID_KEY = 'sync_product_id';
export const METAFIELD_HASH_KEY = 'sync_hash';

const PRODUCTS_INDEX_QUERY = `
query ProductsIndex($cursor: String) {
  products(first: 100, after: $cursor) {
    nodes {
      id
      legacyResourceId
      title
      status
      pfId: metafield(namespace: "${METAFIELD_NAMESPACE}", key: "${METAFIELD_ID_KEY}") { value }
      pfHash: metafield(namespace: "${METAFIELD_NAMESPACE}", key: "${METAFIELD_HASH_KEY}") { value }
    }
    pageInfo { hasNextPage endCursor }
  }
}`;

const VARIANTS_BY_SKU_QUERY = `
query VariantsBySku($query: String!) {
  productVariants(first: 100, query: $query) {
    nodes { id sku product { id } }
  }
}`;

const PRODUCT_VARIANTS_QUERY = `
query ProductVariants($id: ID!, $cursor: String) {
  product(id: $id) {
    variants(first: 100, after: $cursor) {
      nodes { id sku }
      pageInfo { hasNextPage endCursor }
    }
  }
}`;

export const PRODUCT_SET_MUTATION = `
mutation PrintfulProductSet($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
  productSet(input: $input, identifier: $identifier, synchronous: true) {
    product { id title }
    userErrors { field message code }
  }
}`;

export const METAFIELDS_SET_MUTATION = `
mutation PrintfulMetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields { key value }
    userErrors { field message code }
  }
}`;

export class ShopifyClient {
  private readonly fetchImpl: FetchLike;
  private readonly sleep: SleepFn;
  private readonly logger: Logger;
  private readonly maxRetries: number;
  readonly endpoint: string;

  constructor(private readonly opts: ShopifyClientOptions) {
    if (!opts.shopDomain || !opts.accessToken) throw new Error('Shopify shop domain and admin access token are required');
    this.fetchImpl = opts.fetch ?? ((url, init) => fetch(url, init));
    this.sleep = opts.sleep ?? defaultSleep;
    this.logger = opts.logger ?? consoleLogger;
    this.maxRetries = opts.maxRetries ?? 6;
    this.endpoint = `https://${opts.shopDomain}/admin/api/${opts.apiVersion}/graphql.json`;
  }

  /**
   * Run a GraphQL request. Retries on HTTP 429/5xx, network errors, and the
   * GraphQL THROTTLED error (waiting for the cost bucket to refill).
   */
  async graphql<T = any>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
    for (let attempt = 0; ; attempt++) {
      let res: Response;
      try {
        res = await this.fetchImpl(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Shopify-Access-Token': this.opts.accessToken,
          },
          body: JSON.stringify({ query, variables }),
        });
      } catch (err) {
        if (attempt >= this.maxRetries) throw err;
        const wait = backoffMs(attempt);
        this.logger.warn(`[shopify] network error; retrying in ${wait}ms`);
        await this.sleep(wait);
        continue;
      }

      if (res.status === 429 || res.status >= 500) {
        if (attempt >= this.maxRetries) {
          throw new HttpError(`Shopify GraphQL failed with ${res.status} after ${attempt + 1} attempts`, res.status);
        }
        const wait = res.status === 429 ? retryAfterMs(res.headers, backoffMs(attempt, 2000)) : backoffMs(attempt);
        this.logger.warn(`[shopify] HTTP ${res.status}; retrying in ${wait}ms (attempt ${attempt + 1}/${this.maxRetries})`);
        await this.sleep(wait);
        continue;
      }

      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new HttpError(`Shopify GraphQL failed with ${res.status}: ${body.slice(0, 300)}`, res.status, body);
      }

      const json: any = await res.json();
      const errors: any[] = json.errors ?? [];
      const throttled = errors.some((e) => e?.extensions?.code === 'THROTTLED');
      if (throttled) {
        if (attempt >= this.maxRetries) throw new Error('Shopify GraphQL still THROTTLED after retries');
        const wait = throttleWaitMs(json, attempt);
        this.logger.warn(`[shopify] THROTTLED; waiting ${wait}ms for the cost bucket to refill`);
        await this.sleep(wait);
        continue;
      }
      if (errors.length) {
        throw new Error(`Shopify GraphQL errors: ${errors.map((e) => e?.message ?? String(e)).join('; ')}`);
      }

      // Be polite when the bucket is nearly empty, even without an error.
      const status = json.extensions?.cost?.throttleStatus;
      if (status && status.currentlyAvailable < 100 && status.restoreRate > 0) {
        await this.sleep(Math.ceil(((100 - status.currentlyAvailable) / status.restoreRate) * 1000));
      }
      return json.data as T;
    }
  }

  /** Every product with its Printful metafields (cursor pagination). */
  async listProductsIndex(): Promise<ShopifyIndexedProduct[]> {
    const out: ShopifyIndexedProduct[] = [];
    let cursor: string | null = null;
    for (;;) {
      const data: any = await this.graphql(PRODUCTS_INDEX_QUERY, { cursor });
      for (const n of data.products.nodes) {
        out.push({
          id: n.id,
          legacyResourceId: String(n.legacyResourceId),
          title: n.title,
          status: n.status,
          printfulId: n.pfId?.value ?? undefined,
          syncHash: n.pfHash?.value ?? undefined,
        });
      }
      if (!data.products.pageInfo.hasNextPage) break;
      cursor = data.products.pageInfo.endCursor;
    }
    this.logger.info(`[shopify] indexed ${out.length} product(s)`);
    return out;
  }

  /** Map of SKU -> product ids that have a variant with that SKU. */
  async findProductsBySkus(skus: string[]): Promise<Map<string, Set<string>>> {
    const result = new Map<string, Set<string>>();
    const clean = [...new Set(skus.filter(Boolean))];
    // Keep each search query short; Shopify search strings have a length limit.
    for (let i = 0; i < clean.length; i += 25) {
      const chunk = clean.slice(i, i + 25);
      const query = chunk.map((s) => `sku:"${s.replace(/(["\\])/g, '\\$1')}"`).join(' OR ');
      const data: any = await this.graphql(VARIANTS_BY_SKU_QUERY, { query });
      for (const n of data.productVariants.nodes) {
        if (!n.sku || !chunk.includes(n.sku)) continue; // search is fuzzy; keep exact matches only
        if (!result.has(n.sku)) result.set(n.sku, new Set());
        result.get(n.sku)!.add(n.product.id);
      }
    }
    return result;
  }

  async getProductVariants(productId: string): Promise<ShopifyVariantRef[]> {
    const out: ShopifyVariantRef[] = [];
    let cursor: string | null = null;
    for (;;) {
      const data: any = await this.graphql(PRODUCT_VARIANTS_QUERY, { id: productId, cursor });
      if (!data.product) break;
      out.push(...data.product.variants.nodes.map((n: any) => ({ id: n.id, sku: n.sku ?? null })));
      if (!data.product.variants.pageInfo.hasNextPage) break;
      cursor = data.product.variants.pageInfo.endCursor;
    }
    return out;
  }

  async productSet(input: Record<string, unknown>, productId?: string): Promise<{ id: string; title: string }> {
    const data: any = await this.graphql(PRODUCT_SET_MUTATION, {
      input,
      identifier: productId ? { id: productId } : undefined,
    });
    const errs = data.productSet.userErrors ?? [];
    if (errs.length) throw new Error(`productSet userErrors: ${errs.map((e: any) => `${(e.field ?? []).join('.')}: ${e.message}`).join('; ')}`);
    return data.productSet.product;
  }

  /** Upserts metafields only (unlike productSet, it never deletes other metafields). */
  async setPrintfulMetafields(productId: string, printfulId: string, hash: string): Promise<void> {
    const data: any = await this.graphql(METAFIELDS_SET_MUTATION, {
      metafields: [
        { ownerId: productId, namespace: METAFIELD_NAMESPACE, key: METAFIELD_ID_KEY, type: 'single_line_text_field', value: printfulId },
        { ownerId: productId, namespace: METAFIELD_NAMESPACE, key: METAFIELD_HASH_KEY, type: 'single_line_text_field', value: hash },
      ],
    });
    const errs = data.metafieldsSet.userErrors ?? [];
    if (errs.length) throw new Error(`metafieldsSet userErrors: ${errs.map((e: any) => e.message).join('; ')}`);
  }
}

function throttleWaitMs(json: any, attempt: number): number {
  const cost = json?.extensions?.cost;
  const status = cost?.throttleStatus;
  if (status && status.restoreRate > 0) {
    const needed = (cost.requestedQueryCost ?? 100) - status.currentlyAvailable;
    return Math.max(500, Math.ceil((needed / status.restoreRate) * 1000));
  }
  return backoffMs(attempt);
}
