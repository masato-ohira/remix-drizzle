import { drizzleClient } from '@/db/drizzle'
import { todos } from '@/db/schema'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { desc } from 'drizzle-orm'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const db = drizzleClient(context)
  const res = await db.select().from(todos).orderBy(desc(todos.id))

  return res
}
