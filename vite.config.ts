import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function localApiPlugin(): Plugin {
  return {
    name: "devcore-local-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) {
          next();
          return;
        }

        try {
          const url = new URL(req.url, "http://localhost:5173");
          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (Array.isArray(value)) headers.set(key, value.join(", "));
            else if (value) headers.set(key, value);
          }

          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(Buffer.from(chunk));
          const body = chunks.length ? Buffer.concat(chunks) : undefined;

          const request = new Request(url, {
            method: req.method ?? "GET",
            headers,
            body: ["GET", "HEAD"].includes(req.method ?? "GET") ? undefined : body,
          });

          if (url.pathname.startsWith("/api/auth/")) {
            const { auth } = await import("./src/lib/server/auth");
            const response = await auth.handler(request);
            await writeResponse(res, response);
            return;
          }

          if (url.pathname === "/api/stack") {
            const stack = await import("./api/stack");
            const handler = stack[req.method as "GET" | "PUT" | "DELETE"];
            if (!handler) {
              await writeResponse(res, Response.json({ message: "Method not allowed" }, { status: 405 }));
              return;
            }
            const response = await handler(request);
            await writeResponse(res, response);
            return;
          }

          next();
        } catch (error) {
          console.error("Local API error:", error);
          await writeResponse(
            res,
            Response.json({ message: "Internal server error" }, { status: 500 }),
          );
        }
      });
    },
  };
}

async function writeResponse(res: import("node:http").ServerResponse, response: Response) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}

export default defineConfig(({ mode }) => {
  // Vite exposes .env files to the client only when prefixed with VITE_.
  // Loading the server-only variables into process.env keeps MongoDB/Auth secrets
  // on the Node side while allowing local API handlers to run without Vercel CLI.
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [react(), tailwindcss(), localApiPlugin()],
    server: {
      port: 5173,
      strictPort: true,
    },
    build: {
      sourcemap: false,
    },
  };
});
