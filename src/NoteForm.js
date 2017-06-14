import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: ''
    }
    this.updateTitle = this.updateTitle.bind(this)
  }

  updateTitle(ev) {
    this.setState({
      noteTitle: ev.target.value
    })
  }
  
  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" value={this.state.noteTitle} onChange={this.updateTitle} placeholder="Title your note" />
          </p>
          <p>
            <textarea name="body" cols="30" rows="10" placeholder="Just start typing..."></textarea>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm