import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { fetchAlbumList } from '../../src/api'
import { Album } from '../../src/api/types'
import Music from '../../src/components/Music'

interface Props {
  list?: Album[]
  error?: string
}

const MusicPage: FC<Props> = ({ list, error }) => (error ? <>{error}</> : <Music list={list} />)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchAlbumList('_sort=date:DESC')

    return {
      props: { list: data },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { error: err.message },
    }
  }
}

export default MusicPage
