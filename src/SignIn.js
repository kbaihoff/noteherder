import React from 'react'

import './SignIn.css'
import { auth, githubProvider } from './Base'

const SignIn = ({ authHandler }) => {
  const authenticate = () => {
    auth.signInWithPopup(githubProvider).then((data) => {authHandler(data.user)})
    authHandler({
      uid: 'kbaihoff'
    })
  }

  return (
    <button className="SignIn" onClick={authenticate}>Sign In</button>
  )
}

export default SignIn