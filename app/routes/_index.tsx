import { Button } from '@/components/ui/button'
import type { MetaFunction } from '@remix-run/node'

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
