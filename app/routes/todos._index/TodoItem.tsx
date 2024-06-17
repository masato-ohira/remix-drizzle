import { cn } from '@/utils/cn'
import { useNavigation } from '@remix-run/react'
import { TodoDelete } from './TodoDelete'
import { TodoEdit } from './TodoEdit'
import type { Todo } from './types'

export const TodoItem = ({
  item,
}: {
  item: Todo
}) => {
  const { state, formData } = useNavigation()
  const saveId = formData?.get('id')
  const isSubmitting = saveId === `${item.id}` && state === 'submitting'

  return (
    <div
      className={cn(`
        transition-opacity
        duration-200
        ${isSubmitting ? 'pointer-events-nonec opacity-70' : ''}
      `)}
    >
      <div
        className={`
          hstack
          justify-between
          border-b
          py-3 px-2
        `}
      >
        <p className={'flex-1'}>{item.title}</p>
        <div
          className={`
          hstack
          gap-6
        `}
        >
          <TodoEdit item={item} />
          <TodoDelete item={item} />
        </div>
      </div>
    </div>
  )
}
