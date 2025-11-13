export function onRequestGet(context) {
  return new Response(JSON.stringify(context.request.headers), {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
    },
  });
}

