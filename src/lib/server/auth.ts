import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db, mongoClient } from "./mongodb.js";

function clean(value?: string) {
  return value?.trim() || undefined;
}

function hostFromUrl(value?: string) {
  if (!value) return undefined;
  try {
    return new URL(value).host;
  } catch {
    return undefined;
  }
}

// Vercel provides these automatically (host only, no protocol).
const vercelHost = clean(process.env.VERCEL_URL);
const vercelBranchHost = clean(process.env.VERCEL_BRANCH_URL);
const productionHost = clean(process.env.VERCEL_PROJECT_PRODUCTION_URL);

// BETTER_AUTH_URL is optional on Vercel. If it is missing (or still points to
// localhost), fall back to the production domain Vercel gives us.
let configuredUrl = clean(process.env.BETTER_AUTH_URL)?.replace(/\/+$/, "");
const isLocalUrl = configuredUrl?.includes("localhost") || configuredUrl?.includes("127.0.0.1");
if (process.env.VERCEL && (!configuredUrl || isLocalUrl) && productionHost) {
  configuredUrl = `https://${productionHost}`;
}

const customHosts = (process.env.BETTER_AUTH_ALLOWED_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim().replace(/^https?:\/\//, "").replace(/\/+$/, ""))
  .filter(Boolean);

const allowedHosts = [
  "localhost:*",
  "127.0.0.1:*",
  ...[hostFromUrl(configuredUrl), vercelHost, vercelBranchHost, productionHost].filter(
    (host): host is string => Boolean(host),
  ),
  ...customHosts,
];

const trustedOrigins = [
  ...new Set(
    [
      configuredUrl,
      vercelHost && `https://${vercelHost}`,
      vercelBranchHost && `https://${vercelBranchHost}`,
      productionHost && `https://${productionHost}`,
      ...customHosts.map((host) => `https://${host}`),
    ].filter((origin): origin is string => Boolean(origin)),
  ),
];

const googleClientId = clean(process.env.GOOGLE_CLIENT_ID);
const googleClientSecret = clean(process.env.GOOGLE_CLIENT_SECRET);

const socialProviders =
  googleClientId && googleClientSecret
    ? {
        google: {
          prompt: "select_account" as const,
          clientId: googleClientId,
          clientSecret: googleClientSecret,
        },
      }
    : undefined;

export const auth = betterAuth({
  appName: "DevCore",

  baseURL: {
    allowedHosts,
    protocol: "auto",
    fallback: configuredUrl,
  },

  trustedOrigins,

  ...(socialProviders ? { socialProviders } : {}),

  secret: clean(process.env.BETTER_AUTH_SECRET),

  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),
});
