import React from 'react'

import './NoteList.css'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          noteTitle: "Citizens of distant epochs",
          noteContent: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?",
        },

        {
          noteTitle: "Preserve and cherish that pale blue dot",
          noteContent: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!",
        },

        {
          noteTitle: "Laws of physics",
          noteContent: "Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas",
        },
      ]
    }
    this.openNote = this.openNote.bind(this)
  }

  openNote(ev) {
    console.log('Props for NoteList:', this.props)
    const noteTitle = ev.target.closest('li').childNodes[0].childNodes[0].textContent
    const note = ev.target.closest('li').childNodes[0].childNodes[1].textContent
    const formTitle = ev.target.closest('.NoteList').nextElementSibling.childNodes[0].childNodes[0].childNodes[0]
    const formNote = ev.target.closest('.NoteList').nextElementSibling.childNodes[0].childNodes[1].childNodes[0]
    formTitle.value = noteTitle
    formNote.value = note
  }

  render() {
    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes" onClick={this.openNote}>
          {this.state.notes.map((note, i) => <ListNotes key={i} note={note}/>)}
        </ul>
      </div>
    )
  }
}

function ListNotes(props) {
  return (
    <li>
      <div className="note">
        <div className="note-title">{props.note.noteTitle}</div>
        <div className="note-body">
          <p>{props.note.noteContent}</p>
        </div>
      </div>
    </li>
  )
}

export default NoteList