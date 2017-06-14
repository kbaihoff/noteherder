import React from 'react'

import quill from './quill.svg'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note" onClick={newNote}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note" />
        <img className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note" />
      </button>
    </div>
  )
}

function newNote(ev) {
  const formTitle = ev.target.closest('.Sidebar').nextElementSibling.nextElementSibling.childNodes[0].childNodes[0].childNodes[0]
  const formNote = ev.target.closest('.Sidebar').nextElementSibling.nextElementSibling.childNodes[0].childNodes[1].childNodes[0]
  formTitle.value = ''
  formNote.value = ''
}

export default Sidebar