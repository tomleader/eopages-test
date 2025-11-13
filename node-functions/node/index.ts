export function onRequestGet(context) {

  return new Response(JSON.stringify({
    headers: Object.fromEntries(context.request.headers.entries()),
    get_test: context.request.headers.get('accept'),
  }), {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
    },
  });
}
