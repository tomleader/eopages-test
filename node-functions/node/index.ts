/**
 * 从请求头中提取 ETag
 */
export function getEtagFromRequest(request): string {
  return request.headers.get('if-none-match') || request.headers.get('If-None-Match') || '';
}

export async function onRequestGet(context) {
  return new Response(JSON.stringify({ test: 'ok' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    }
  });
}

// export async function onRequestGet(context) {
//   const etag = getEtagFromRequest(context.request);
//   if (etag) {
//     return new Response(null, {
//       status: 304,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Cache-Control': 'no-cache',
//       }
//     });
//   }
//   return new Response(JSON.stringify({ test: 'ok' }), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Cache-Control': 'no-cache',
//       'ETag': '1234567890',
//     }
//   });
// }
