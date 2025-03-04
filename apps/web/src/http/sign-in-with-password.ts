import { api } from './api-client'
interface SignInWithPasswordRequest {
  email: string
  password: string
}

interface SigInWithPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  const result = api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SigInWithPasswordResponse>()

  return result
}
