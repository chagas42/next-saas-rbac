import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import githubIcon from '@/assets/github-icon.svg'
import Image from 'next/image'

export default function SigUp() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Nome</Label>
        <Input name="name" id="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Password</Label>
        <Input
          name="password_confirmation"
          type="password"
          id="password_confirmation"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Confirmar Password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <Button className="w-full hover:cursor-pointer" type="submit">
        Create account
      </Button>

      <Button
        variant="link"
        className="w-full hover:cursor-pointer"
        asChild
        size="sm"
      >
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>

      <Separator />

      <Button
        className="w-full hover:cursor-pointer"
        variant="outline"
        type="submit"
      >
        <Image
          src={githubIcon}
          className="mr-2 size-4 dark:invert"
          alt="git logo"
        />
        Sign up with GitHub
      </Button>
    </form>
  )
}
