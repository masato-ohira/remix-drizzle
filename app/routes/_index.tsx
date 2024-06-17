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

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = (await res.json()) as PostType[]
  return take(json, 6)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-10">
          {data.map((i) => {
            return <TopItem key={i.id} item={i} />
          })}
        </div>
      </div>
    </div>
  )
}
