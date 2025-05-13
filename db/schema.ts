import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userName: text("user_name").notNull(),
  content: text().notNull(),
});
