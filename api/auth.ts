import { auth } from "../src/lib/server/auth.js";

export const config = { maxDuration: 30 };

// vercel.json rewrites /api/auth/:path* -> /api/auth?path=:path*
// so one plain function serves every Better Auth route. We rebuild the
// original URL here, so it works whether or not Vercel preserves it.
async function handle(request: Request) {
  const url = new URL(request.url);
  const subPath = url.searchParams.get("path");

  if (subPath !== null) {
    url.searchParams.delete("path");
    url.pathname = `/api/auth/${subPath}`.replace(/\/+$/, "") || "/api/auth";
  }

  const hasBody = !["GET", "HEAD"].includes(request.method);
  const rebuilt = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: hasBody ? await request.arrayBuffer() : undefined,
  });

  try {
    const response = await auth.handler(rebuilt);
    if (response.status === 404) {
      console.error("Better Auth 404 for", request.method, url.pathname);
    }
    return response;
  } catch (error) {
    console.error("Auth handler crashed:", error);
    return Response.json(
      { message: error instanceof Error ? error.message : "Auth handler error" },
      { status: 500 },
    );
  }
}

export const GET = handle;
export const POST = handle;
