import { FormEvent, useState, useTransition } from 'react'

type formStateType = {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

export function useFormState(
  action: (data: FormData) => Promise<formStateType>,
  initialState?: formStateType
) {
  const [formState, setFormState] = useState<formStateType>(
    initialState ?? {
      success: false,
      message: null,
      errors: null,
    }
  )

  const [isPending, startTransition] = useTransition()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const state = await action(data)

      setFormState(state)
    })
  }

  return [formState, handleSubmit, isPending] as const
}
