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
      <button className="SignIn Github" onClick={() => authenticate(githubProvider)}>
        <img src="https://www.coderbox.me/images/github.png" alt="github logo" className="logo"/>
        Sign In With GitHub
      </button>
      <button className="SignIn Google" onClick={() => authenticate(googleProvider)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png" alt="google logo" className="logo" />
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn