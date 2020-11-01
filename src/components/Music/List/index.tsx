import React from 'react'
import AlbumItem from '../../common/AlbumItem'
import albums from './data'

const List = () => {
  return (
    <div>
      {albums.map(album => (
        <AlbumItem key={album.id} />
      ))}
    </div>
  )
}

export default List
