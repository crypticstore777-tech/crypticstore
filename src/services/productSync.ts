/**
 * Printful -> Shopify product sync.
 *
 * Printful is the source of truth for title, options, variants, SKUs and retail prices.
 * For each Printful sync product we find the matching Shopify product
 * (see `matchProduct`) and create or update it with the Admin GraphQL
 * `productSet` mutation. We then store the Printful id and a content hash in
 * product metafields (printful.sync_product_id / printful.sync_hash) so later
 * runs match exactly and skip products that haven't changed.
 *
 * DRY_RUN (the default) only reads from Printful/Shopify and logs the plan.
 */
import { createHash } from 'node:crypto';
import { consoleLogger, loadSettings, type FetchLike, type Logger, type SleepFn, type SyncSettings } from './http';
import { PrintfulClient, type PrintfulSyncProductDetail, type PrintfulSyncVariant } from './printfulApi';
import { ShopifyClient, type ShopifyIndexedProduct } from './shopifyApi';

export interface DesiredVariant {
  printfulVariantId: number;
  sku: string;
  price: string;
  optionValues: { optionName: string; name: string }[];
  imageUrl?: string;
}

export interface DesiredProduct {
  printfulId: string;
  externalId?: string;
  title: string;
  options: { name: string; values: string[] }[];
  variants: DesiredVariant[];
  imageUrls: string[];
  hash: string;
  warnings: string[];
}

export type PlanAction = 'create' | 'update' | 'unchanged' | 'skip';

export interface PlanItem {
  printfulId: string;
  title: string;
  action: PlanAction;
  matchedBy?: 'metafield' | 'sku';
  shopifyProductId?: string;
  reason?: string;
  variantCount: number;
  done?: boolean;
  error?: string;
}

export interface ProductSyncResult {
  dryRun: boolean;
  dryRunReason: string;
  printfulProducts: number;
  created: number;
  updated: number;
  unchanged: number;
  skipped: number;
  failed: number;
  plan: PlanItem[];
  skippedEntirely?: string;
}

export interface SyncDeps {
  settings?: SyncSettings;
  fetch?: FetchLike;
  sleep?: SleepFn;
  logger?: Logger;
  limit?: number;
}

const DEFAULT_OPTION_VALUE = 'Default';

function fallbackSku(v: PrintfulSyncVariant): string {
  return v.sku && v.sku.trim() ? v.sku.trim() : `PF-${v.id}`;
}

function variantImage(v: PrintfulSyncVariant): string | undefined {
  const preview = v.files?.find((f) => f.type === 'preview' && f.preview_url)?.preview_url;
  return preview ?? v.product?.image ?? undefined;
}

/** Strip the product name from a Printful variant name ("Tee / Black / M" -> "Black / M"). */
function variantLabel(productName: string, variantName: string): string {
  let label = variantName ?? '';
  if (productName && label.toLowerCase().startsWith(productName.toLowerCase())) {
    label = label.slice(productName.length);
  }
  return label.replace(/^[\s\-/|–—]+/, '').trim();
}

/** Build the Shopify-side shape we want for one Printful sync product. Pure function. */
export function buildDesiredProduct(detail: PrintfulSyncProductDetail): DesiredProduct {
  const sp = detail.sync_product;
  const warnings: string[] = [];
  const usable = (detail.sync_variants ?? []).filter((v) => {
    if (v.is_ignored) return false;
    const price = Number(v.retail_price);
    if (!v.retail_price || !Number.isFinite(price) || price <= 0) {
      warnings.push(`variant ${v.id} "${v.name}" has no retail price; skipped`);
      return false;
    }
    return true;
  });

  const hasColor = usable.some((v) => v.color && v.color.trim());
  const hasSize = usable.some((v) => v.size && v.size.trim());

  let optionNames: string[];
  let valuesFor: (v: PrintfulSyncVariant) => string[];
  if (hasColor || hasSize) {
    optionNames = [...(hasColor ? ['Color'] : []), ...(hasSize ? ['Size'] : [])];
    valuesFor = (v) => [
      ...(hasColor ? [v.color?.trim() || DEFAULT_OPTION_VALUE] : []),
      ...(hasSize ? [v.size?.trim() || DEFAULT_OPTION_VALUE] : []),
    ];
  } else {
    optionNames = ['Variant'];
    valuesFor = (v) => [variantLabel(sp.name, v.name) || fallbackSku(v)];
  }

  // Option combinations must be unique in Shopify; fall back to one option keyed by label + SKU if not.
  const combos = usable.map((v) => valuesFor(v).join('\u0000'));
  if (new Set(combos).size !== combos.length) {
    warnings.push('duplicate option combinations; using a single "Variant" option');
    optionNames = ['Variant'];
    const seen = new Map<string, number>();
    valuesFor = (v) => {
      const base = variantLabel(sp.name, v.name) || fallbackSku(v);
      const n = (seen.get(base) ?? 0) + 1;
      seen.set(base, n);
      return [n === 1 ? base : `${base} (${fallbackSku(v)})`];
    };
  }

  const variants: DesiredVariant[] = usable.map((v) => {
    const values = valuesFor(v);
    return {
      printfulVariantId: v.id,
      sku: fallbackSku(v),
      price: Number(v.retail_price).toFixed(2),
      optionValues: optionNames.map((optionName, i) => ({ optionName, name: values[i] })),
      imageUrl: variantImage(v),
    };
  });

  const options = optionNames.map((name, i) => ({
    name,
    values: [...new Set(variants.map((v) => v.optionValues[i].name))],
  }));

  const imageUrls = [...new Set([sp.thumbnail_url, ...variants.map((v) => v.imageUrl)].filter((u): u is string => !!u))];

  const hash = createHash('sha256')
    .update(
      JSON.stringify({
        title: sp.name,
        options,
        variants: variants.map((v) => [v.sku, v.price, v.optionValues.map((o) => o.name)]),
      }),
    )
    .digest('hex')
    .slice(0, 32);

  return {
    printfulId: String(sp.id),
    externalId: sp.external_id ?? undefined,
    title: sp.name,
    options,
    variants,
    imageUrls,
    hash,
    warnings,
  };
}

/** ProductSetInput for the Admin API. Images/tags/status are only sent on create so updates never clobber them. */
export function toProductSetInput(
  desired: DesiredProduct,
  opts: { create: boolean; status: 'DRAFT' | 'ACTIVE'; existingVariantIdsBySku?: Map<string, string> },
): Record<string, unknown> {
  const input: Record<string, unknown> = {
    title: desired.title,
    productOptions: desired.options.map((o, i) => ({ name: o.name, position: i + 1, values: o.values.map((name) => ({ name })) })),
    variants: desired.variants.map((v) => {
      const variant: Record<string, unknown> = {
        optionValues: v.optionValues,
        price: v.price,
        inventoryItem: { sku: v.sku, tracked: false },
        inventoryPolicy: 'CONTINUE', // print-on-demand: never "out of stock"
      };
      const existingId = opts.existingVariantIdsBySku?.get(v.sku);
      if (existingId) variant.id = existingId;
      if (opts.create && v.imageUrl) variant.file = { originalSource: v.imageUrl, contentType: 'IMAGE' };
      return variant;
    }),
  };
  if (opts.create) {
    input.status = opts.status;
    input.tags = ['printful'];
    if (desired.imageUrls.length) {
      input.files = desired.imageUrls.map((url) => ({ originalSource: url, contentType: 'IMAGE', alt: desired.title }));
    }
  }
  return input;
}

export interface MatchContext {
  byPrintfulId: Map<string, ShopifyIndexedProduct>;
  byLegacyId: Map<string, ShopifyIndexedProduct>;
  skuIndex: Map<string, Set<string>>;
  productsById: Map<string, ShopifyIndexedProduct>;
  skipPrintfulManaged: boolean;
}

/**
 * Matching order:
 *  1. metafield printful.sync_product_id == Printful sync product id (exact, set by this sync)
 *  2. Printful external_id == an existing Shopify product id -> the product is owned by
 *     Printful's own Shopify integration; skipped by default so we don't fight that app
 *  3. a Shopify variant SKU equals one of the Printful variant SKUs (must point at one product)
 *  4. otherwise create a new product
 */
export function matchProduct(
  desired: DesiredProduct,
  ctx: MatchContext,
): { action: 'create' | 'match' | 'skip'; product?: ShopifyIndexedProduct; matchedBy?: 'metafield' | 'sku'; reason?: string } {
  const byMeta = ctx.byPrintfulId.get(desired.printfulId);
  if (byMeta) return { action: 'match', product: byMeta, matchedBy: 'metafield' };

  const ext = desired.externalId?.replace(/^gid:\/\/shopify\/Product\//, '');
  if (ext && ctx.byLegacyId.has(ext) && ctx.skipPrintfulManaged) {
    return {
      action: 'skip',
      product: ctx.byLegacyId.get(ext),
      reason: "already linked to Shopify by Printful's own integration (external_id); set SKIP_PRINTFUL_MANAGED=false to manage it here",
    };
  }

  const productIds = new Set<string>();
  for (const v of desired.variants) for (const id of ctx.skuIndex.get(v.sku) ?? []) productIds.add(id);
  if (productIds.size === 1) {
    const product = ctx.productsById.get([...productIds][0]);
    if (product && !product.printfulId) return { action: 'match', product, matchedBy: 'sku' };
    if (product) return { action: 'skip', product, reason: `SKUs belong to a product already linked to Printful id ${product.printfulId}` };
  }
  if (productIds.size > 1) {
    return { action: 'skip', reason: `SKUs are spread over ${productIds.size} Shopify products; fix manually` };
  }
  return { action: 'create' };
}

function withLimit<T>(items: T[], limit?: number): T[] {
  return limit && limit > 0 ? items.slice(0, limit) : items;
}

export async function syncPrintfulToShopify(deps: SyncDeps = {}): Promise<ProductSyncResult> {
  const settings = deps.settings ?? loadSettings();
  const logger = deps.logger ?? consoleLogger;
  const result: ProductSyncResult = {
    dryRun: settings.dryRun,
    dryRunReason: settings.dryRunReason,
    printfulProducts: 0,
    created: 0,
    updated: 0,
    unchanged: 0,
    skipped: 0,
    failed: 0,
    plan: [],
  };

  logger.info(`[sync] mode: ${settings.dryRun ? 'DRY RUN' : 'LIVE'} (${settings.dryRunReason})`);

  if (!settings.printfulToken) {
    result.skippedEntirely = 'PRINTFUL_API_KEY not set; nothing to read. Dry run made no network calls.';
    logger.info(`[sync] ${result.skippedEntirely}`);
    return result;
  }

  const printful = new PrintfulClient({
    token: settings.printfulToken,
    storeId: settings.printfulStoreId,
    fetch: deps.fetch,
    sleep: deps.sleep,
    logger,
  });
  const details = withLimit(await printful.fetchAllProductsWithVariants(), deps.limit);
  result.printfulProducts = details.length;

  const shopify =
    settings.shopifyDomain && settings.shopifyAdminToken
      ? new ShopifyClient({
          shopDomain: settings.shopifyDomain,
          accessToken: settings.shopifyAdminToken,
          apiVersion: settings.shopifyApiVersion,
          fetch: deps.fetch,
          sleep: deps.sleep,
          logger,
        })
      : undefined;

  const desiredList = details.map(buildDesiredProduct);

  let ctx: MatchContext | undefined;
  if (shopify) {
    const index = await shopify.listProductsIndex();
    const unmatchedSkus = desiredList
      .filter((d) => !index.some((p) => p.printfulId === d.printfulId))
      .flatMap((d) => d.variants.map((v) => v.sku));
    ctx = {
      byPrintfulId: new Map(index.filter((p) => p.printfulId).map((p) => [p.printfulId!, p])),
      byLegacyId: new Map(index.map((p) => [p.legacyResourceId, p])),
      productsById: new Map(index.map((p) => [p.id, p])),
      skuIndex: unmatchedSkus.length ? await shopify.findProductsBySkus(unmatchedSkus) : new Map(),
      skipPrintfulManaged: settings.skipPrintfulManaged,
    };
  } else {
    logger.warn('[sync] Shopify Admin credentials not set; cannot check for existing products, every product is shown as "create".');
  }

  for (const desired of desiredList) {
    for (const w of desired.warnings) logger.warn(`[sync] Printful ${desired.printfulId} "${desired.title}": ${w}`);
    const item: PlanItem = { printfulId: desired.printfulId, title: desired.title, action: 'create', variantCount: desired.variants.length };
    result.plan.push(item);

    if (desired.variants.length === 0) {
      item.action = 'skip';
      item.reason = 'no sellable variants (missing retail prices or all ignored)';
    } else if (ctx) {
      const m = matchProduct(desired, ctx);
      if (m.action === 'skip') {
        item.action = 'skip';
        item.reason = m.reason;
        item.shopifyProductId = m.product?.id;
      } else if (m.action === 'match') {
        item.shopifyProductId = m.product!.id;
        item.matchedBy = m.matchedBy;
        item.action = m.product!.syncHash === desired.hash ? 'unchanged' : 'update';
      }
    }

    const where = item.shopifyProductId ? ` -> ${item.shopifyProductId}${item.matchedBy ? ` (matched by ${item.matchedBy})` : ''}` : '';
    logger.info(
      `[sync] ${settings.dryRun ? '[dry-run] ' : ''}${item.action.toUpperCase()} Printful ${desired.printfulId} "${desired.title}" (${desired.variants.length} variant(s))${where}${item.reason ? `: ${item.reason}` : ''}`,
    );

    if (item.action === 'skip') {
      result.skipped++;
      continue;
    }
    if (item.action === 'unchanged') {
      result.unchanged++;
      continue;
    }
    if (settings.dryRun || !shopify) {
      if (item.action === 'create') result.created++;
      else result.updated++;
      continue;
    }

    try {
      if (item.action === 'create') {
        const product = await shopify.productSet(toProductSetInput(desired, { create: true, status: settings.newProductStatus }));
        await shopify.setPrintfulMetafields(product.id, desired.printfulId, desired.hash);
        item.shopifyProductId = product.id;
        result.created++;
      } else {
        const existing = await shopify.getProductVariants(item.shopifyProductId!);
        const desiredSkus = new Set(desired.variants.map((v) => v.sku));
        const extra = existing.filter((v) => !v.sku || !desiredSkus.has(v.sku));
        if (item.matchedBy === 'sku' && extra.length > 0) {
          // First adoption of a product we didn't create: productSet would delete these variants.
          item.action = 'skip';
          item.reason = `has ${extra.length} Shopify variant(s) not in Printful; not adopting automatically`;
          logger.warn(`[sync] SKIP ${item.shopifyProductId}: ${item.reason}`);
          result.skipped++;
          continue;
        }
        const existingVariantIdsBySku = new Map(existing.filter((v) => v.sku).map((v) => [v.sku!, v.id]));
        await shopify.productSet(
          toProductSetInput(desired, { create: false, status: settings.newProductStatus, existingVariantIdsBySku }),
          item.shopifyProductId,
        );
        await shopify.setPrintfulMetafields(item.shopifyProductId!, desired.printfulId, desired.hash);
        result.updated++;
      }
      item.done = true;
    } catch (err) {
      item.error = err instanceof Error ? err.message : String(err);
      result.failed++;
      logger.error(`[sync] FAILED Printful ${desired.printfulId} "${desired.title}": ${item.error}`);
    }
  }

  logger.info(
    `[sync] ${settings.dryRun ? 'dry-run plan' : 'done'}: ${result.printfulProducts} Printful product(s); ` +
      `${settings.dryRun ? 'would create' : 'created'} ${result.created}, ${settings.dryRun ? 'would update' : 'updated'} ${result.updated}, ` +
      `unchanged ${result.unchanged}, skipped ${result.skipped}, failed ${result.failed}`,
  );
  return result;
}

export interface ShopifyAuditResult {
  linkedProducts: number;
  orphaned: { shopifyProductId: string; title: string; printfulId: string }[];
  skippedEntirely?: string;
}

/** Read-only: report Shopify products linked to a Printful id that no longer exists in Printful. Never deletes. */
export async function auditShopifyLinks(deps: SyncDeps = {}): Promise<ShopifyAuditResult> {
  const settings = deps.settings ?? loadSettings();
  const logger = deps.logger ?? consoleLogger;
  if (!settings.shopifyDomain || !settings.shopifyAdminToken) {
    const msg = 'Shopify Admin credentials not set; skipping Shopify link audit.';
    logger.info(`[audit] ${msg}`);
    return { linkedProducts: 0, orphaned: [], skippedEntirely: msg };
  }
  const shopify = new ShopifyClient({
    shopDomain: settings.shopifyDomain,
    accessToken: settings.shopifyAdminToken,
    apiVersion: settings.shopifyApiVersion,
    fetch: deps.fetch,
    sleep: deps.sleep,
    logger,
  });
  const linked = (await shopify.listProductsIndex()).filter((p) => p.printfulId);
  let orphaned: ShopifyAuditResult['orphaned'] = [];
  if (settings.printfulToken && linked.length) {
    const printful = new PrintfulClient({ token: settings.printfulToken, storeId: settings.printfulStoreId, fetch: deps.fetch, sleep: deps.sleep, logger });
    const ids = new Set((await printful.listSyncProducts()).map((p) => String(p.id)));
    orphaned = linked
      .filter((p) => !ids.has(p.printfulId!))
      .map((p) => ({ shopifyProductId: p.id, title: p.title, printfulId: p.printfulId! }));
    for (const o of orphaned) {
      logger.warn(`[audit] Shopify product ${o.shopifyProductId} "${o.title}" links to Printful ${o.printfulId}, which no longer exists (not deleted; review manually)`);
    }
  }
  logger.info(`[audit] ${linked.length} Shopify product(s) linked to Printful; ${orphaned.length} orphaned`);
  return { linkedProducts: linked.length, orphaned };
}
