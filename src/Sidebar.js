import React from 'react'

import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import SignOut from './SignOut'
import './Sidebar.css'

const Sidebar = (props) => { // {resetNoteToOpenAMF(), signOut()} from Main.js
  // function handleNewNote(ev) {
  //   const newNote = {
  //     id: null,
  //     title: '',
  //     body: '',
  //   }
  //   props.newNoteSMA(newNote)
  // }
  
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note" onClick={props.resetNoteToOpenAMF}>
        <img src={newHover} alt="New note" />
        <img className="outline" src={newIcon} alt="New note" />
      </button>
      <SignOut signOut={props.signOutSMA} />
    </div>
  )
}

export default Sidebar