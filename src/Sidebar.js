import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/notes">
        <button className="new-note">
          <img src={newHover} alt="New note" />
          <img className="outline" src={newIcon} alt="New note" />
        </button>
      </Link>
      <SignOut signOut={props.signOutSMA} />
    </div>
  )
}

export default Sidebar