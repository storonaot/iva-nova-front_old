import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'
import { fetchMediaLinkList, fetchSocialNetworkList, fetchAbout, fetchEventList } from '../src/api'
import { TrackItem, EventItem, MediaLink, SocialNetworkItem, About } from '../src/api/types'

interface Props {
  trackList?: TrackItem[]
  mediaLinkList?: MediaLink[]
  socialNetworkList?: SocialNetworkItem[]
  about?: About | null
  events?: EventItem[]
  error?: string
}

const IndexPage: FC<Props> = ({
  trackList,
  mediaLinkList,
  socialNetworkList,
  about,
  events,
  error,
}) => {
  return error ? (
    <>{error}</>
  ) : (
    <>
      <Hero mediaLinkList={mediaLinkList} socialNetworkList={socialNetworkList} about={about} />
      <Schedule events={events} />
      <News />
      <Music trackList={trackList} mediaLinkList={mediaLinkList} />
      <Video />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const mediaLinkList = await fetchMediaLinkList()
    const socialNetworkList = await fetchSocialNetworkList()
    const about = await fetchAbout()
    const events = await fetchEventList(`date_gt=${Date.now()}&_limit=10`)

    return {
      props: {
        mediaLinkList,
        socialNetworkList,
        about,
        events,
      },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: {
        error: error.message,
      },
    }
  }
}

export default IndexPage
