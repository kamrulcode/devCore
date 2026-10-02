# DevCore — Vercel deployment

This project is a React + TypeScript + Vite frontend with Better Auth, MongoDB Atlas, and Vercel Functions.

## 1. Vercel project settings

- Framework preset: **Vite**
- Root directory: project root
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Node.js: 22.x

## 2. Required Vercel environment variables

Add these under **Project → Settings → Environment Variables** for **Production** and **Preview**, then redeploy.

```text
BETTER_AUTH_SECRET=YOUR_LONG_RANDOM_SECRET
BETTER_AUTH_DB_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
BETTER_AUTH_URL=https://YOUR-PRODUCTION-DOMAIN
```

Optional Google OAuth:

```text
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

Optional additional domains:

```text
BETTER_AUTH_ALLOWED_HOSTS=www.example.com,example.com
```

Do **not** prefix these server variables with `VITE_`. Vite variables are client-visible; these values contain secrets.

For Vercel preview deployments, the code already allows `*.vercel.app` and the current Vercel deployment host. You can therefore test email/password authentication on preview deployments without changing the source code.

## 3. MongoDB Atlas

In MongoDB Atlas:

1. Create/use the database cluster.
2. Create a database user with permission to read/write the application database.
3. In **Network Access**, allow the Vercel Functions to reach the cluster. For a simple deployment, Atlas can temporarily allow `0.0.0.0/0`; for tighter security, use the current Vercel egress/IP strategy appropriate to your Vercel plan.
4. Copy the Atlas connection string into `BETTER_AUTH_DB_URL`.

The application stores Better Auth data in the `dev_core-online` database and stores the saved technology stack in the `userStacks` collection.

## 4. Authentication routes

- Better Auth: `/api/auth/*`
- Stack API: `/api/stack`
- Deployment/database diagnostic: `/api/health`

After deployment, open:

```text
https://YOUR-DOMAIN/api/health
```

A healthy response looks like:

```json
{
  "ok": true,
  "database": "connected",
  "auth": {
    "secretConfigured": true,
    "urlConfigured": true,
    "googleConfigured": false
  }
}
```

This endpoint never returns the actual secret or MongoDB connection string.

## 5. Google OAuth

Google OAuth is optional. Email/password authentication does not depend on the Google credentials.

If Google sign-in is enabled, configure the Google OAuth application's production callback to:

```text
https://YOUR-PRODUCTION-DOMAIN/api/auth/callback/google
```

For a preview deployment, use the exact preview host when configuring/testing the provider if your OAuth provider requires an exact redirect URI.

## 6. Local development

Create `.env` from `.env.example` and put your real values in it. Then:

```bash
npm install
npm run dev
```

The local app runs at `http://localhost:5173`.

## Important security note

Never commit `.env` or copy real secrets into `.env.example`. The repository is configured to ignore `.env*` files except `.env.example`.
## Vercel build fixes included

This project is an ESM Vercel Function + Vite app. The `/api` TypeScript entrypoints use explicit `.js` specifiers so Vercel's Node/ESM compiler can resolve the corresponding `.ts` source files. `@types/node` is kept in `dependencies` because Vercel may type-check serverless functions outside the browser build. The MongoDB client uses the default driver options to avoid a MongoDB driver type-version conflict.

After changing Vercel environment variables, create a new deployment. Test `https://YOUR-DOMAIN/api/health` before testing sign-in.
