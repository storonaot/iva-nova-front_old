import React from 'react'
import Link from 'next/link'

import { MUSIC_URL } from '../../../../constants/sources'

import { ImageRoot, DescriptionRoot, Year, Title, Content } from './styles'

import AspectRatioImage from '../../../common/AspectRatioImage'

interface Props {
  id: number | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: number | string
  name: string
  description: string
}

const AlbumItem = ({ id, image, date, name, description }: Props) => (
  <Link href={`${MUSIC_URL}/${id}`}>
    <div>
      <ImageRoot>
        <AspectRatioImage image={image} aspectRatio="1:1">
          <DescriptionRoot>{description}</DescriptionRoot>
        </AspectRatioImage>
      </ImageRoot>
      <Content>
        <Title>{name}</Title>
        <Year>{date}</Year>
      </Content>
    </div>
  </Link>
)

export default AlbumItem
