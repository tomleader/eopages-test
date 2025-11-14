/**
 * 从请求头中提取 ETag
 */
export function getEtagFromRequest(request): string {
    return request.headers.get('if-none-match') || request.headers.get('If-None-Match') || '';
}


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