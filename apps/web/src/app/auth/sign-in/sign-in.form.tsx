'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signInWithEmailAndPassword } from './actions'
import Image from 'next/image'

import { AlertTriangle, Loader2 } from 'lucide-react'

import githubIcon from '@/assets/github-icon.svg'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useFormState } from '@/hooks/use-form-state'
import { signInWithGitHub } from '../sign-up/action'

export function SigInForm() {
  const [formState, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword
  )

  const isFailure = formState.success === false

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isFailure && formState.message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed</AlertTitle>
          <AlertDescription>
            <p>{formState.message}</p>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="text" id="email" />

        {formState.errors?.email && (
          <p className="text-xs text-red-500 dark:text-red-400">
            {formState.errors.email[0]}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />

        {formState.errors?.password && (
          <p className="text-xs text-red-500 dark:text-red-400">
            {formState.errors.password[0]}
          </p>
        )}
        <Link
          href="/auth/forgot-password"
          className="text-foreground text-xs font-medium hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button
        className="w-full hover:cursor-pointer"
        type="submit"
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Sign in with e-mail'
        )}
      </Button>

      <Button variant="link" className="w-full hover:cursor-pointer" asChild>
        <Link href="/auth/sign-up">Create new account</Link>
      </Button>

      <Separator />

      <Button
        className="w-full hover:cursor-pointer"
        variant="outline"
        formAction={signInWithGitHub}
        type="submit"
      >
        <Image
          src={githubIcon}
          className="mr-2 size-4 dark:invert"
          alt="git logo"
        />
        Sign in with GitHub
      </Button>
    </form>
  )
}
