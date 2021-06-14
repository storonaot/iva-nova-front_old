import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import { fetchPhotoAlbums } from '../../src/api'

import Photos from '../../src/components/Photos'
import { PhotoAlbum } from '../../src/api/types'

interface Props {
  years: number[]
  photoAlbums: PhotoAlbum[]
  error?: string
}

const PhotosPage: FC<Props> = ({ photoAlbums, years, error }) => {
  return error ? <>{error}</> : <Photos years={years} photoAlbums={photoAlbums} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const photoAlbums = await fetchPhotoAlbums()

    const yearsSet = new Set()

    photoAlbums.forEach(item => {
      const fullYear = new Date(item.date).getFullYear()
      yearsSet.add(fullYear)
    })

    return {
      props: {
        photoAlbums,
        years: Array.from(yearsSet),
      },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { error: error.message },
    }
  }
}

export default PhotosPage
