// Diagnostic endpoint. Never returns secrets.
// The DB module is imported lazily so a missing env var is reported
// here instead of crashing the whole function.
export const config = { maxDuration: 30 };

export async function GET() {
  const env = {
    secretConfigured: Boolean(process.env.BETTER_AUTH_SECRET),
    dbUrlConfigured: Boolean(process.env.BETTER_AUTH_DB_URL),
    authUrl: process.env.BETTER_AUTH_URL ?? null,
    vercelHost: process.env.VERCEL_URL ?? null,
    productionHost: process.env.VERCEL_PROJECT_PRODUCTION_URL ?? null,
    googleConfigured: Boolean(
      process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET,
    ),
  };

  try {
    const { db } = await import("../src/lib/server/mongodb.js");
    await db.command({ ping: 1 });
    return Response.json({ ok: true, database: "connected", env });
  } catch (error) {
    console.error("Health check failed:", error);
    return Response.json(
      {
        ok: false,
        database: "unavailable",
        reason: error instanceof Error ? error.message : "unknown",
        env,
      },
      { status: 503 },
    );
  }
}
