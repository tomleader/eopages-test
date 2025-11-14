import { getEtagFromRequest } from "./_common";


export function create200Response(body: any): Response {
  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'ETag': '1234567890',
    },
  });
}


export function create304Response(): Response {
  return new Response(null, {
    status: 304,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    },
  });
}

export async function onRequestGet(context) {
  const etag = getEtagFromRequest(context.request);
  if (!etag) {
    return create200Response({ test: 'ok' });
  }
  return create304Response();
}
