import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'
import { fetchTrackList } from '../src/api'
import { TrackItem } from '../src/api/types'

interface Props {
  trackList: TrackItem[]
}

const IndexPage: FC<Props> = ({ trackList }) => {
  return (
    <Layout>
      <Hero />
      <Schedule />
      <News />
      <Music trackList={trackList} />
      <Video />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const trackList = await fetchTrackList('onMainPage_eq=true')

    return {
      props: {
        trackList,
      },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { trackList: null },
    }
  }
}

export default IndexPage
