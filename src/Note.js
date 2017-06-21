import React from 'react'
import { NavLink } from 'react-router-dom'

const Note = (props) => { // {note, key} from NoteList.js 
  return (
    <NavLink to={`/notes/${props.note.id}`}>
      <li>
        <div className="note">
          <div className="note-title">{props.note.title}</div>
          <div className="note-body">
            <p>{props.note.body}</p>
          </div>
        </div>
      </li>
    </NavLink>
  )
}

export default Note