import React from 'react'
import AlbumItem from './AlbumItem'

import { Grid } from './styles'

import albums from './data'

const AlbumList = () => (
  <Grid>
    {albums.map(album => (
      <AlbumItem
        key={album.id}
        id={album.id}
        image={album.image}
        date={album.date}
        name={album.name}
        description={album.description}
      />
    ))}
  </Grid>
)

export default AlbumList
