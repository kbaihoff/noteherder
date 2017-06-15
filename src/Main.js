import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
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
      ],
      noteToOpenTitleMF: '',
      noteToOpenContentMF: '',
    }
  }
  
  noteToOpenLM(title, content) {
    this.setState({
      noteToOpenTitleMF: title,
      noteToOpenContentMF: content,
    }, () => console.log(this.state))
  }

  titleToDeleteFM(title) {
    for (let i = 0; i < this.state.notes.length; i++) {
      console.log(title)
      if (this.state.notes[i].noteTitle === title) {
        console.log('delete this title: ' + title)
      }
    }
    
    // this.setState({
    //   titleToDelete: title,
    // }, () => console.log(this.state))
  }
    
  render() {
    return (
      <div className="Main">
        <Sidebar />
        <NoteList
          notesML={this.state.notes}
          noteToOpenLM={this.noteToOpenLM.bind(this)}
        />
        <NoteForm
          noteToOpenTitleMF={this.state.noteToOpenTitleMF}
          noteToOpenContentMF={this.state.noteToOpenContentMF}
          titleToDeleteFM={this.titleToDeleteFM.bind(this)}
        />
      </div>
    )
  }
}

export default Main