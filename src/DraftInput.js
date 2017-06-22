import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'

class DraftInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.onChange = (ev) => this.setState({ value: ev.target.value })
  }

  render() {
    return <input value={this.state.value} onChange={this.onChange} />
  }
}

export default DraftInput