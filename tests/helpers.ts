/* eslint-disable @typescript-eslint/no-explicit-any -- loosely typed external API JSON and test fixtures */
import type { FetchLike } from '../src/services/http';

export interface Call {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: any;
}

export type Handler = (call: Call) => Response | Promise<Response> | undefined;

export function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', ...headers } });
}

/** A fake fetch that records every call and refuses anything a handler doesn't answer. */
export function mockFetch(handler: Handler): { fetch: FetchLike; calls: Call[] } {
  const calls: Call[] = [];
  const fetch: FetchLike = async (url, init) => {
    const call: Call = {
      url,
      method: init?.method ?? 'GET',
      headers: (init?.headers ?? {}) as Record<string, string>,
      body: typeof init?.body === 'string' ? JSON.parse(init.body) : undefined,
    };
    calls.push(call);
    const res = await handler(call);
    if (!res) throw new Error(`Unexpected request in test: ${call.method} ${url}`);
    return res;
  };
  return { fetch, calls };
}

export const noSleep = async () => {};

export function pfProduct(id: number, name: string, variants: any[], extra: Record<string, unknown> = {}) {
  return {
    sync_product: { id, name, external_id: null, variants: variants.length, synced: variants.length, thumbnail_url: `https://img.test/${id}.png`, ...extra },
    sync_variants: variants.map((v, i) => ({
      id: id * 100 + i,
      sync_product_id: id,
      name: `${name} / ${v.color ?? ''} / ${v.size ?? ''}`,
      retail_price: '25.00',
      currency: 'USD',
      sku: `SKU-${id}-${i}`,
      files: [{ type: 'preview', preview_url: `https://img.test/${id}-${i}.png` }],
      ...v,
    })),
  };
}
