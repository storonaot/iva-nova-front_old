import React from 'react'
import { PHOTOS_URL } from '../../../constants/sources'
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
            to={`${PHOTOS_URL}/${photoAlbum.id}`}
            mode="photo"
          />
        )
      })}
    </Grid>
  )
}

export default PhotoAlbumList
