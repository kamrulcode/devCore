# DevCore — Full-Stack Vite + React + TypeScript

DevCore is a Vite React TypeScript application with Better Auth, MongoDB persistence, HeroUI, Tailwind CSS, and Vercel Functions.

## Architecture

The project deliberately uses the same `/api/*` contract in both environments:

- **Local development:** Vite's dev server mounts the API handlers directly, so `npm run dev` is all you need. No Vercel CLI is required.
- **Vercel production/preview:** the files in `api/` are deployed as Vercel Functions automatically.
- **Database:** Better Auth and the saved technology stack use the same MongoDB database.
- **Secrets:** MongoDB and Better Auth secrets stay server-side and are never prefixed with `VITE_`.

The Vite dev-server API integration is intentionally only active during development. It does not become client-side code in the production build.

## Project structure

```text
api/
  auth/[...all].ts   # Vercel Better Auth function
  stack.ts           # Vercel stack function
src/
  lib/server/
    auth.ts          # shared Better Auth configuration
    mongodb.ts       # shared MongoDB connection
  ...                 # React UI
vite.config.ts        # Vite + local /api handlers
vercel.json            # Vercel SPA rewrite + asset caching
```

## Environment variables

Create `.env.local` in the project root:

```env
BETTER_AUTH_SECRET=your-random-secret
BETTER_AUTH_DB_URL=mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
BETTER_AUTH_URL=http://localhost:5173
BETTER_AUTH_ALLOWED_HOSTS=
```

Never commit `.env.local`. Never expose these variables with the `VITE_` prefix.

For Vercel, add the same server-side variables in **Project Settings → Environment Variables** for Development, Preview, and Production as appropriate. `BETTER_AUTH_URL` should be the production URL in Production; Vercel preview hosts are allowed by the Better Auth configuration.

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

There is no need to run `vercel dev`.

The local Vite server handles `/api/auth/*` and `/api/stack` through the same handlers used by Vercel.

## Verify the database/API

With the development server running, open:

```text
http://localhost:5173/api/stack
```

When signed out, the endpoint should return an empty technology ID array. Then create an account, sign in, add technologies, refresh, and verify the saved stack persists.

## Deploy to Vercel

Link the repository/project in Vercel and deploy normally. Vercel automatically detects the Vite application and deploys the root `api/` files as Functions.

Before deployment, make sure the server-only environment variables are configured in Vercel.

## MongoDB

The Better Auth MongoDB adapter stores authentication records in MongoDB. DevCore also stores saved technology selections in the `userStacks` collection. The database name is `dev_core-user` unless you change `src/lib/server/mongodb.ts`.

## Security

The original uploaded project contained credentials in an environment file. Those credentials should be rotated before production use if they were ever committed, uploaded, or exposed.
