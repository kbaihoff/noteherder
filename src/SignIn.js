import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './Base'

const SignIn = () => {
  const authenticate = (provider) => {
    // auth === app.auth()
    auth.signInWithPopup(provider).then((result) => { console.log(auth.currentUser) })
  }

  return (
    <div>
      <button className="SignIn Github" onClick={() => authenticate(githubProvider)}>Sign In With GitHub</button>
      <button className="SignIn Google" onClick={() => authenticate(googleProvider)}>Sign In With Google</button>
    </div>
  )
}

export default SignIn