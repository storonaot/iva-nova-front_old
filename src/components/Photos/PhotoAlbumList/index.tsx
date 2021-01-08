import React from 'react'
import { PHOTOS_URL } from '../../../constants/sources'
import { AspectRatio } from '../../common/AspectRatioImage'
import Grid from '../../common/Grid'
import MediaFullPreview from '../../common/MediaFullPreview'

import photoAlbums from './data'

const PhotoAlbumList = () => {
  return (
    <Grid>
      {photoAlbums.map(photoAlbum => {
        return (
          <MediaFullPreview
            key={photoAlbum.id}
            text={photoAlbum.title}
            image={photoAlbum.image}
            aspectRatio={AspectRatio['4:3']}
            to={`${PHOTOS_URL}/${photoAlbum.id}`}
            mode="photo"
          />
        )
      })}
    </Grid>
  )
}

export default PhotoAlbumList
