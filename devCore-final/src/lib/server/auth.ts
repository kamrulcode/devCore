import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db, mongoClient } from "./mongodb";

const customHosts = (process.env.BETTER_AUTH_ALLOWED_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

export const auth = betterAuth({
  appName: "DevCore",
  baseURL: {
    allowedHosts: ["localhost:*", "*.vercel.app", ...customHosts],
    protocol: process.env.NODE_ENV === "development" ? "http" : "https",
    fallback: process.env.BETTER_AUTH_URL,
  },
  trustedOrigins: [
    "http://localhost:5173",
    "http://localhost:3000",
    ...customHosts.map((host) => `https://${host}`),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client: mongoClient,
  }),
});
