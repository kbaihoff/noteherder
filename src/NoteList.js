import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => { // {notesAMLN, setNoteToOpenAMF()} from Main.js
  console.log(props)
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { Object.keys(props.notesAMLN).map((noteId) => {
          return <Note note={props.notesAMLN[noteId]} key={noteId} setNoteToOpenAMF={props.setNoteToOpenAMF} />
        }) }
      </ul>
    </div>
  )
}

export default NoteList