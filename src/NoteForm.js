import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
  // {notesAMLN, noteToOpenAMF, saveNoteFMA(), deleteNoteFMA()} from Main.js
  // constructor(props) { 
  //   super(props)
  //   this.state = {
  //     note: this.blankNote(),
  //   }
  // }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.match.params.id) {
      const newId = nextProps.match.params.id
      if (newId !== this.props.noteToOpenAMF.id) {
        const note = nextProps.notesAMLN[newId]
        if (note) {
          this.props.setNoteToOpenAMF(note)
        }
      }
    }
    // this.props.setCurrentNote(note)
    // if (this.state.note.id !== newProps.noteToOpenAMF.id) { // this.props.currentNoteId === this.props.noteToOpenAMF.id
    //   this.setState({ note: newProps.noteToOpenAMF })
    // }
  }

  // blankNote = () => {
  //   return {
  //     id: null,
  //     title: '',
  //     body: '',
  //   }
  // }

  handleChanges = (ev) => {
    const note = {...this.props.noteToOpenAMF}
    note[ev.target.name] = ev.target.value
    // this.setState(
    //   { note: note },
    //   () => this.props.saveNoteFMA(this.state.note)
    // )
    this.props.saveNoteFMA(note)
    // document.getElementById('save-button').style.backgroundColor = '#95E189'
  }

  handleDelete = (ev) => {
    // this.props.deleteNoteFMA(this.state.note)
    // this.setState({ note: this.blankNote() })
    this.props.deleteNoteFMA(this.props.noteToOpenAMF)
  }

  // handleSave = (ev) => {
  //   ev.preventDefault()
  //   document.getElementById('save-button').style.backgroundColor = '#ADBDAB'
  // }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" placeholder="Title your note" onChange={this.handleChanges} value={this.props.noteToOpenAMF.title} />
          </p>
          <p>
            <textarea name="body" placeholder="Just start typing..." onChange={this.handleChanges} value={this.props.noteToOpenAMF.body}></textarea>
          </p>
          <button id="delete-button" onClick={this.handleDelete} >
            <i className="fa fa-trash-o" />
          </button>
          <button id="save-button" type="submit">
            <i className="fa fa-floppy-o" />
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm