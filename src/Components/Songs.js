import React, { Component } from 'react'

class Songs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      songList: this.props.location.state
    }
  }
  render () {
    console.log('The props are ', this.state.songList)
    const { songList } = this.state
    const postList = songList.length ? (
      songList.map(post => {
        return (
          <div key={post.id}>
            <div className='col s12 m7'>
              <div className='card horizontal gray'>
                <div className='card-image'>
                  <img style={{ maxHeight: '100px', maxWidth: '100px' }} src={'http://jioimages.cdn.jio.com/hdindiamusic/images/' + post.image} alt='Album art' />
                </div>
                <div className='card-stacked'>
                  <div className='card-content black'>
                    <h1 className='header' style={{ fontSize: 'inherit' }}>{post.title}</h1>
                    <p>{post.artist}</p>
                  </div>
                  {/* <div class='card-action'>
                    <a href='#'>This is a link</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No tracks</div>// React loader
    )
    return (
      <div className='className container'>
        <h4 className='className center'>{postList}</h4>
      </div>
    )
  }
}

export default Songs
