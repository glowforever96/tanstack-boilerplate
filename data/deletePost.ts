import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const deletePost = createServerFn({ method: "POST" })
  .validator((data: { postId: number }) => data)
  .handler(async ({ data }) => {
    await db.delete(postsTable).where(eq(postsTable.id, data.postId));
  });
