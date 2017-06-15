import React from 'react'

const Note = (props) => { // {note, key, openNoteNLMA()} from NoteList.js
  function openNote(ev) {
    const li = ev.target.closest('li')
    const noteToOpen = {
      id: li.childNodes[0].childNodes[1].childNodes[1].textContent,
      title: li.childNodes[0].childNodes[0].textContent,
      body: li.childNodes[0].childNodes[1].childNodes[0].textContent,
    }
    props.openNoteNLMA(noteToOpen)
  }
  
  return (
    <li onClick={openNote}>
      <div className="note">
        <div className="note-title">{props.note.title}</div>
        <div className="note-body">
          <p>{props.note.body}</p>
          <p style={{display: 'none'}}>{props.note.id}</p>
        </div>
      </div>
    </li>
  )
}

export default Note