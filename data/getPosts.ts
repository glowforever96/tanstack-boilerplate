import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";

export const getPosts = createServerFn({
  method: "GET",
}).handler(async () => {
  const posts = await db.select().from(postsTable);
  return posts;
});
