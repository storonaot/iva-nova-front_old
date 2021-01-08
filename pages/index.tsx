import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'
import { getAlbumList } from '../src/data-access/store/slices/albums'

const IndexPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const dispatchGetAlbumList = async () => {
      await dispatch(getAlbumList())
    }

    dispatchGetAlbumList()
  }, [dispatch])

  return (
    <Layout>
      <Hero />
      <Schedule />
      <News />
      <Music />
      <Video />
    </Layout>
  )
}

export default IndexPage
