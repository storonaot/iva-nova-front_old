import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { files } from 'dropbox'
import MusicAlbumItem from '../../src/components/MusicAlbumItem'
import MusicAlbumsSliderBlock from '../../src/components/common/MusicAlbumsSliderBlock'
import { fetchAlbum, fetchAlbumList } from '../../src/api'
import { Album } from '../../src/api/types'
import dbx from '../../src/api/dbx'

interface Props {
  item?: Album
  list?: Album[]
  error?: string
  audioLinks: files.GetTemporaryLinkResult[] | null
}

const MusicAlbumItemPage: FC<Props> = ({ item, list, error, audioLinks }) =>
  error ? (
    <>{error}</>
  ) : (
    <>
      <MusicAlbumItem item={item} audioLinks={audioLinks} />
      <MusicAlbumsSliderBlock list={list} />
    </>
  )

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query

  if (id == null) throw new Error('')

  try {
    const item = await fetchAlbum(id)
    const list = await fetchAlbumList()

    let audioLinks = null

    if (item.dropbox_src) {
      const musicFiles = await (await dbx.filesListFolder({ path: item.dropbox_src })).result
      audioLinks = await Promise.all(
        musicFiles.entries.map(file => {
          return dbx.filesGetTemporaryLink({ path: file.path_lower as string })
        }),
      ).then(res => {
        return res.map(i => i.result)
      })
    }

    return {
      props: { item, list: list.filter(item => item.id.toString() !== id).slice(0, 3), audioLinks },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { error: err.message },
    }
  }
}

export default MusicAlbumItemPage
