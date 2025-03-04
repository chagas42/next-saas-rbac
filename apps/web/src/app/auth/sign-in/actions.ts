'use server'

import { signInWithPassword } from '@/http/sign-in-with-password'
import { HTTPError } from 'ky'
import { z } from 'zod'
import { cookies } from 'next/headers'

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address' }),
  password: z.string().min(1, { message: 'Please, provider your password' }),
})

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))
  const cookieStore = await cookies()
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  console.log(result.data)

  try {
    const { token } = await signInWithPassword({
      email,
      password,
    })

    cookieStore.set('token', token, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()
      console.log({ test: message })
      return { success: false, message, errors: null }
    }

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: null,
    errors: null,
  }
}
