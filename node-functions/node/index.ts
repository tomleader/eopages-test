import { getEtagFromRequest } from "./_common";


export async function onRequestGet(context) {
  const etag = getEtagFromRequest(context.request);
  if (!etag) {
    return new Response(JSON.stringify({ test: 'ok' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'ETag': '1234567890',
      },
    });
  }
  return new Response(null, {
    status: 304,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    },
  });
}
