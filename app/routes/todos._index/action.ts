import { drizzleClient } from '@/db/drizzle'
import { todos } from '@/db/schema'
import type { ActionFunctionArgs } from '@remix-run/cloudflare'

import { json } from '@remix-run/react'
import { eq } from 'drizzle-orm'

export type ActionType = 'ADD' | 'EDIT' | 'DELETE'

// ------------------------------
export const setAction = (key: ActionType) => key

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const db = drizzleClient(context)
  const formData = await request.formData()
  const action = formData.get('action') as ActionType

  if (action === 'ADD') {
    const title = formData.get('title') as string
    if (!title) {
      console.log('titleがありません')
      return json({ error: 'isError', status: 400 })
    }
    await db.insert(todos).values({
      title,
    })
    return json({ status: 200 })
  }

  if (action === 'EDIT') {
    const id = Number(formData.get('id'))
    const done = formData.get('done') === 'true'

    await db.update(todos).set({ done }).where(eq(todos.id, id))
    return json({})
  }

  if (action === 'DELETE') {
    const id = Number(formData.get('id'))
    await db.delete(todos).where(eq(todos.id, id))
    return json({})
  }

  return null
}
