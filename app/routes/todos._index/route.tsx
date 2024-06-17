import { useLoaderData } from '@remix-run/react'
import { TodoAdd } from './TodoAdd'
import { TodoItem } from './TodoItem'
import { action } from './action'
import { loader } from './loader'

// import { useLoaderData } from '@remix-run/react'
// import { TodoAdd } from './TodoAdd'
// import { TodoItem } from './TodoItem'
// import { dispatch } from './actions'
// export async function action(props: ActionFunctionArgs) {
//   return dispatch(props)
// }

export default function TodoPage() {
  const data = useLoaderData<typeof loader>()

  return (
    <div className="container max-w-4xl py-8">
      <div className="hstack justify-end mb-8">
        <TodoAdd />
      </div>
      <div className="border-t">
        {data.map((i) => {
          return <TodoItem key={i.id} item={i} />
        })}
      </div>
    </div>
  )
}

export { loader, action }
