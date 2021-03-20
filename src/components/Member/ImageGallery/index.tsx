import React, { FC } from 'react'

import AspectRatioImage, { AspectRatio } from '../../common/AspectRatioImage'
import { getFullMediaUrl } from '../../../helpers'
import { Image } from '../../../api/types'
import { Grid } from './styles'

const ImageGallery: FC<{ photos: Image[] }> = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <AspectRatioImage
          key={photo.id}
          imageUrl={getFullMediaUrl(photo.url)}
          aspectRatio={AspectRatio['1:1']}
        />
      ))}
    </Grid>
  )
}

export default ImageGallery
