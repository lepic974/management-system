
import React from 'react'
import { authConfig } from '@/app/api/auth/[...nextauth]'
import { LoginButton } from '@/app/AuthButtons'
import getServerSession from 'next-auth'


async function SignIn () {

  const session = await getServerSession(authConfig)

  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>
  }
  return (
    <div>
      <LoginButton />
    </div>
  )
}
  

export default SignIn