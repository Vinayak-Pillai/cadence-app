import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const items = sqliteTable('items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export type Item = typeof items.$inferSelect;
export type NewItem = typeof items.$inferInsert;
