import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => { // {notesAMLN, openNoteNLMA(), noteToOpenAMF, setNoteToOpenAMF(), resetNoteToOpenAMF(), saveNoteFMA(), deleteNoteFMA(), signOutSMA()} from App.js
  console.log(props)
  
  return (
    <div className="Main">
      <Sidebar resetNoteToOpenAMF={props.resetNoteToOpenAMF} signOutSMA={props.signOutSMA} />
      <NoteList notesAMLN={props.notesAMLN} />
      <Switch>
        <Route path="/notes/:id" render={(navProps) => <NoteForm {...props} {...navProps}/>}/>
        <Route path="/notes" render={(navProps) => <NoteForm {...props} {...navProps}/>}/>
      </Switch>
      
    </div>
  )
}

export default Main