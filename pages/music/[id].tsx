import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import MusicAlbumItem from '../../src/components/MusicAlbumItem'
import MusicAlbumsSliderBlock from '../../src/components/common/MusicAlbumsSliderBlock'
import { fetchAlbum, fetchAlbumList } from '../../src/api'
import { Album } from '../../src/api/types'

interface Props {
  item: Album
  list: Album[]
}

const MusicAlbumItemPage: FC<Props> = ({ item, list }) => (
  <>
    <MusicAlbumItem item={item} />
    <MusicAlbumsSliderBlock list={list} />
  </>
)

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query

  if (id == null) throw new Error('')

  try {
    const item = await fetchAlbum(id)
    const list = await fetchAlbumList()

    return { props: { item, list: list.filter(item => item.id.toString() !== id).slice(0, 3) } }
  } catch (err) {
    return { props: { item: null, list: [] } }
  }
}

export default MusicAlbumItemPage
