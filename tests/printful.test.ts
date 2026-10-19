import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PrintfulClient } from '../src/services/printfulApi';
import { silentLogger } from '../src/services/http';
import { json, mockFetch, noSleep } from './helpers';

test('lists sync products across pages with Bearer auth and store header', async () => {
  const { fetch, calls } = mockFetch((c) => {
    const offset = Number(new URL(c.url).searchParams.get('offset'));
    const items = offset === 0 ? [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] : [{ id: 3, name: 'C' }];
    return json({ code: 200, result: items, paging: { total: 3, offset, limit: 2 } });
  });
  const client = new PrintfulClient({ token: 'tok', storeId: '42', fetch, sleep: noSleep, logger: silentLogger, pageSize: 2 });
  const products = await client.listSyncProducts();
  assert.deepEqual(products.map((p) => p.id), [1, 2, 3]);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].headers.Authorization, 'Bearer tok');
  assert.equal(calls[0].headers['X-PF-Store-Id'], '42');
  assert.match(calls[1].url, /offset=2&limit=2/);
});

test('retries on 429 using Retry-After, then succeeds', async () => {
  let n = 0;
  const waits: number[] = [];
  const { fetch } = mockFetch(() => (++n === 1 ? json({ error: 'slow down' }, 429, { 'retry-after': '3' }) : json({ code: 200, result: [], paging: { total: 0 } })));
  const client = new PrintfulClient({ token: 't', fetch, sleep: async (ms) => void waits.push(ms), logger: silentLogger });
  await client.listSyncProducts();
  assert.equal(n, 2);
  assert.deepEqual(waits, [3000]);
});

test('gives up after max retries on persistent 5xx', async () => {
  const { fetch, calls } = mockFetch(() => json({}, 503));
  const client = new PrintfulClient({ token: 't', fetch, sleep: noSleep, logger: silentLogger, maxRetries: 2 });
  await assert.rejects(client.listSyncProducts(), /503/);
  assert.equal(calls.length, 3);
});

test('does not retry 401 and skips ignored products', async () => {
  const { fetch, calls } = mockFetch(() => json({ error: 'unauthorized' }, 401));
  const client = new PrintfulClient({ token: 't', fetch, sleep: noSleep, logger: silentLogger });
  await assert.rejects(client.listSyncProducts(), /401/);
  assert.equal(calls.length, 1);

  const { fetch: f2, calls: c2 } = mockFetch((c) =>
    c.url.includes('/store/products?')
      ? json({ code: 200, result: [{ id: 1, name: 'A', is_ignored: true }, { id: 2, name: 'B' }], paging: { total: 2 } })
      : json({ code: 200, result: { sync_product: { id: 2, name: 'B' }, sync_variants: [] } }),
  );
  const client2 = new PrintfulClient({ token: 't', fetch: f2, sleep: noSleep, logger: silentLogger });
  const details = await client2.fetchAllProductsWithVariants();
  assert.equal(details.length, 1);
  assert.ok(c2.every((c) => c.method === 'GET'));
  assert.ok(!c2.some((c) => c.url.endsWith('/store/products/1')));
});
