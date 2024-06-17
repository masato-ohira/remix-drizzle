import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const todos = sqliteTable('todos', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  done: integer('done', { mode: 'boolean' }).default(false),
  createAt: text('createAt').default(sql`CURRENT_TIMESTAMP`),
})
