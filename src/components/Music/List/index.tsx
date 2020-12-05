import React from 'react'
import AlbumItem from '../../common/AlbumItem'
import albums from './data'

const List = () => {
  return (
    <div>
      {albums.map(album => (
        <AlbumItem
          key={album.id}
          id={album.id}
          image={album.image}
          date={album.year}
          name={album.name}
          description={album.description}
          title={album.name}
        />
      ))}
    </div>
  )
}

export default List
