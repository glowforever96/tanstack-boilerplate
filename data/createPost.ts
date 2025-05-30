import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";

export const createPost = createServerFn({ method: "POST" })
  .validator((data: FormData) => {
    const name = data.get("userName")?.toString();
    const content = data.get("content")?.toString();

    if (!name || !content) {
      throw new Error("필수값을 작성해주세요!");
    }
    return { name, content };
  })
  .handler(async ({ data }) => {
    const newPost = await db
      .insert(postsTable)
      .values({
        userName: data.name,
        content: data.content,
      })
      .returning();

    return newPost;
  });
