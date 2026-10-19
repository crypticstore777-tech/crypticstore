/* eslint-disable @typescript-eslint/no-explicit-any -- loosely typed external API JSON and test fixtures */
/**
 * Printful entry point used by ./sync.ts.
 * The API client lives in ./printfulApi.ts; the sync logic in ./productSync.ts.
 */
import { syncPrintfulToShopify, type ProductSyncResult } from './productSync';

export { PrintfulClient } from './printfulApi';
export type { PrintfulSyncProductDetail, PrintfulSyncProductSummary, PrintfulSyncVariant } from './printfulApi';

/**
 * Pull every Printful sync product and create/update it in Shopify.
 * Dry run (no writes) unless DRY_RUN=false and all secrets are set.
 * Name kept for compatibility with ./sync.ts.
 */
export async function syncPrintfulProductsToDatabase(): Promise<ProductSyncResult> {
  const limit = Number((globalThis as any).process?.env?.SYNC_LIMIT ?? '') || undefined;
  return syncPrintfulToShopify({ limit });
}
