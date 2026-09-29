import { auth } from "../../src/lib/server/auth";

export const GET = (request: Request) => auth.handler(request);
export const POST = (request: Request) => auth.handler(request);
