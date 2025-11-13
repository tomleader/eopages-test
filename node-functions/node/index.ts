export function onRequestGet(context) {

  return new Response(null, {
    status: 304,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'eo-pages-inner-scf-status': '200',
    },
  });
}
