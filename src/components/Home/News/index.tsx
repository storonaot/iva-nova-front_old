import React from 'react'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import Slider from '../../common/Slider'
import SectionRoot from '../../common/SectionRoot'

import bgImage from '../../../static/images/bg1.jpg'

import {
  ImageWrapper,
  Date,
  Description,
  BottomBlock,
  HintText,
  Card,
  Wrapper,
  PreviewItem,
} from './styles'

interface NewsItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: string
  description: string
}

const News = () => {
  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
      </Container>
      <Wrapper>
        <Card>
          <Slider>
            {news.map((item: NewsItem, index) => (
              <PreviewItem key={item.id}>
                <ImageWrapper>
                  <AspectRatioImage image={item.image} aspectRatio="4:3" />
                </ImageWrapper>
                <Date>
                  {item.date} {index}
                </Date>
                <Description>{item.description}</Description>
              </PreviewItem>
            ))}
          </Slider>
          <ShowOn tablet desktop>
            <BottomBlock>
              <HintText>Чтобы быть в курсе, не забывайте подписаться на нас!</HintText>
              <Socials padded={false} />
            </BottomBlock>
          </ShowOn>
        </Card>
        <ShowOn mobile>
          <Button href={NEWS_URL} isBlock>
            все новости
          </Button>
        </ShowOn>
      </Wrapper>
    </SectionRoot>
  )
}

export default News
