import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => { // {notesAMLN, openNoteNLMA(), noteToOpenAMF, newNoteSMA(), saveNoteFMA(), deleteNoteFMA()} from App.js
  const noteData = {
    notesAMLN: props.notesAMLN,
    noteToOpenAMF: props.noteToOpenAMF,
    saveNoteFMA: props.saveNoteFMA,
    deleteNoteFMA: props.deleteNoteFMA,
  }
  
  return (
    <div className="Main">
      <Sidebar newNoteSMA={props.newNoteSMA} signOutSMA={props.signOutSMA} />
      <NoteList notesAMLN={props.notesAMLN} openNoteNLMA={props.openNoteNLMA} />
      <Switch>
        <Route path="/notes/:id" render={(navProps) => <NoteForm {...noteData} {...navProps}/>}/>
        <Route path="/notes" render={(navProps) => <NoteForm {...noteData} {...navProps}/>}/>
      </Switch>
      
    </div>
  )
}

export default Main