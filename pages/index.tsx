import React from 'react'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Schedule />
    <News />
    <Music />
    <Video />
  </Layout>
)

export default IndexPage
