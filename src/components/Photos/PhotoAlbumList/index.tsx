import React from 'react'
import MediaFullPreview from '../../common/MediaFullPreview'

import photoAlbums from './data'
import { Grid } from './styles'

const PhotoAlbumList = () => {
  return (
    <Grid>
      {photoAlbums.map(photoAlbum => {
        return (
          <MediaFullPreview
            key={photoAlbum.id}
            text={photoAlbum.title}
            image={photoAlbum.image}
            aspectRatio="4:3"
            to="/"
          />
        )
      })}
    </Grid>
  )
}

export default PhotoAlbumList
