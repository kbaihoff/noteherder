import React from 'react'

import './NoteList.css'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: props.notesML,
    }
    this.openNote = this.openNote.bind(this)
  }

  openNote(ev) {
    this.props.noteToOpenLM()

    const noteTitle = ev.target.closest('li').childNodes[0].childNodes[0].textContent
    const note = ev.target.closest('li').childNodes[0].childNodes[1].textContent
    const formTitle = ev.target.closest('.NoteList').nextElementSibling.childNodes[0].childNodes[0].childNodes[0]
    const formNote = ev.target.closest('.NoteList').nextElementSibling.childNodes[0].childNodes[1].childNodes[0]
    formTitle.value = noteTitle
    formNote.value = note
  }

  render() {
    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes" onClick={this.openNote}>
          {this.state.notes.map((note, i) => <ListNotes key={i} note={note}/>)}
        </ul>
      </div>
    )
  }
}

function ListNotes(props) {
  return (
    <li>
      <div className="note">
        <div className="note-title">{props.note.noteTitle}</div>
        <div className="note-body">
          <p>{props.note.noteContent}</p>
        </div>
      </div>
    </li>
  )
}

export default NoteList