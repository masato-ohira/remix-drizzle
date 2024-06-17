import { Button } from '@/components/ui/button'
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

export default function Index() {
  return (
    <div>
      <div className="container mx-auto py-32">
        <div className="center">
          <a href="/todos">
            <Button className={'w-48 py-6'}>Todos</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
