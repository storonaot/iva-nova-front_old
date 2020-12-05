import React, { FC } from 'react'

import albums from './data'

import Heading from '../Heading'
import Container, { Wrapper } from '../Container'

import Slider from '../Slider'
import AlbumItem from '../MusicAlbumItem'

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
          {albums.map(item => (
            <AlbumItem
              key={item.id}
              id={item.id}
              image={item.image}
              date={item.date}
              description={item.description}
              name={item.name}
              title={item.title}
            />
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  </Container>
)

export default MusicAlbumsSliderBlock
