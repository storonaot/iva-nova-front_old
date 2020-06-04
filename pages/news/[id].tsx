import React from 'react'
import Layout from '../../src/components/Layout'
import NewsItem from '../../src/components/NewsItem'
import NewsSliderBlock from '../../src/components/common/NewsSliderBlock'

const NewsItemPage = () => {
  return (
    <Layout>
      <NewsItem />
      <NewsSliderBlock title="Другие новости" />
    </Layout>
  )
}

export default NewsItemPage
