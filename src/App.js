import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import Base, { auth } from './Base'

class App extends React.Component {
  constructor() { // No props; ultimate parent component
    super()
    this.state = {
      notesAMLN: {}, // notes
      uid: null,
      noteToOpenAMF: this.blankNote(), // currentNote
    }
  }

  componentWillMount() {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.authHandler(user)
        }
      }
    )
  }

  getUserFromLocalStorage() {
    const uid = localStorage.getItem('uid')
    if (!uid) {
      return
    }
    this.setState({ uid })
  }

  syncNotes = () => {
    this.ref = Base.syncState(
      `notes/${this.state.uid}`, // Where (in Firebase) it goes
      // `${this.state.uid}/notes`,  // to change the Firebase endpoint
      {
        context: this,
        state: 'notesAMLN', // Want to sync 'notesAMLN' (from state) with 'notes' (from Firebase)
      }
    )
  }

  saveNoteFMA = (note) => { // saveNote
    let shouldRedirect = false
    if (!note.id) {
      note.id = `note-${Date.now()}`
      shouldRedirect = true
    }
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[note.id] = note
    this.setState({ notesAMLN: notesAMLN, noteToOpenAMF: note })
    if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
    }
  }

  deleteNoteFMA = (note) => { // removeNote
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[note.id] = null // ONLY WORKS WITH FIREBASE (w/o Firebase, delete; Firebase sees it's gone, then push it back down)
    this.resetNoteToOpenAMF()
    this.setState({ notesAMLN: notesAMLN }, this.props.history.push('/notes'))
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setNoteToOpenAMF = (note) => { // setCurrentNote
    this.setState({ noteToOpenAMF: note })
  }

  resetNoteToOpenAMF = () => { // resetCurrentNote
    this.setNoteToOpenAMF(this.blankNote())
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
    localStorage.setItem('uid', userData.uid)
    this.setState(
      { uid: userData.uid },
      this.syncNotes
    )
  }

  signOutSMA = () => {
    auth.signOut().then(
      () => {
        this.resetNoteToOpenAMF()
        localStorage.removeItem('uid')
        this.setState({ uid: null, notesAMLN: {} })
        Base.removeBinding(this.ref)
      }
    )
  }

  render() {
    const noteData = {
      notesAMLN: this.state.notesAMLN, // notes
      noteToOpenAMF: this.state.noteToOpenAMF, // currentNote
    }

    const actions = {
      saveNoteFMA: this.saveNoteFMA, // saveNote
      deleteNoteFMA: this.deleteNoteFMA, // removeNote
      setNoteToOpenAMF: this.setNoteToOpenAMF, // setCurrentNote
      resetNoteToOpenAMF: this.resetNoteToOpenAMF, // resetCurrentNote
      signOutSMA: this.signOutSMA, // signOut
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            this.signedIn() ? <Main {...noteData} {...actions} /> : <Redirect to="/sign-in" />
          )} />
          <Route path="/sign-in" render={() => (
            !this.signedIn() ? <SignIn /> : <Redirect to="/notes" />
          )} />
          <Route render={() => <Redirect to="/notes" />} />
        </Switch>
        {/* component={} can't pass in additional props, render={() =>} lets you specify */}
      </div>
    );
  }
}

export default App;