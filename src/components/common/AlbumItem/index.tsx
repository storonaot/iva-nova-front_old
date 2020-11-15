import React from 'react'
import Link from 'next/link'

import { MUSIC_URL } from '../../../constants/sources'
import AspectRatioImage from '../AspectRatioImage'
import {
  ImageRoot,
  DescriptionRoot,
  Year,
  Title,
  Content,
  Wrapper,
  Overlay,
  Paragrarh,
} from './styles'

interface Props {
  id: number | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: number | string
  name: string
  description: string
  title: string
}

const AlbumItem = ({ id, image, date, name, description, title }: Props) => (
  <Link href={`${MUSIC_URL}/${id}`}>
    <Wrapper>
      <ImageRoot>
        <AspectRatioImage image={image} aspectRatio="1:1">
          <DescriptionRoot>{description}</DescriptionRoot>
        </AspectRatioImage>
        <Overlay>
          <div>
            <Paragrarh isBold>{title}</Paragrarh>
            <Paragrarh>{description}</Paragrarh>
          </div>
        </Overlay>
      </ImageRoot>
      <Content>
        <Title>{name}</Title>
        <Year>{date}</Year>
      </Content>
    </Wrapper>
  </Link>
)

export default AlbumItem
