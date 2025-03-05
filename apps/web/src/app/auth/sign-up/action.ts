'use server'

import { redirect } from 'next/navigation'

export async function signInWithGitHub() {
  const githubSignInURL = new URL('login/oauth/autorize', 'https://github.com')

  githubSignInURL.searchParams.set('client_id', 'Ov23licXTJ6QxLlghhWe')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback'
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
