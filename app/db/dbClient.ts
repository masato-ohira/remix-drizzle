import { drizzle } from 'drizzle-orm/d1'

export const dbClient = (db: D1Database) => drizzle(db)
