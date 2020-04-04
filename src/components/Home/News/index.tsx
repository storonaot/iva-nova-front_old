import React from 'react'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import Slider, { useSlider } from '../../common/Slider'
import SectionRoot from '../../common/SectionRoot'
import { PreviewList } from '../../common/Preview'

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
  const perPage = 3
  const length = news.length
  const { goNext, goPrev, isShown } = useSlider({
    length,
    perPage,
  })

  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
      </Container>
      <Wrapper>
        <Card>
          <Slider goNext={goNext} goPrev={goPrev} showArrows={perPage < length}>
            <PreviewList>
              {news.map((item: NewsItem, index) => (
                <PreviewItem key={item.id} isShown={isShown(index)}>
                  <ImageWrapper>
                    <AspectRatioImage image={item.image} aspectRatio="4:3" />
                  </ImageWrapper>
                  <Date>
                    {item.date} {index}
                  </Date>
                  <Description>{item.description}</Description>
                </PreviewItem>
              ))}
            </PreviewList>
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
