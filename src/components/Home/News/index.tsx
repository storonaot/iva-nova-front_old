import React from 'react'
import styled from 'styled-components'
import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container, { Wrapper } from '../../common/Container'
import Card from '../../common/Card'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'

import bgImage from '../../../static/images/bg1.jpg'
import photo1 from './photo1.png'
import photo2 from './photo2.png'
import photo3 from './photo3.png'

import { LINES_COLOR, SECONDARY_FONT } from '../../../theme'

const Root = styled.div`
  background-image: url(${bgImage});
  padding: 50px 0 40px 0;
`

const PreviewList = styled.div`
  display: flex;
  margin: 0 -16px;
  > * {
    width: 33.33%;
  }
`

const Preview = styled.div`
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

const News = () => (
  <Root>
    <Container>
      <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
    </Container>
    <Wrapper>
      <Card>
        <PreviewList>
          <Preview>
            <ImageWrapper>
              <AspectRatioImage image={photo1} aspectRatio="4:3" />
            </ImageWrapper>
            <Date>24 фев в 15:28</Date>
            <Description>
              Скоро мы наденем наши нарядные весенние платьишки и прилетим в the Place праздновать
              Весну!
            </Description>
          </Preview>
          <Preview>
            <ImageWrapper>
              <AspectRatioImage image={photo2} aspectRatio="4:3" />
            </ImageWrapper>
            <Date>24 фев в 15:28</Date>
            <Description>
              Радуемся солнцу и весне! Впервые за долгое время будем праздновать дома, в Петербурге.
              8/03-ИВА НОВА ...
            </Description>
          </Preview>
          <Preview>
            <ImageWrapper>
              <AspectRatioImage image={photo3} aspectRatio="4:3" />
            </ImageWrapper>
            <Date>24 фев в 15:28</Date>
            <Description>
              У гостей нашей программы - группы ИВА НОВА 8 марта состоится концерт. Самое время
              вспомнить интервью, которое девушки ...
            </Description>
          </Preview>
        </PreviewList>
        <BottomBlock>
          <HintText>Чтобы быть в курсе, не забывайте подписаться на нас!</HintText>
          <Socials padded={false} />
        </BottomBlock>
      </Card>
    </Wrapper>
  </Root>
)

export default News
