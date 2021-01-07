import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '../../common/Grid'
import MusicAlbumItem from '../../common/MusicAlbumItem'

import albums from './data'
import { albumsSelectors } from '../../../data-access/store/slices/albums'

const MusicAlbumList = () => {
  const list = useSelector(albumsSelectors.list)

  // console.log('list', list)

  return (
    <Grid>
      {albums.map(album => (
        <MusicAlbumItem
          key={album.id}
          id={album.id}
          image={album.image}
          date={album.date}
          name={album.name}
          description={album.description}
          title={album.title}
        />
      ))}
    </Grid>
  )
}

export default MusicAlbumList
