import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import Collections from './Collections'
import Albums from './Albums'
import Playlist from './Playlist'
import Songs from './Songs'
import SingleTrack from './SingleTrack'

// App
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      songCollections: []
    }
  }
  componentDidMount () { // url to config file
    axios.get('https://cors-anywhere.herokuapp.com/https://beatsapi.media.jio.com/v2_1/beats-api/jio/src/response/home/english')
      .then(response => {
        let songCollections = response.data.result.data
        this.setState({
          songCollections
        })
        console.log(songCollections)
      })
  }
  render () {
    if (!this.state.songCollections.length) {
      return (
        <div className='className container' style={{position: 'fixed', top: '50%', left: '50%'}}>
          <div className='preloader-wrapper small active'>
            <div className='spinner-layer spinner-green-only'>
              <div className='circle-clipper left'>
                <div className='circle' />
              </div><div className='gap-patch'>
                <div className='circle' />
              </div><div className='circle-clipper right'>
                <div className='circle' />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='Collection'>
          <Route exact path='/' render={props => <Collections songCollections={this.state.songCollections} {...props} />} />
          <Route path='/language' render={props => <Collections songCollections={this.state.songCollections} {...props} />} />
          <Route path='/Dynamic' component={Songs} />
          <Route path='/songs' component={Songs} />
          <Route path='/singleTrack' component={SingleTrack} />
          <Route path='/albums' component={Albums} />
          <Route path='/playlist' component={Playlist} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
