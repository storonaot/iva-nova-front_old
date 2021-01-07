import React from 'react'
import Layout from '../../src/components/Layout'
import Music from '../../src/components/Music'

import { getAlbums } from '../../src/data-access/store/slices/albums'
import { wrapper } from '../../src/data-access/store'

const MusicPage = () => (
  <Layout>
    <Music />
  </Layout>
)

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(getAlbums())
  // await store.sagaTask.toPromise()
})

export default MusicPage
