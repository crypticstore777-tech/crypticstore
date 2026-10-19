/**
 * CLI entry point: `npm run sync`
 *
 * Env (names only; values come from GitHub Actions secrets):
 *   PRINTFUL_API_KEY | VITE_PRINTFUL_API_KEY   Printful private token (Bearer)
 *   PRINTFUL_STORE_ID                          optional, for account-level tokens
 *   SHOPIFY_STORE_DOMAIN | VITE_SHOPIFY_STORE_URL   your-store.myshopify.com
 *   SHOPIFY_ADMIN_ACCESS_TOKEN                 Admin API token (read_products, write_products)
 *   SHOPIFY_API_VERSION                        default 2026-10
 *   SHOPIFY_NEW_PRODUCT_STATUS                 DRAFT (default) or ACTIVE, for newly created products
 *   SKIP_PRINTFUL_MANAGED                      default true
 *   SYNC_LIMIT                                 optional, only process the first N Printful products
 *   DRY_RUN                                    default true; set DRY_RUN=false for a live run
 */
import { loadSettings } from '../src/services/http';
import { performSync } from '../src/services/sync';

async function main(): Promise<number> {
  let settings;
  try {
    settings = loadSettings();
  } catch (err) {
    console.error(`✗ ${err instanceof Error ? err.message : String(err)}`);
    return 1;
  }
  if (settings.missing.length) console.log(`Missing settings (dry run forced): ${settings.missing.join(', ')}`);

  const { success, results, error } = await performSync(['printful', 'shopify']);
  if (!success) {
    console.error(`✗ Sync failed: ${error}`);
    return 1;
  }
  if (results.printful_error || results.shopify_error) return 1;
  if (results.printful?.failed > 0) {
    console.error(`✗ ${results.printful.failed} product(s) failed to sync`);
    return 1;
  }
  return 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err);
    process.exit(1);
  },
);
