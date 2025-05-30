import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const getPostById = createServerFn({
  method: "GET",
})
  .validator((data: string) => {
    const postId = Number(data);
    if (Number.isNaN(postId) || postId < 1) {
      throw new Error("잘못된 접근입니다!");
    }
    return { postId };
  })
  .handler(async ({ data }) => {
    const post = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, data.postId))
      .limit(1);

    return post[0];
  });
