import React from 'react';

import './App.css';
import Main from './Main'
import Base from './Base'

class App extends React.Component {
  constructor() { // No props; ultimate parent component
    super()
    this.state = {
      notesAMLN: {},
      noteToOpenAMF: {},
    }
  }

  componentWillMount() {
    Base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
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

  render() {
    return (
      <div className="App">
        <Main
          notesAMLN={this.state.notesAMLN}
          openNoteNLMA={this.openNoteNLMA}
          noteToOpenAMF={this.state.noteToOpenAMF}
          newNoteSMA={this.newNoteSMA}
          saveNoteFMA={this.saveNoteFMA}
          deleteNoteFMA={this.deleteNoteFMA}
        />
      </div>
    );
  }
}

export default App;