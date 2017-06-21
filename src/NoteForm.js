import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component { // {notesAMLN, noteToOpenAMF, saveNoteFMA(), deleteNoteFMA()} from Main.js
  state = {
    selected: {},
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.match.params.id) {
      const newId = nextProps.match.params.id
      if (newId !== this.props.noteToOpenAMF.id) {
        const note = nextProps.notesAMLN[newId]
        if (note) {
          this.props.setNoteToOpenAMF(note)
        }
      }
    }
    else if (this.props.noteToOpenAMF.id) {
      this.props.resetNoteToOpenAMF()
    }
  }

  handleChanges = (ev) => {
    const note = {...this.props.noteToOpenAMF}
    note[ev.target.name] = ev.target.value
    this.props.saveNoteFMA(note)
  }

  handleSelection = (ev) => {
    console.log(ev.currentTarget.innerHTML)
    ev.currentTarget.value = document.getSelection().toString().bold()
    // document.getSelection().baseNode.toggleClass('bold')
    // this.setState({ selected: document.getSelection() })
    // document.getElementsByName("body")[0].textContent = document.getSelection().toString().bold()
    // document.getElementsByName("body")[0].style.fontWeight = 'bold'
    // console.log(this.state.selected, document.getSelection())
    // console.log(document.querySelector('textarea').value)
    // document.querySelector('textarea').value = document.getSelection().toString().bold()
  }

  handleBold = (ev) => {
    ev.preventDefault()
    document.querySelector('textarea').style.fontWeight = (document.querySelector('textarea').style.fontWeight === 'bold' ? 'normal' : 'bold')
  }

  handleDelete = (ev) => {
    this.props.deleteNoteFMA(this.props.noteToOpenAMF)
  }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" placeholder="Title your note" onChange={this.handleChanges} value={this.props.noteToOpenAMF.title} />
          </p>
          <button id="bold-button" className="rich" type="button" onClick={this.handleBold}>
            <i className="fa fa-bold" />
          </button>
          <p>
            <textarea name="body" placeholder="Just start typing..." onChange={this.handleChanges} value={this.props.noteToOpenAMF.body} />
          </p>
          <button id="delete-button" type="button" onClick={this.handleDelete} >
            <i className="fa fa-trash-o" />
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm