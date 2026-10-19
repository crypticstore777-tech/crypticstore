/* eslint-disable @typescript-eslint/no-explicit-any -- loosely typed external API JSON and test fixtures */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildDesiredProduct, matchProduct, syncPrintfulToShopify, toProductSetInput } from '../src/services/productSync';
import { loadSettings, normalizeShopDomain, silentLogger } from '../src/services/http';
import { json, mockFetch, noSleep, pfProduct, type Call } from './helpers';

const liveEnv = {
  PRINTFUL_API_KEY: 'pf',
  SHOPIFY_STORE_URL: 'https://demo.myshopify.com/',
  SHOPIFY_ADMIN_ACCESS_TOKEN: 'shpat',
  DRY_RUN: 'false',
};

test('settings: dry run is the default, and forced when secrets are missing', () => {
  assert.equal(loadSettings({}).dryRun, true);
  assert.equal(loadSettings({}).missing.length, 3);
  assert.equal(loadSettings({ ...liveEnv, DRY_RUN: undefined }).dryRun, true);
  assert.equal(loadSettings(liveEnv).dryRun, false);
  assert.throws(() => loadSettings({ DRY_RUN: 'false' }), /missing/);
  assert.equal(loadSettings({ VITE_PRINTFUL_API_KEY: 'x' }).printfulToken, 'x');
  assert.equal(normalizeShopDomain('https://Demo.myshopify.com/admin'), 'demo.myshopify.com');
  assert.equal(normalizeShopDomain('demo'), 'demo.myshopify.com');
});

test('buildDesiredProduct maps color/size to options and is deterministic', () => {
  const d = buildDesiredProduct(pfProduct(7, 'Tee', [{ color: 'Black', size: 'M' }, { color: 'Black', size: 'L' }, { color: 'White', size: 'M', retail_price: null }]));
  assert.deepEqual(d.options, [
    { name: 'Color', values: ['Black'] },
    { name: 'Size', values: ['M', 'L'] },
  ]);
  assert.equal(d.variants.length, 2);
  assert.equal(d.variants[0].price, '25.00');
  assert.equal(d.warnings.length, 1);
  assert.equal(d.hash, buildDesiredProduct(pfProduct(7, 'Tee', [{ color: 'Black', size: 'M' }, { color: 'Black', size: 'L' }])).hash);
});

test('buildDesiredProduct falls back to a single Variant option and PF-<id> SKUs', () => {
  const d = buildDesiredProduct(pfProduct(8, 'Poster', [{ name: 'Poster - 12x18', sku: '' }, { name: 'Poster - 18x24', sku: null }]));
  assert.deepEqual(d.options, [{ name: 'Variant', values: ['12x18', '18x24'] }]);
  assert.deepEqual(d.variants.map((v) => v.sku), ['PF-800', 'PF-801']);
});

test('toProductSetInput sends images/status/tags only on create and reuses variant ids on update', () => {
  const d = buildDesiredProduct(pfProduct(9, 'Hat', [{ color: 'Red' }]));
  const create = toProductSetInput(d, { create: true, status: 'DRAFT' });
  assert.equal(create.status, 'DRAFT');
  assert.ok(Array.isArray(create.files));
  const update = toProductSetInput(d, { create: false, status: 'DRAFT', existingVariantIdsBySku: new Map([['SKU-9-0', 'gid://shopify/ProductVariant/5']]) });
  assert.equal(update.status, undefined);
  assert.equal(update.files, undefined);
  assert.equal(update.tags, undefined);
  assert.equal((update.variants as any[])[0].id, 'gid://shopify/ProductVariant/5');
  assert.equal((update.variants as any[])[0].inventoryItem.sku, 'SKU-9-0');
});

test('matchProduct order: metafield, Printful-managed skip, SKU, create', () => {
  const d = buildDesiredProduct(pfProduct(5, 'Mug', [{ color: 'White' }], { external_id: '999' }));
  const p = (id: string, extra = {}) => ({ id: `gid://shopify/Product/${id}`, legacyResourceId: id, title: 't', status: 'ACTIVE', ...extra });
  const base = { byPrintfulId: new Map(), byLegacyId: new Map(), skuIndex: new Map(), productsById: new Map(), skipPrintfulManaged: true };

  assert.equal(matchProduct(d, { ...base, byPrintfulId: new Map([['5', p('1', { printfulId: '5' })]]) }).matchedBy, 'metafield');
  assert.equal(matchProduct(d, { ...base, byLegacyId: new Map([['999', p('999')]]) }).action, 'skip');
  const sku = matchProduct(d, { ...base, skuIndex: new Map([['SKU-5-0', new Set(['gid://shopify/Product/3'])]]), productsById: new Map([['gid://shopify/Product/3', p('3')]]) });
  assert.equal(sku.matchedBy, 'sku');
  assert.equal(
    matchProduct(d, { ...base, skuIndex: new Map([['SKU-5-0', new Set(['a', 'b'])]]) }).action,
    'skip',
  );
  assert.equal(matchProduct(d, base).action, 'create');
});

test('no secrets: dry run makes zero network calls', async () => {
  const { fetch, calls } = mockFetch(() => undefined);
  const r = await syncPrintfulToShopify({ settings: loadSettings({}), fetch, sleep: noSleep, logger: silentLogger });
  assert.equal(r.dryRun, true);
  assert.ok(r.skippedEntirely);
  assert.equal(calls.length, 0);
});

/** Fake Printful + Shopify backend. */
function backend(shopifyProducts: any[]) {
  return (c: Call) => {
    if (c.url.startsWith('https://api.printful.com/store/products?')) {
      return json({ code: 200, result: [{ id: 1, name: 'Tee' }, { id: 2, name: 'Hoodie' }, { id: 3, name: 'Cap' }], paging: { total: 3 } });
    }
    const m = c.url.match(/api\.printful\.com\/store\/products\/(\d+)$/);
    if (m) {
      const id = Number(m[1]);
      const name = { 1: 'Tee', 2: 'Hoodie', 3: 'Cap' }[id]!;
      return json({ code: 200, result: pfProduct(id, name, [{ color: 'Black', size: 'M' }, { color: 'Black', size: 'L' }]) });
    }
    if (c.url.includes('myshopify.com')) {
      const q: string = c.body.query;
      if (q.includes('ProductsIndex')) return json({ data: { products: { nodes: shopifyProducts, pageInfo: { hasNextPage: false, endCursor: null } } } });
      if (q.includes('VariantsBySku')) {
        // Hoodie (Printful 2) already exists in Shopify by SKU
        return json({ data: { productVariants: { nodes: [{ id: 'gid://shopify/ProductVariant/20', sku: 'SKU-2-0', product: { id: 'gid://shopify/Product/200' } }] } } });
      }
      if (q.includes('ProductVariants')) {
        const id = c.body.variables.id;
        const nodes = id === 'gid://shopify/Product/200'
          ? [{ id: 'gid://shopify/ProductVariant/20', sku: 'SKU-2-0' }, { id: 'gid://shopify/ProductVariant/21', sku: 'SKU-2-1' }]
          : [{ id: 'gid://shopify/ProductVariant/10', sku: 'SKU-1-0' }];
        return json({ data: { product: { variants: { nodes, pageInfo: { hasNextPage: false, endCursor: null } } } } });
      }
      if (q.includes('productSet')) {
        const id = c.body.variables.identifier?.id ?? 'gid://shopify/Product/new-3';
        return json({ data: { productSet: { product: { id, title: c.body.variables.input.title }, userErrors: [] } } });
      }
      if (q.includes('metafieldsSet')) return json({ data: { metafieldsSet: { metafields: [], userErrors: [] } } });
    }
    return undefined;
  };
}

const existing = (hash: string | null) => [
  { id: 'gid://shopify/Product/100', legacyResourceId: '100', title: 'Tee (old)', status: 'ACTIVE', pfId: { value: '1' }, pfHash: hash ? { value: hash } : null },
  { id: 'gid://shopify/Product/200', legacyResourceId: '200', title: 'Hoodie', status: 'ACTIVE', pfId: null, pfHash: null },
];

const isMutation = (c: Call) => /productSet|metafieldsSet/.test(c.body?.query ?? '');

test('dry run with secrets: reads both APIs, plans create/update, sends no mutations', async () => {
  const { fetch, calls } = mockFetch(backend(existing(null)));
  const r = await syncPrintfulToShopify({ settings: loadSettings({ ...liveEnv, DRY_RUN: 'true' }), fetch, sleep: noSleep, logger: silentLogger });
  assert.equal(r.dryRun, true);
  assert.deepEqual(r.plan.map((p) => [p.printfulId, p.action, p.matchedBy]), [
    ['1', 'update', 'metafield'],
    ['2', 'update', 'sku'],
    ['3', 'create', undefined],
  ]);
  assert.equal(calls.filter(isMutation).length, 0);
  assert.ok(calls.filter((c) => c.url.includes('printful')).every((c) => c.method === 'GET'));
});

test('live run: creates, updates by metafield, stores metafields, and is idempotent on rerun', async () => {
  const { fetch, calls } = mockFetch(backend(existing(null)));
  const r = await syncPrintfulToShopify({ settings: loadSettings(liveEnv), fetch, sleep: noSleep, logger: silentLogger });
  assert.equal(r.created, 1);
  assert.equal(r.updated, 2);
  assert.equal(r.failed, 0);

  const sets = calls.filter((c) => c.body?.query?.includes('productSet'));
  assert.equal(sets.length, 3);
  const update = sets.find((c) => c.body.variables.identifier?.id === 'gid://shopify/Product/100')!;
  assert.equal(update.body.variables.input.variants[0].id, 'gid://shopify/ProductVariant/10');
  assert.equal(update.body.variables.input.status, undefined);
  const create = sets.find((c) => !c.body.variables.identifier)!;
  assert.equal(create.body.variables.input.status, 'DRAFT');
  assert.equal(create.body.variables.input.title, 'Cap');
  const meta = calls.filter((c) => c.body?.query?.includes('metafieldsSet'));
  assert.equal(meta.length, 3);
  assert.equal(meta[0].body.variables.metafields[0].key, 'sync_product_id');

  // Second run: Shopify now carries the hash for Tee -> unchanged, no productSet for it.
  const teeHash = buildDesiredProduct(pfProduct(1, 'Tee', [{ color: 'Black', size: 'M' }, { color: 'Black', size: 'L' }])).hash;
  const second = mockFetch(backend(existing(teeHash)));
  const r2 = await syncPrintfulToShopify({ settings: loadSettings(liveEnv), fetch: second.fetch, sleep: noSleep, logger: silentLogger });
  assert.equal(r2.plan[0].action, 'unchanged');
  assert.ok(!second.calls.some((c) => c.body?.variables?.identifier?.id === 'gid://shopify/Product/100'));
});

test('live run: a failing product is counted and the rest continue', async () => {
  const base = backend(existing(null));
  const { fetch } = mockFetch((c) => {
    if (c.body?.query?.includes('productSet') && !c.body.variables.identifier) {
      return json({ data: { productSet: { product: null, userErrors: [{ field: ['input'], message: 'boom' }] } } });
    }
    return base(c);
  });
  const r = await syncPrintfulToShopify({ settings: loadSettings(liveEnv), fetch, sleep: noSleep, logger: silentLogger });
  assert.equal(r.failed, 1);
  assert.equal(r.updated, 2);
  assert.match(r.plan[2].error!, /boom/);
});
