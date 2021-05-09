import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { fetchAbout, fetchMembers } from '../../src/api'
import { About, Member } from '../../src/api/types'
import AboutComponent from '../../src/components/About'

interface Props {
  about?: About | null
  memberList?: Member[]
  error?: string
}

const AboutPage: FC<Props> = ({ about, memberList, error }) =>
  error ? <>{error}</> : <AboutComponent about={about} memberList={memberList} />

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const about = await fetchAbout()
    const memberList = await fetchMembers()

    return {
      props: {
        about,
        memberList,
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

export default AboutPage
