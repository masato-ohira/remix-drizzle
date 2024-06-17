import { cn } from '@/utils/cn'
import { Form, useNavigation } from '@remix-run/react'
import { Button } from '@ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { setAction } from './action'
import { Todo } from './types'

export const TodoDelete = ({ item }: { item: Todo }) => {
  const [open, setOpen] = useState(false)
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size={'sm'}
            variant={'secondary'}
            type={'button'}
            className={`font-medium gap-1`}
          >
            <MdClose className={'text-lg text-red-600'} />
            <span>削除</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div
            className={cn(`
              p-4
              ${isSubmitting ? 'opacity-70 pointer-events-none' : ''}
            `)}
          >
            <Form method={'post'}>
              <p className={`text-center`}>削除してよろしいですか？</p>
              <div className={`hstack justify-center gap-4 mt-6`}>
                <input type="hidden" name={'id'} value={item.id} />
                <Button
                  variant={'destructive'}
                  type={'submit'}
                  name={'action'}
                  value={setAction('DELETE')}
                >
                  <span>削除する</span>
                </Button>
                <Button
                  type={'button'}
                  variant={'secondary'}
                  className={`text-black`}
                  onClick={() => setOpen(false)}
                >
                  キャンセル
                </Button>
              </div>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
