import React from 'react'
import Grid from '../../common/Grid'
import MusicAlbumItem from '../../common/MusicAlbumItem'

import albums from './data'

const MusicAlbumList = () => (
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

export default MusicAlbumList
