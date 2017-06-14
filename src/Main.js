import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList formToList={formToList.bind(this)}/>
      <NoteForm formToMain={formToMain.bind(this)}/>
    </div>
  )
}

function formToMain(title) {
  console.log(title)
}

function formToList() {
  console.log('formToList')
}

export default Main