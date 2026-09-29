import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUrl = process.env.BETTER_AUTH_DB_URL;

if (!mongoUrl) {
  throw new Error("BETTER_AUTH_DB_URL is not defined");
}

const client = new MongoClient(mongoUrl);
const db = client.db("dev_core-user");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  trustedOrigins: ["http://localhost:5173"],

  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
