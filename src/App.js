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
      noteToOpenAMF: {},
      uid: null, // currentNoteId
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
    if (!uid) return
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

  newNoteSMA = (newNote) => {
    if (!newNote.id) {
      newNote.id = `note-${Date.now()}`
      this.setState({ noteToOpenAMF: newNote })
    }
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[newNote.id] = newNote
    this.setState({ notesAMLN: notesAMLN })
    this.openNoteNLMA(newNote)
  }

  openNoteNLMA = (note) => {
    this.setState({ noteToOpenAMF: note })
  }

  saveNoteFMA = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[note.id] = note
    this.setState({ notesAMLN: notesAMLN, noteToOpenAMF: note })
  }

  deleteNoteFMA = (note) => {
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[note.id] = null // ONLY WORKS WITH FIREBASE (w/o Firebase, delete; Firebase sees it's gone, then push it back down)
    this.setState({ notesAMLN: notesAMLN })
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
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
        Base.removeBinding(this.ref)
        this.setState({ uid: null, noteToOpenAMF: {}, notesAMLN: {} })
      }
    )
  }

  render() {
    const actions = {
      openNoteNLMA: this.openNoteNLMA,
      noteToOpenAMF: this.state.noteToOpenAMF,
      newNoteSMA: this.newNoteSMA,
      saveNoteFMA: this.saveNoteFMA,
      deleteNoteFMA: this.deleteNoteFMA,
      signOutSMA: this.signOutSMA,
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            this.signedIn() ? <Main notesAMLN={this.state.notesAMLN} {...actions} /> : <Redirect to="/sign-in" />
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