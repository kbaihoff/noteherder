import React from 'react'

const Note = ({ note }) => { // extract {note: {id, title, body}} from props from NoteList.js
  return (
    <li>
      <div className="note">
        <div className="note-title">{note.title}</div>
        <div className="note-body">
          <p>{note.body}</p>
        </div>
      </div>
    </li>
  )
}

export default Note