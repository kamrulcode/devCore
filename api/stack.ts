import { auth } from "../src/lib/server/auth.js";
import { db } from "../src/lib/server/mongodb.js";

const stackCollection = db.collection<{
  userId: string;
  technologyIds: string[];
  updatedAt: Date;
}>("userStacks");

async function getUser(request: Request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return session?.user ?? null;
}

export async function GET(request: Request) {
  const user = await getUser(request);

  if (!user) {
    return Response.json({ technologyIds: [] });
  }

  const saved = await stackCollection.findOne({ userId: user.id });

  return Response.json({
    technologyIds: saved?.technologyIds ?? [],
  });
}

export async function PUT(request: Request) {
  const user = await getUser(request);

  if (!user) {
    return Response.json({ message: "Authentication required" }, { status: 401 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const technologyIds =
    body && typeof body === "object" && "technologyIds" in body
      ? (body as { technologyIds?: unknown }).technologyIds
      : undefined;

  if (
    !Array.isArray(technologyIds) ||
    technologyIds.some((id) => typeof id !== "string")
  ) {
    return Response.json(
      { message: "technologyIds must be an array of strings" },
      { status: 400 },
    );
  }

  const cleanIds = [...new Set(technologyIds)].slice(0, 30);

  await stackCollection.updateOne(
    { userId: user.id },
    {
      $set: {
        userId: user.id,
        technologyIds: cleanIds,
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );

  return Response.json({ technologyIds: cleanIds });
}

export async function DELETE(request: Request) {
  const user = await getUser(request);

  if (!user) {
    return Response.json({ message: "Authentication required" }, { status: 401 });
  }

  await stackCollection.deleteOne({ userId: user.id });

  return Response.json({ technologyIds: [] });
}
