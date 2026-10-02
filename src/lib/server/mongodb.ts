import { MongoClient } from "mongodb";

type MongoGlobal = typeof globalThis & {
  __devCoreMongoClient?: MongoClient;
};

const globalMongo = globalThis as MongoGlobal;

function createClient() {
  const mongoUrl = process.env.BETTER_AUTH_DB_URL?.trim();

  if (!mongoUrl) {
    throw new Error(
      "BETTER_AUTH_DB_URL is not set. Add it in Vercel -> Settings -> Environment Variables and redeploy.",
    );
  }

  return new MongoClient(mongoUrl, {
    // Small pool: every serverless instance has its own pool.
    maxPoolSize: 5,
    // Fail fast (instead of hanging until Vercel kills the function)
    // when Atlas Network Access blocks Vercel or the URL is wrong.
    serverSelectionTimeoutMS: 6000,
    connectTimeoutMS: 6000,
  });
}

// Reused across warm invocations on Vercel to avoid a new pool per request.
export const mongoClient = (globalMongo.__devCoreMongoClient ??= createClient());

export const db = mongoClient.db("dev_core-online");
