import React from 'react'

import albums from './data'

import Heading from '../Heading'
import Container, { Wrapper } from '../Container'

import Slider from '../Slider'
import AlbumItem from '../AlbumItem'

import { SliderWrapper } from './styles'

interface Props {
  title?: string
}

const AlbumsSliderBlock = ({ title = 'Другие альбомы' }: Props) => (
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

export default AlbumsSliderBlock
