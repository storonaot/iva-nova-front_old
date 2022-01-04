import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
// import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'
import { fetchMediaLinks, fetchSocialNetworks, fetchAbout, fetchEventList } from '../src/api'
import { EventItem, MediaLinks, About, Socials as SocialsType } from '../src/api/types'

interface Props {
  mediaLinks?: MediaLinks
  socialNetworks?: SocialsType
  about?: About | null
  events?: EventItem[]
  error?: string
}

const IndexPage: FC<Props> = ({ mediaLinks, socialNetworks, about, events, error }) => {
  return error ? (
    <>{error}</>
  ) : (
    <>
      <Hero mediaLinks={mediaLinks} socialNetworks={socialNetworks} about={about} />
      <Schedule events={events} />
      {/* <News /> */}
      <Music trackList={[]} mediaLinks={mediaLinks} />
      <Video />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const mediaLinks = await fetchMediaLinks()
    const socialNetworks = await fetchSocialNetworks()
    const about = await fetchAbout()
    const events = await fetchEventList(`date_gt=${Date.now()}&_limit=10`)

    return {
      props: {
        mediaLinks,
        socialNetworks,
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
