import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { chunk, flatten } from 'lodash'

import { files } from 'dropbox'
import PhotoAlbum from '../../src/components/PhotoAlbum'
import { fetchPhotoAlbum } from '../../src/api'
import { PhotoAlbum as PhotoAlbumType } from '../../src/api/types'

import dbx from '../../src/api/dbx'

interface Props {
  photoAlbum: PhotoAlbumType
  error?: string
  photoLinks: files.GetTemporaryLinkResult[] | null
  photoThumbs: files.GetThumbnailBatchResultEntrySuccess[] | null
}

const PhotoAlbumPage: FC<Props> = ({ photoAlbum, error, photoLinks, photoThumbs }) => {
  return error ? (
    <>{error}</>
  ) : (
    <PhotoAlbum photoLinks={photoLinks} photoThumbs={photoThumbs} photoAlbum={photoAlbum} />
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query
  if (id == null) throw new Error('')

  try {
    const photoAlbum = await fetchPhotoAlbum(id)

    let photoLinks = null
    let photoThumbs = null

    if (photoAlbum.dropbox_src) {
      const photoFiles = await (await dbx.filesListFolder({ path: `/${photoAlbum.dropbox_src}` }))
        .result

      photoLinks = await Promise.all(
        photoFiles.entries.map(file => {
          return dbx.filesGetTemporaryLink({ path: file.path_lower as string })
        }),
      ).then(res => {
        return Object.values(res).map(i => i.result)
      })

      const filePaths = photoFiles.entries.map(file => ({
        path: file.path_lower,
      }))

      const pathsChunks = chunk(filePaths, 25)

      photoThumbs = await Promise.all(
        pathsChunks.map(pathsChank => {
          return dbx.filesGetThumbnailBatch(({ entries: pathsChank } as unknown) as {
            entries: files.ThumbnailArg[]
          })
        }),
      ).then(res => {
        return Object.values(res).map(i => i.result.entries)
      })

      if (Array.isArray(photoThumbs)) {
        photoThumbs = flatten(photoThumbs) as files.GetThumbnailBatchResultEntrySuccess[]
      } else {
        photoThumbs = []
      }
    }

    return {
      props: {
        photoAlbum,
        photoLinks,
        photoThumbs,
      },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { error: error.message },
    }
  }
}

export default PhotoAlbumPage
