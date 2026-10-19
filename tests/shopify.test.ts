import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ShopifyClient } from '../src/services/shopifyApi';
import { silentLogger } from '../src/services/http';
import { json, mockFetch, noSleep } from './helpers';

const opts = { shopDomain: 'demo.myshopify.com', accessToken: 'shpat_x', apiVersion: '2026-10', sleep: noSleep, logger: silentLogger };

test('paginates the product index and reads Printful metafields', async () => {
  const { fetch, calls } = mockFetch((c) => {
    const first = !c.body.variables.cursor;
    return json({
      data: {
        products: {
          nodes: first
            ? [{ id: 'gid://shopify/Product/1', legacyResourceId: '1', title: 'A', status: 'ACTIVE', pfId: { value: '11' }, pfHash: { value: 'h' } }]
            : [{ id: 'gid://shopify/Product/2', legacyResourceId: '2', title: 'B', status: 'DRAFT', pfId: null, pfHash: null }],
          pageInfo: { hasNextPage: first, endCursor: first ? 'c1' : null },
        },
      },
    });
  });
  const products = await new ShopifyClient({ ...opts, fetch }).listProductsIndex();
  assert.equal(products.length, 2);
  assert.equal(products[0].printfulId, '11');
  assert.equal(products[1].printfulId, undefined);
  assert.equal(calls[0].url, 'https://demo.myshopify.com/admin/api/2026-10/graphql.json');
  assert.equal(calls[0].headers['X-Shopify-Access-Token'], 'shpat_x');
  assert.equal(calls[1].body.variables.cursor, 'c1');
});

test('waits and retries when GraphQL is THROTTLED', async () => {
  let n = 0;
  const waits: number[] = [];
  const { fetch } = mockFetch(() =>
    ++n === 1
      ? json({
          errors: [{ message: 'Throttled', extensions: { code: 'THROTTLED' } }],
          extensions: { cost: { requestedQueryCost: 200, throttleStatus: { currentlyAvailable: 50, restoreRate: 50, maximumAvailable: 1000 } } },
        })
      : json({ data: { ok: true } }),
  );
  const data = await new ShopifyClient({ ...opts, fetch, sleep: async (ms) => void waits.push(ms) }).graphql('{ ok }');
  assert.deepEqual(data, { ok: true });
  assert.deepEqual(waits, [3000]);
});

test('retries HTTP 429 and surfaces userErrors from productSet', async () => {
  let n = 0;
  const { fetch } = mockFetch(() =>
    ++n === 1
      ? json({}, 429, { 'retry-after': '1' })
      : json({ data: { productSet: { product: null, userErrors: [{ field: ['input', 'title'], message: "can't be blank" }] } } }),
  );
  await assert.rejects(new ShopifyClient({ ...opts, fetch }).productSet({ title: '' }), /input.title: can't be blank/);
  assert.equal(n, 2);
});

test('SKU lookup keeps only exact matches', async () => {
  const { fetch, calls } = mockFetch(() =>
    json({
      data: {
        productVariants: {
          nodes: [
            { id: 'v1', sku: 'ABC', product: { id: 'p1' } },
            { id: 'v2', sku: 'ABCD', product: { id: 'p2' } },
          ],
        },
      },
    }),
  );
  const map = await new ShopifyClient({ ...opts, fetch }).findProductsBySkus(['ABC']);
  assert.deepEqual([...map.keys()], ['ABC']);
  assert.deepEqual([...map.get('ABC')!], ['p1']);
  assert.equal(calls[0].body.variables.query, 'sku:"ABC"');
});
