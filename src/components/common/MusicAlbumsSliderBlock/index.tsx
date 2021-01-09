import React, { FC } from 'react'

import Heading from '../Heading'
import Container, { Wrapper } from '../Container'

import Slider from '../Slider'
import AlbumItem from '../MusicAlbumItem'

import { SliderWrapper } from './styles'
import { Album } from '../../../api/types'

interface Props {
  title?: string
  list: Album[]
}

const MusicAlbumsSliderBlock: FC<Props> = ({ title = 'Другие альбомы', list }) => (
  <Container>
    <Wrapper>
      <Heading title={title} withMargin />
      <SliderWrapper>
        <Slider>
          {list.map(album => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  </Container>
)

export default MusicAlbumsSliderBlock
