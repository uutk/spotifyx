import React, { Component } from 'react'
import './Collections.css'
import shortid from 'shortid'
import Card from './card'

const arrayToObject = (array) => {
  const accumulator = {
    Dynamic: [],
    songs: [],
    playlist: [],
    albums: [],
    language: []
  }
  return array.reduce((obj, item) => {
    item._id = shortid.generate()
    obj[item.type].push((<div className={item.type} key={item._id} info={item.list}>
      <li>{item.name}</li>
    </div>))
    return obj
  }, accumulator)
}
// Collections
class Collections extends Component {
  render () {
    const collectionObject = arrayToObject(this.props.songCollections)
    console.log('The collection object is ', collectionObject.songs)
    return (
      <div className='Collection'>
        <h3>Top hits</h3>
        <ul className='list'>
          <Card details={collectionObject.songs} />
        </ul>

        <h3>Dynamic</h3>
        <ul className='list'>
          <Card details={collectionObject.Dynamic} />
        </ul>

        <h3>Playlists</h3>
        <ul className='list'>
          <Card details={collectionObject.playlist} />
        </ul>

        <h3>Albums</h3>
        <ul className='list'>
          <Card details={collectionObject.albums} />
        </ul>

        <h3>Other languages</h3>
        <ul className='list'>
          <Card details={collectionObject.language} />
        </ul>

      </div>
    )
  }
}

export default Collections
