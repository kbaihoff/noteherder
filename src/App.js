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
      notesAMLN: {},
      noteToOpenAMF: {},
      uid: null,
    }
  }

  componentWillMount() {
    
  }

  syncNotes = () => {
    Base.syncState(
      `${this.state.uid}/notes`, // Where (in Firebase) it goes
      {
        context: this,
        state: 'notes', // Want to sync 'notes' (from state) with 'notes' (from Firebase)
      }
    )
  }

  newNoteSMA = (newNote) => {
    if (!newNote.id) {
      newNote.id = `note-${Date.now()}`
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
    delete notesAMLN[note.id]
    this.setState({ notesAMLN: notesAMLN })
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (user) => {
    this.setState({ uid: user.uid }, this.syncNotes)
  }

  signOut = () => {
    auth.signOut().then(this.setState({ uid: null }))
  }

  renderMain = () => {
    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main
          notesAMLN={this.state.notesAMLN}
          openNoteNLMA={this.openNoteNLMA}
          noteToOpenAMF={this.state.noteToOpenAMF}
          newNoteSMA={this.newNoteSMA}
          saveNoteFMA={this.saveNoteFMA}
          deleteNoteFMA={this.deleteNoteFMA}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }
      </div>
    );
  }
}

export default App;