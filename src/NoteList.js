import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => { // {notesAMLN} from Main.js
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { Object.keys(props.notesAMLN).map((noteId) => {
          return <Note note={props.notesAMLN[noteId]} key={noteId} />
        }) }
      </ul>
    </div>
  )
}

export default NoteList