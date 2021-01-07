import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { fetchAlbums } from '../../src/api'
import { Album } from '../../src/api/types'
import Layout from '../../src/components/Layout'
import Music from '../../src/components/Music'

interface Props {
  list: Album[]
}

const MusicPage: FC<Props> = ({ list }) => (
  <Layout>
    <Music list={list} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchAlbums()

    return {
      props: { list: data },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { list: [] },
    }
  }
}

export default MusicPage
