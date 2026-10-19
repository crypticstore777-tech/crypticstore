/**
 * Shopify entry point used by ./sync.ts.
 * The Admin GraphQL client lives in ./shopifyApi.ts.
 */
import { auditShopifyLinks, type ShopifyAuditResult } from './productSync';

export { ShopifyClient } from './shopifyApi';

/**
 * Read-only check of Shopify products linked to Printful (reports orphans, never deletes).
 * Name kept for compatibility with ./sync.ts.
 */
export async function syncShopifyProductsToDatabase(): Promise<ShopifyAuditResult> {
  return auditShopifyLinks();
}
