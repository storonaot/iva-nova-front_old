import React from 'react'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import Socials from '../../common/Socials'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import Slider from '../../common/Slider'
import NewsRoot from '../../common/NewsRoot'
import NewsItem, { NewsItemType } from '../../common/NewsItem'

import { BottomBlock, HintText, Card, Wrapper } from './styles'

const News = () => (
  <NewsRoot>
    <Container>
      <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
    </Container>
    <Wrapper>
      <Card>
        <Slider>
          {news.map((item: NewsItemType) => (
            <NewsItem
              key={item.id}
              id={item.id}
              image={item.image}
              date={item.date}
              description={item.description}
            />
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
  </NewsRoot>
)

export default News
