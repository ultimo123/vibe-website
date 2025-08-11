'use client'

import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function Home() {
  const trpc = useTRPC()
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success('Background job succeded.')
      },
    }),
  )

  return (
    <div className='p-4'>
      <Button onClick={() => invoke.mutate({ text: 'hello somwwhere' })}>
        Invoke background job
      </Button>
    </div>
  )
}
