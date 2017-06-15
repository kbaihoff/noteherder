import React from 'react'

import quill from './quill.svg'
import newHover from './new-hover.png'
import nNew from './new.png'
import './Sidebar.css'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.newNote = this.newNote.bind(this)
  }

  newNote(ev) {
    this.props.newNoteSM()
  }

  render() {
    return (
      <div className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note" onClick={this.newNote}>
          <img src={newHover} alt="New note" />
          <img className="outline" src={nNew} alt="New note" />
        </button>
      </div>
    )
  }
}

export default Sidebar