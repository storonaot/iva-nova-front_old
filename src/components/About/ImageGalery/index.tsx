import React, { FC } from 'react'

import { getFullMediaUrl } from '../../../helpers'
import { Image } from '../../../api/types'

import { FirstRow, SecondRow, PhotoItem } from './styles'

interface Props {
  photos: Image[]
}

const ImageGallery: FC<Props> = ({ photos }) => {
  const firstRow = photos.slice(0, 3)
  const secondRow = photos.slice(3, 6)

  return (
    <>
      <FirstRow>
        {firstRow.map(photo => (
          <PhotoItem key={photo.id} backgroundImage={getFullMediaUrl(photo.url)} />
        ))}
      </FirstRow>
      <SecondRow>
        {secondRow.map(photo => (
          <PhotoItem key={photo.id} backgroundImage={getFullMediaUrl(photo.url)} />
        ))}
      </SecondRow>
    </>
  )
}

export default ImageGallery
