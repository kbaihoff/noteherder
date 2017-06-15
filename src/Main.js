import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => { // {notesAMLN: Object, saveNoteFMA: function, deleteNoteFMA: function} from App.js
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notesAMLN={props.notesAMLN} />
      <NoteForm saveNoteFMA={props.saveNoteFMA} deleteNoteFMA={props.deleteNoteFMA} />
    </div>
  )
}

export default Main