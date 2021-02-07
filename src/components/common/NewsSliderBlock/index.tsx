import React from 'react'

import news from './data'

import { NEWS_URL } from '../../../constants/sources'

import Heading from '../Heading'
import Container from '../Container'
import Socials from '../Socials'
import ShowOn from '../ShowOn'
import Button from '../Button'
import Slider from '../Slider'
import NewsRoot from '../NewsRoot'
import NewsItem, { NewsItemType } from '../NewsItem'

import { BottomBlock, HintText, Card, Wrapper, SliderWrapper } from './styles'

interface Props {
  title?: string
}

const NewsSliderBlock: FC<Props> = ({ title = 'Свежие новости' }) => (
  <NewsRoot>
    <Container>
      <Heading title={title} btnTitle="все новости" btnHref={NEWS_URL} withMargin={false} />
    </Container>
    <Wrapper>
      <Card>
        <SliderWrapper>
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
        </SliderWrapper>
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

export default NewsSliderBlock
