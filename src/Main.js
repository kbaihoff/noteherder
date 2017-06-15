import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => { // {notesAMLN, openNoteNLMA(), noteToOpenAMF, newNoteSMA(), saveNoteFMA(), deleteNoteFMA()} from App.js
  return (
    <div className="Main">
      <Sidebar newNoteSMA={props.newNoteSMA} />
      <NoteList notesAMLN={props.notesAMLN} openNoteNLMA={props.openNoteNLMA} />
      <NoteForm
        notesAMLN={props.notesAMLN}
        noteToOpenAMF={props.noteToOpenAMF}
        saveNoteFMA={props.saveNoteFMA}
        deleteNoteFMA={props.deleteNoteFMA}
      />
    </div>
  )
}

export default Main