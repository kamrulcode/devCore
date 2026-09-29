import { createAuthClient } from "better-auth/react";

// The API lives on the same origin in development and on Vercel.
// Keeping this relative avoids CORS/cookie problems in production.
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = authClient;
