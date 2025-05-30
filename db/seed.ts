import { postsTable } from "./schema";
import { drizzle } from "drizzle-orm/neon-http";
import dotenv from "dotenv";

dotenv.config();

const db = drizzle(process.env.DATABASE_URL!);

const postsSeedData: (typeof postsTable.$inferInsert)[] = [
  {
    userName: "침착맨",
    content: "빵애에요~",
  },
  {
    userName: "이병건",
    content: "응애에요~",
  },
  {
    userName: "이말년",
    content: "방애에요~",
  },
];

async function main() {
  await db.insert(postsTable).values(postsSeedData);
}
main();
