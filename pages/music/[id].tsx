import React from 'react'
import Layout from '../../src/components/Layout'
import AlbumItem from '../../src/components/AlbumItem'
import AlbumsSliderBlock from '../../src/components/common/AlbumsSliderBlock'

const AlbumItemPage = () => {
  return (
    <Layout>
      <AlbumItem />
      <AlbumsSliderBlock />
    </Layout>
  )
}

export default AlbumItemPage
