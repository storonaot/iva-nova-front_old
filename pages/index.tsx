import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { files } from 'dropbox'
import Hero from '../src/components/Home/Hero'
import Schedule from '../src/components/Home/Schedule'
// import News from '../src/components/common/NewsSliderBlock'
import Music from '../src/components/Home/Music'
import Video from '../src/components/Home/Video'
import {
  fetchMediaLinks,
  fetchSocialNetworks,
  fetchVideos,
  fetchAbout,
  fetchEventList,
} from '../src/api'
import {
  EventItem,
  MediaLinks,
  About,
  Socials as SocialsType,
  Video as VideoType,
} from '../src/api/types'
import dbx from '../src/api/dbx'

interface Props {
  videos?: VideoType[]
  mediaLinks?: MediaLinks
  socialNetworks?: SocialsType
  audioLinks: files.GetTemporaryLinkResult[] | null
  about?: About | null
  events?: EventItem[]
  error?: string
}

const IndexPage: FC<Props> = ({
  mediaLinks,
  socialNetworks,
  about,
  events,
  error,
  audioLinks,
  videos,
}) => {
  return error ? (
    <>{error}</>
  ) : (
    <>
      <Hero mediaLinks={mediaLinks} socialNetworks={socialNetworks} about={about} />
      <Schedule events={events} />
      {/* <News /> */}
      <Music audioLinks={audioLinks} mediaLinks={mediaLinks} />
      <Video videos={videos} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const mediaLinks = await fetchMediaLinks()
    const socialNetworks = await fetchSocialNetworks()
    const about = await fetchAbout()
    const events = await fetchEventList(`date_gt=${Date.now()}&_limit=10`)
    const musicFiles = await (await dbx.filesListFolder({ path: '/music/homepage' })).result
    const videos = await fetchVideos(`_limit=3`)

    const audioLinks = await Promise.all(
      musicFiles.entries.map(file => {
        return dbx.filesGetTemporaryLink({ path: file.path_lower as string })
      }),
    ).then(res => {
      return res.map(i => i.result)
    })

    return {
      props: {
        mediaLinks,
        socialNetworks,
        about,
        events,
        audioLinks: audioLinks || null,
        videos,
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
