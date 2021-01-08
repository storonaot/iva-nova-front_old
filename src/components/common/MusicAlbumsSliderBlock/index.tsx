import React, { FC } from 'react'

import albums from './data'

import Heading from '../Heading'
import Container, { Wrapper } from '../Container'

import Slider from '../Slider'
// import AlbumItem from '../MusicAlbumItem'

import { SliderWrapper } from './styles'

interface Props {
  title?: string
}

const MusicAlbumsSliderBlock: FC<Props> = ({ title = 'Другие альбомы' }) => (
  <Container>
    <Wrapper>
      <Heading title={title} withMargin />
      <SliderWrapper>
        <Slider>
          {/* {albums.map(item => (
            <AlbumItem key={item.id} album={{}} />
          ))} */}
          {albums.map(item => (
            <div key={item.id}>album</div>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  </Container>
)

export default MusicAlbumsSliderBlock
