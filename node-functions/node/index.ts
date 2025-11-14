import { create200Response, create304Response, getEtagFromRequest } from "./_common";


export async function onRequestGet(context) {
  const etag = getEtagFromRequest(context.request);
  if (!etag) {
    return create200Response({ test: 'ok' });
  }
  return create304Response();
}
