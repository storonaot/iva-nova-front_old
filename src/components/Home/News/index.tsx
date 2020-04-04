import React, { useState } from 'react'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'

import ArrowIcon from '../../../static/svg/arrow.svg'

import {
  Root,
  PreviewList,
  Preview,
  ImageWrapper,
  Date,
  Description,
  BottomBlock,
  HintText,
  LeftArrowWrapper,
  RightArrowWrapper,
  Card,
  Wrapper,
} from './styles'

interface NewsItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: string
  description: string
}

const News = () => {
  const [activePreview, setActivePreview] = useState(0)

  return (
    <Root>
      <Container>
        <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
      </Container>
      <Wrapper>
        <Card>
          <div>
            <LeftArrowWrapper
              onClick={() => {
                const previousPreview = activePreview === 0 ? 2 : activePreview - 1
                setActivePreview(previousPreview)
              }}
            >
              <ArrowIcon />
            </LeftArrowWrapper>
            <PreviewList>
              {news.map((item: NewsItem, index) => (
                <Preview key={item.id} isShown={index === activePreview}>
                  <ImageWrapper>
                    <AspectRatioImage image={item.image} aspectRatio="4:3" />
                  </ImageWrapper>
                  <Date>
                    {item.date} {index}
                  </Date>
                  <Description>{item.description}</Description>
                </Preview>
              ))}
            </PreviewList>
            <RightArrowWrapper
              onClick={() => {
                const nextPreview = activePreview === 2 ? 0 : activePreview + 1
                setActivePreview(nextPreview)
              }}
            >
              <ArrowIcon />
            </RightArrowWrapper>
          </div>
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
    </Root>
  )
}

export default News
