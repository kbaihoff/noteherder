import React from 'react'
import ReactQuill from 'react-quill'

class Toolbar extends React.Component {
  modules = {
    toolbar: ['bold', 'italic', 'underline', 'strike'],
  }
  
  render() {
     return (
      <div className="text-editor">
        <ReactQuill theme="snow" modules={this.modules}></ReactQuill>
      </div>
    )
  }
}

export default Toolbar