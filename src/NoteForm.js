import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: '',
      note: '',
    }
    this.deleteNote = this.deleteNote.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateNote = this.updateNote.bind(this)
    console.log(props)
  }

  deleteNote(ev) {
    ev.preventDefault()
    console.log(ev.target, ev.target.parentElement, ev.target.closest('form'))
    this.setState({
      noteTitle: '',
      note: '',
    })
  }

  updateTitle(ev) {
    this.setState({
      noteTitle: ev.target.value
    })
  }

  updateNote(ev) {
    this.setState({
      note: ev.target.value
    })
  }
  
  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" value={this.state.noteTitle} onChange={this.updateTitle} placeholder="Title your note" />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" value={this.state.note} onChange={this.updateNote} placeholder="Just start typing..."></textarea>
          </p>
          <button id="delete-button" onClick={this.deleteNote}>
            <i className="fa fa-trash-o" />
          </button>
          <button id="save-button">
            <i className="fa fa-floppy-o" />
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm