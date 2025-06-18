import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  return new Response(null, {
    status: 303,
    headers: {
      'Location': '/',
      'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
    }
  });
}; 