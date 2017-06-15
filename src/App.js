import React from 'react';

import './App.css';
import Main from './Main'

class App extends React.Component {
  constructor() { // No props; ultimate parent component
    super()
    this.state = {
      notesAMLN: {},
    }
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
        <Main notesAMLN={this.state.notesAMLN} saveNoteFMA={this.saveNoteFMA} deleteNoteFMA={this.deleteNoteFMA} />
      </div>
    );
  }
}

export default App;