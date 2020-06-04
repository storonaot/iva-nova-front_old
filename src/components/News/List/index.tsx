import React from 'react'
import ContentWrapper from '../../common/ContentWrapper'

import CardComp from '../../common/Card'

import NewsItem, { NewsItemType } from '../../common/NewsItem'

import { Grid } from './styles'

import news from './data'

const NewsList = () => (
  <ContentWrapper>
    <CardComp>
      <Grid>
        {news.map((item: NewsItemType) => (
          <NewsItem
            key={item.id}
            date={item.date}
            description={item.description}
            image={item.image}
            id={item.id}
          />
        ))}
      </Grid>
    </CardComp>
  </ContentWrapper>
)

export default NewsList
