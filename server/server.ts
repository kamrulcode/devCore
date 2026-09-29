import "dotenv/config";

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { auth } from "./auth.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.on(["GET", "POST"], "/api/auth/*", async (c) => {
  const url = new URL(c.req.url);

  const request = new Request(url, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body:
      c.req.method === "GET" || c.req.method === "HEAD"
        ? undefined
        : await c.req.text(),
  });

  const response = await auth.handler(request);

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
});

app.get("/", (c) => {
  return c.json({
    message: "Better Auth server is running",
  });
});

const port = Number(process.env.PORT) || 3000;

serve({
  fetch: app.fetch,
  port,
});

console.log(`Auth server running on http://localhost:${port}`);
