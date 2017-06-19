import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './Base'

const SignIn = () => {
  const authenticate = () => {
    // auth === app.auth()
    auth.signInWithPopup(githubProvider).then((result) => {console.log(result)})
  }

  return (
    <button className="SignIn" onClick={authenticate}>Sign In</button>
  )
}

export default SignIn