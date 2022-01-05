import { GetServerSideProps } from 'next'
import React, { FC } from 'react'
import { fetchVideos } from '../../src/api'
import { Video } from '../../src/api/types'

import Videos from '../../src/components/Videos'

interface Props {
  videos?: Video[]
  error?: string
}

const VideosPage: FC<Props> = ({ videos, error }) =>
  error ? <>{error}</> : <Videos list={videos} />

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const videos = await fetchVideos()

    return {
      props: {
        videos: videos.slice(0, 3),
      },
    }
  } catch (error) {
    console.error('error', error.message)
    return {
      props: { error: error.message },
    }
  }
}

export default VideosPage
