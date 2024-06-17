import { useSubmit } from '@remix-run/react'
import { Switch } from '@ui/switch'
import { setAction } from './action'
import type { Todo } from './types'

export const TodoEdit = ({ item }: { item: Todo }) => {
  const submit = useSubmit()
  return (
    <Switch
      defaultChecked={item.done || false}
      onCheckedChange={(val) => {
        submit(
          {
            action: setAction('EDIT'),
            id: item.id,
            done: !item.done,
          },
          { method: 'post' },
        )
      }}
    />
  )
}
