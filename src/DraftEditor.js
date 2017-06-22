import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

class DraftEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }

  handleBold = (ev) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  render() {
    return (
      <div>
        <button id="bold-button" className="rich" type="button" onClick={this.handleBold}>
          <i className="fa fa-bold" />
        </button>
        <Editor editorState={this.state.editorState} onChange={this.onChange} placeHolder="This is the editor" />
      </div>
    )
  }
}

export default DraftEditor