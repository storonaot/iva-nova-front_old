import React from 'react'

import Layout from '../../src/components/Layout'
import Music from '../../src/components/Music'
import axios from '../../src/data-access/axios'

const MusicPage = () => {
  return (
    <Layout>
      <Music />
    </Layout>
  )
}

MusicPage.getInitialProps = async () => {
  try {
    const res = await axios.get('/albums')

    const albums = res.data
    return { albums }
  } catch (error) {
    return { error }
  }
}

export default MusicPage
