import React from 'react'
import NewsItem from '../../src/components/NewsItem'
import NewsSliderBlock from '../../src/components/common/NewsSliderBlock'

const NewsItemPage = () => {
  return (
    <>
      <NewsItem />
      <NewsSliderBlock title="Другие новости" />
    </>
  )
}

export default NewsItemPage
