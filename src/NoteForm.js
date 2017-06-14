import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.noteToOpenTitleMF,
      content: props.noteToOpenContentMF,
    }
    this.deleteNote = this.deleteNote.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateNote = this.updateNote.bind(this)

  }

  deleteNote(ev) {
    ev.preventDefault()
    this.props.titleToDeleteFM(this.state.title)
    this.setState({
      title: '',
      content: '',
    })
  }

  updateTitle(ev) {
    this.setState({
      title: ev.target.value
    })
  }

  updateNote(ev) {
    this.setState({
      content: ev.target.value
    })
  }
  
  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" value={this.state.title} onChange={this.updateTitle} placeholder="Title your note" />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" value={this.state.content} onChange={this.updateNote} placeholder="Just start typing..."></textarea>
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