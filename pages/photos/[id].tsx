import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import { files } from 'dropbox'
import PhotoAlbum from '../../src/components/PhotoAlbum'
import { fetchPhotoAlbum } from '../../src/api'
import { PhotoAlbum as PhotoAlbumType } from '../../src/api/types'

import dbx from '../../src/api/dbx'

interface Props {
  photoAlbum: PhotoAlbumType
  error?: string
  photos: files.GetTemporaryLinkResult[] | null
}

const PhotoAlbumPage: FC<Props> = ({ photoAlbum, error, photos }) => {
  return error ? <>{error}</> : <PhotoAlbum photos={photos} photoAlbum={photoAlbum} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query
  if (id == null) throw new Error('')

  try {
    const photoAlbum = await fetchPhotoAlbum(id)

    let photoLinks = null

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
    }

    return {
      props: {
        photoAlbum,
        photos: photoLinks,
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

// import React, { FC } from 'react'
// import { GetServerSideProps } from 'next'

// import { files } from 'dropbox'
// import PhotoAlbum from '../../src/components/PhotoAlbum'
// import { fetchPhotoAlbum } from '../../src/api'
// import { PhotoAlbum as PhotoAlbumType } from '../../src/api/types'

// import dbx from '../../src/api/dbx'

// interface Props {
//   photoAlbum: PhotoAlbumType
//   error?: string
//   photos: files.GetThumbnailBatchResultEntrySuccess[] | null
// }

// const PhotoAlbumPage: FC<Props> = ({ photoAlbum, error, photos }) => {
//   return error ? <>{error}</> : <PhotoAlbum photos={photos} photoAlbum={photoAlbum} />
// }

// export const getServerSideProps: GetServerSideProps = async context => {
//   const { id } = context.query
//   if (id == null) throw new Error('')

//   try {
//     const photoAlbum = await fetchPhotoAlbum(id)

//     let photoLinksThumbs = null
//     const photoLinks = null
//     let photos = null

//     if (photoAlbum.dropbox_src) {
//       const photoFiles = await (await dbx.filesListFolder({ path: `/${photoAlbum.dropbox_src}` }))
//         .result

//       const photoThumbs = await (await dbx.filesListFolder({ path: `/${photoAlbum.dropbox_src}` }))
//         .result

//       const filePaths = photoThumbs.entries.map(file => ({
//         path: file.path_display as string,
//         size: 'w256h256',
//       }))

//       photoLinksThumbs = await (await dbx.filesGetThumbnailBatch({ entries: filePaths })).result
//         .entries

//       photoLinks = await Promise.all(
//         photoFiles.entries.map(file => {
//           return dbx.filesGetTemporaryLink({ path: file.path_lower as string })
//         }),
//       ).then(res => {
//         return Object.values(res)
//           .map(i => i.result)
//           .reduce((acc, current) => {
//             return { ...acc, [current.metadata.id]: current }
//           }, {})
//       })

//       photos = photoLinksThumbs.map((item, index) => {
//         return {
//           ...item,
//           link: photoLinks != null ? photoLinks[item.metadata.id].link : null,
//         }
//       })
//     }

//     return {
//       props: {
//         photoAlbum,
//         photos,
//       },
//     }
//   } catch (error) {
//     console.error('error', error.message)

//     return {
//       props: { error: error.message },
//     }
//   }
// }

// export default PhotoAlbumPage
