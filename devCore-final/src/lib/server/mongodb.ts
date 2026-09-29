import { MongoClient } from "mongodb";

const mongoUrl = process.env.BETTER_AUTH_DB_URL;

if (!mongoUrl) {
  throw new Error("BETTER_AUTH_DB_URL is not defined");
}

type MongoGlobal = typeof globalThis & {
  __devCoreMongoClient?: MongoClient;
};

const globalMongo = globalThis as MongoGlobal;

export const mongoClient =
  globalMongo.__devCoreMongoClient ?? new MongoClient(mongoUrl);

if (process.env.NODE_ENV !== "production") {
  globalMongo.__devCoreMongoClient = mongoClient;
}

export const db = mongoClient.db("dev_core-user");
