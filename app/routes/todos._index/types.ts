import type { todos } from '@/db/schema'
import type { InferSelectModel } from 'drizzle-orm'

export type Todo = InferSelectModel<typeof todos>
