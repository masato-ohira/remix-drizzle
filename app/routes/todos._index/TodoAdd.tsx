import { cn } from '@/utils/cn'
import { Form, useActionData, useNavigation } from '@remix-run/react'
import { Button } from '@ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog'
import { Input } from '@ui/input'
import { useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { setAction } from './action'

export const TodoAdd = () => {
  const [open, setOpen] = useState(false)
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'

  const actionData = useActionData() as {
    error?: string
    status?: number
  }

  useEffect(() => {
    if (actionData?.status === 200) {
      setOpen(false)
    }
  }, [actionData])

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className={`gap-1`}>
            <MdAdd className={'text-lg'} />
            <span>新規登録</span>
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
              {actionData?.error && (
                <div className={` text-red-500 mb-3 `}>
                  タイトルは必須入力です
                </div>
              )}
              <Input
                id={'title'}
                name={'title'}
                placeholder={`タイトルを入力`}
              />
              <div
                className={`
                hstack
                mt-6
                justify-center
                gap-3

              `}
              >
                <Button
                  type={'submit'}
                  name={'action'}
                  value={setAction('ADD')}
                >
                  登録する
                </Button>
                <Button
                  type={'button'}
                  variant={'secondary'}
                  onClick={() => setOpen(false)}
                  className={'text-black'}
                >
                  閉じる
                </Button>
              </div>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
