import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './Base'

const SignIn = () => {
  const authenticateGithub = () => {
    // auth === app.auth()
    auth.signInWithPopup(githubProvider).then((result) => { console.log(auth.currentUser) })
  }

  const authenticateGoogle = () => {
    auth.signInWithPopup(googleProvider).then((result) => { console.log(auth.currentUser) })
  }

  return (
    <div>
      <button className="SignIn Github" onClick={authenticateGithub}>Sign In With GitHub</button>
      <button className="SignIn Google" onClick={authenticateGoogle}>Sign In With Google</button>
    </div>
  )
}

export default SignIn