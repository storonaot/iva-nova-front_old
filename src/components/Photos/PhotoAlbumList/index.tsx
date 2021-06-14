import React, { FC } from 'react'
import { PHOTOS_URL } from '../../../constants/sources'
import { AspectRatio } from '../../common/AspectRatioImage'
import Grid from '../../common/Grid'
import MediaFullPreview from '../../common/MediaFullPreview'

// import photoAlbums from './data'
import { PhotoAlbum } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'

interface Props {
  photoAlbums: PhotoAlbum[]
}

const PhotoAlbumList: FC<Props> = ({ photoAlbums }) => {
  return (
    <Grid>
      {photoAlbums.map(photoAlbum => {
        return (
          <MediaFullPreview
            key={photoAlbum.id}
            text={photoAlbum.title}
            image={getFullMediaUrl(photoAlbum.cover.url)}
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
