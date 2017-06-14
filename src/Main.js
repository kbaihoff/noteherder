import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleToDelete: '',
    }
  }
  
  titleToDeleteFM(title) {
    this.setState({
      titleToDelete: title,
    }, () => console.log(this.state))
  }

  resetMainStateLM() {
    this.setState({
      titleToDelete: '',
    }, () => console.log(this.state))
  }
    
  render() {
    return (
      <div className="Main">
        <Sidebar />
        <NoteList
          resetMainStateLM={this.resetMainStateLM.bind(this)}
          titleToDeleteML={this.state.titleToDelete}
        />
        <NoteForm
          titleToDeleteFM={this.titleToDeleteFM.bind(this)}
        />
      </div>
    )
  }
}

export default Main