# DevCore — Full-stack React + TypeScript

DevCore is a Vite + React + TypeScript SPA that keeps the original product flow while adding a Vercel-ready backend.

## What stayed the same

- Home page with technology exploration
- Technology cards and categories
- Add/remove technologies from a personal stack
- Sign up / sign in / sign out
- Stack requires authentication
- React Router client-side routes
- Existing `public/data.json` technology source

## What was improved

- Home page redesigned around the supplied DevCore visual direction
- Sign-up and sign-in pages redesigned to match the supplied split-panel UI
- Responsive mobile navigation
- Better loading and error states
- Authentication errors shown through Toastify
- Logged-in stack is persisted to MongoDB through `/api/stack`
- LocalStorage remains as the instant client fallback
- Better Auth runs directly as Vercel Functions
- Removed the separate Hono server; the project is now one deployable Vercel project
- Added SPA routing rewrite for `/signin`, `/signup`, and other client routes

## Project structure

```text
.
├── api/
│   ├── auth/[...all].ts       # Better Auth catch-all Vercel Function
│   └── stack.ts               # User stack API
├── public/
│   └── data.json              # Existing technology catalog
├── src/
│   ├── components/
│   ├── lib/
│   │   ├── auth-client.ts     # Browser auth client
│   │   └── server/            # Server-only auth + MongoDB
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   └── main.tsx
├── vercel.json
└── .env.example
```

## Environment variables

Create `.env` locally or pull them with Vercel CLI.

```env
BETTER_AUTH_SECRET=replace-with-a-random-32-plus-character-secret
BETTER_AUTH_DB_URL=mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_ALLOWED_HOSTS=
```

`BETTER_AUTH_SECRET` and `BETTER_AUTH_DB_URL` are server-only. Never prefix them with `VITE_`.

For production, set the same variables in Vercel Project Settings → Environment Variables. `*.vercel.app` preview hosts are already allowed; add your custom domain(s) to `BETTER_AUTH_ALLOWED_HOSTS` if you use one.

## Local development

### Frontend only

```bash
npm install
npm run dev
```

This is useful for UI work. The Vite dev server does not execute the Vercel Functions.

### Full-stack local testing

Install the Vercel CLI if you do not already have it:

```bash
npm i -g vercel
```

Then run:

```bash
vercel dev
```

This lets you test the Vercel Functions and the SPA together locally.

## Build

```bash
npm run build
```

## Deploy to Vercel

From the project root:

```bash
vercel link
vercel env pull .env.local
vercel deploy
vercel deploy --prod
```

Or import the Git repository from the Vercel dashboard. Vercel detects the Vite project automatically.

## MongoDB

Better Auth stores its authentication data in the `dev_core-user` database. The stack endpoint stores each user's selected technology IDs in a separate `userStacks` collection.

The frontend technology catalog remains the existing `public/data.json`, so changing the catalog does not require a database migration.
