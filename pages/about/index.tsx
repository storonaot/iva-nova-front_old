import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { fetchAbout, fetchMembers } from '../../src/api'
import { About, Member } from '../../src/api/types'
import AboutComponent from '../../src/components/About'

interface Props {
  about: About | null
  memberList: Member[]
}

const AboutPage: FC<Props> = ({ about, memberList }) => {
  return about ? (
    <AboutComponent about={about} memberList={memberList} />
  ) : (
    <>Данный раздел сайта не заполнен</>
  )
}

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
        about: null,
        memberList: null,
      },
    }
  }
}

export default AboutPage
