import React from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import SignOut from './SignOut'
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
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler(user)
      }
      else {
        this.setState({ uid: null })
      }
    })
  }

  syncNotes = () => {
    Base.syncState(
      `${this.state.uid}/notes`, // Where (in Firebase) it goes
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
    this.setState({ notesAMLN: notesAMLN })
  }

  deleteNoteFMA = (note) => {
    const notesAMLN = {...this.state.notesAMLN}
    notesAMLN[note.id] = null // ONLY WORKS WITH FIREBASE (without Firebase, delete; Firebase will see it's gone, then try to push it back down)
    this.setState({ notesAMLN: notesAMLN })
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (user) => {
    this.setState({ uid: user.uid }, this.syncNotes)
  }

  signOut = () => {
    auth.signOut()
  }

  renderMain = () => {
    const actions = {
      openNoteNLMA: this.openNoteNLMA,
      noteToOpenAMF: this.state.noteToOpenAMF,
      newNoteSMA: this.newNoteSMA,
      saveNoteFMA: this.saveNoteFMA,
      deleteNoteFMA: this.deleteNoteFMA,
    }
    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main notesAMLN={this.state.notesAMLN} {...actions} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    );
  }
}

export default App;