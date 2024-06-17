import { dbClient } from '@/db/dbClient'
import { todos } from '@/db/schema'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { take } from 'lodash-es'
import { TopItem } from './top/TopItem'
import type { PostType } from './top/types'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export async function loader({ context }: LoaderFunctionArgs) {
  const db = dbClient(context.cloudflare.env.DB)
  const res = await db.select().from(todos)
  return res
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-10">{JSON.stringify(data)}</div>
      </div>
    </div>
  )
}
