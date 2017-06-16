import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
  constructor(props) { // {notesAMLN, noteToOpenAMF, saveNoteFMA(), deleteNoteFMA()} from Main.js
    super(props)
    this.state = {
      note: (this.props.noteToOpenAMF === null ? this.blankNote() : this.props.noteToOpenAMF),
    }
  }

  componentWillReceiveProps = (newProps) => {
    if (this.props.noteToOpenAMF.id !== newProps.noteToOpenAMF.id) {
      this.setState({ note: newProps.noteToOpenAMF === null ? this.blankNote() : newProps.noteToOpenAMF })
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note: note },
      () => this.props.saveNoteFMA(this.state.note)
    )
    document.getElementById('save-button').style.backgroundColor = '#95E189'
  }

  handleDelete = (ev) => {
    this.props.deleteNoteFMA(this.state.note)
    this.setState({ note: this.blankNote() })
  }

  handleSave = (ev) => {
    ev.preventDefault()
    document.getElementById('save-button').style.backgroundColor = '#ADBDAB'
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSave}>
          <p>
            <input type="text" name="title" placeholder="Title your note" onChange={this.handleChanges} value={this.state.note.title} />
          </p>
          <p>
            <textarea name="body" placeholder="Just start typing..." onChange={this.handleChanges} value={this.state.note.body}></textarea>
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