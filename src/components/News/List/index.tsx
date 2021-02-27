import React from 'react'

import ContentWrapper from '../../common/ContentWrapper'
import CardComp from '../../common/Card'
import NewsItem, { NewsItemType } from '../../common/NewsItem'

import news from './data'
import Grid from '../../common/Grid'

const NewsList = () => (
  <ContentWrapper>
    <CardComp>
      <Grid>
        {news.map((item: NewsItemType) => (
          <NewsItem
            key={item.date}
            date={item.date}
            description={item.description}
            image={item.image}
            id={item.id}
            isLink
          />
        ))}
      </Grid>
    </CardComp>
  </ContentWrapper>
)

export default NewsList
