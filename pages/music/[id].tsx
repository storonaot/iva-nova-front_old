import React from 'react'
import Layout from '../../src/components/Layout'
import MusicAlbumItem from '../../src/components/MusicAlbumItem'
import MusicAlbumsSliderBlock from '../../src/components/common/MusicAlbumsSliderBlock'

const MusicAlbumItemPage = () => {
  return (
    <Layout>
      <MusicAlbumItem />
      <MusicAlbumsSliderBlock />
    </Layout>
  )
}

export default MusicAlbumItemPage
