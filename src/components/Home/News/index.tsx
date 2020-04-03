import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container, { Wrapper } from '../../common/Container'
import Card from '../../common/Card'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'
import ShowOn from '../../common/ShowOn'

import bgImage from '../../../static/images/bg1.jpg'

import { LINES_COLOR, SECONDARY_FONT } from '../../../theme'

const Root = styled.div`
  background-image: url(${bgImage});
  padding: 50px 0 40px 0;
`

const PreviewList = styled.div`
  display: flex;
  margin: 0 -16px;
  > * {
    width: 100%;
    ${media.greaterThan('medium')`
      width: 33.33%;
    `}
  }
`

const Preview = styled.div`
  ${media.greaterThan('medium')`
    padding-right: 16px;
    padding-left: 16px;
    margin-bottom: 38px;
    padding-bottom: 16px;
    &:first-child {
      border-right: 1px solid ${LINES_COLOR};
    }
    &:last-child {
      border-left: 1px solid ${LINES_COLOR};
    }
  `}
`

const ImageWrapper = styled.div`
  margin-bottom: 24px;
`

const Date = styled.span`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  margin-bottom: 16px;
  display: inline-block;
`

const Description = styled.p`
  line-height: 1.2em;
`

const BottomBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HintText = styled.h5`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  text-align: center;
  margin-right: 32px;
`

interface NewsItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: string
  description: string
}

const News = () => (
  <Root>
    <Container>
      <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
    </Container>
    <Wrapper>
      <Card>
        <PreviewList>
          {news.map((item: NewsItem) => (
            <Preview key={item.id}>
              <ImageWrapper>
                <AspectRatioImage image={item.image} aspectRatio="4:3" />
              </ImageWrapper>
              <Date>{item.date}</Date>
              <Description>{item.description}</Description>
            </Preview>
          ))}
        </PreviewList>
        <ShowOn tablet desktop>
          <BottomBlock>
            <HintText>Чтобы быть в курсе, не забывайте подписаться на нас!</HintText>
            <Socials padded={false} />
          </BottomBlock>
        </ShowOn>
      </Card>
    </Wrapper>
  </Root>
)

export default News
