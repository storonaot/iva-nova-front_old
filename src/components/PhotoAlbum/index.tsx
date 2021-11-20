import React, { FC, useCallback, useState } from 'react'
import { files } from 'dropbox'
import Title from '../common/Title'
import Link from '../common/Link'

import { PHOTOS_URL } from '../../constants/sources'
import Container from '../common/Container'
import bgImage from '../../static/images/bg4.png'
import SectionRoot from '../common/SectionRoot'

import { MainHeading, Description } from './styles'
import Grid from '../common/Grid'
import { PhotoAlbum as PhotoAlbumType } from '../../api/types'

import AspectRatioImage, { AspectRatio } from '../common/AspectRatioImage'
import Modal from '../common/Modal'

import ModalContentWrapper from '../common/Modal/ModalContentWrapper'

interface Props {
  photoAlbum: PhotoAlbumType
  photos: files.GetTemporaryLinkResult[] | null
}

const PhotoAlbum: FC<Props> = ({ photos, photoAlbum }) => {
  const [currentPhoto, setCurrentPhoto] = useState<files.GetTemporaryLinkResult | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null)

  const showFull = useCallback(id => {
    if (photos) {
      const targetIndex = photos.findIndex(photo => photo.metadata.id === id)
      const targetPhoto = photos[targetIndex]

      if (targetPhoto != null) {
        setCurrentPhoto(targetPhoto)
        setCurrentPhotoIndex(targetIndex)
      }
    }
  }, [])

  return (
    <SectionRoot bgImage={bgImage} opacity={0.5}>
      <Container>
        <MainHeading>
          <Title isUpCase>{photoAlbum.title}</Title>
          <Link href={`${PHOTOS_URL}`}>Все альбомы</Link>
        </MainHeading>
        {photoAlbum.description && <Description>{photoAlbum.description}</Description>}
        {photos && (
          <Grid gridSize={4}>
            {photos.map(photo => {
              return (
                <div
                  key={photo.metadata.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    showFull(photo.metadata.id)
                  }}
                  onKeyPress={() => {}}
                  tabIndex={0}
                  role="button"
                >
                  <AspectRatioImage imageUrl={photo.link} aspectRatio={AspectRatio['1:1']} />
                </div>
              )
            })}
          </Grid>
        )}
      </Container>
      <Modal isOpened={!!currentPhoto}>
        <ModalContentWrapper
          itemList={photos}
          setCurrentIndex={setCurrentPhotoIndex}
          setCurrentItem={setCurrentPhoto}
          currentIndex={currentPhotoIndex}
        >
          {currentPhoto && (
            <img
              alt="alt"
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
              }}
              src={currentPhoto.link}
            />
          )}
        </ModalContentWrapper>
      </Modal>
    </SectionRoot>
  )
}

export default PhotoAlbum

// import React, { FC, useCallback, useState, useMemo } from 'react'
// import { files } from 'dropbox'
// import Title from '../common/Title'
// import Link from '../common/Link'

// import { PHOTOS_URL } from '../../constants/sources'
// import Container from '../common/Container'
// import bgImage from '../../static/images/bg4.png'
// import SectionRoot from '../common/SectionRoot'

// import { MainHeading, Description, SpinnerWrapper } from './styles'
// import Grid from '../common/Grid'
// import { PhotoAlbum as PhotoAlbumType } from '../../api/types'

// import AspectRatioImage, { AspectRatio } from '../common/AspectRatioImage'
// import Modal from '../common/Modal'

// import ModalContentWrapper from '../common/Modal/ModalContentWrapper'
// import dbx from '../../api/dbx'
// import Spinner from './Spinner'

// interface Props {
//   photoAlbum: PhotoAlbumType
//   photos: files.GetThumbnailBatchResultEntrySuccess[] | null
// }

// const PhotoAlbum: FC<Props> = ({ photos, photoAlbum }) => {
//   const [currentPhoto, setCurrentPhoto] = useState<files.GetTemporaryLinkResult | null>(null)
//   const [dataIsFetching, setDataIsFetching] = useState(false)
//   const [imageLoaded, setImageLoaded] = useState(false)

//   console.log('photos', photos)

//   // const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null)

//   const showFull = useCallback(
//     async path => {
//       setDataIsFetching(true)
//       setImageLoaded(false)

//       const result = await (await dbx.filesGetTemporaryLink({ path })).result

//       setCurrentPhoto(result)
//       setDataIsFetching(false)
//     },
//     [setDataIsFetching, setImageLoaded, setCurrentPhoto, setDataIsFetching],
//   )

//   const thumbnails = useMemo(() => {
//     if (photos == null) return []

//     return photos.map((photo, index) => {
//       return {
//         id: index,
//         src: `data:image/jpeg;base64, ${photo.thumbnail}`,
//         path: photo.metadata.path_lower,
//       }
//     })
//   }, [photos])

//   return (
//     <SectionRoot bgImage={bgImage} opacity={0.5}>
//       <Container>
//         <MainHeading>
//           <Title isUpCase>{photoAlbum.title}</Title>
//           <Link href={`${PHOTOS_URL}`}>Все альбомы</Link>
//         </MainHeading>
//         {photoAlbum.description && <Description>{photoAlbum.description}</Description>}
//         {photos && (
//           <Grid gridSize={4}>
//             {thumbnails.map(photo => {
//               return (
//                 <div
//                   key={photo.id}
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => {
//                     showFull(photo.path)
//                   }}
//                   onKeyPress={() => {}}
//                   tabIndex={0}
//                   role="button"
//                 >
//                   <AspectRatioImage imageUrl={photo.src} aspectRatio={AspectRatio['1:1']} />
//                 </div>
//               )
//             })}
//           </Grid>
//         )}
//       </Container>
//       <Modal isOpened={!!currentPhoto || dataIsFetching}>
//         <ModalContentWrapper
//           itemList={[]}
//           setCurrentIndex={() => {}}
//           setCurrentItem={setCurrentPhoto}
//           currentIndex={0}
//         >
//           {/* <SpinnerWrapper isHidden={!imageLoaded || dataIsFetching}>
//             <Spinner />
//           </SpinnerWrapper> */}
//           {currentPhoto ? (
//             <img
//               alt="alt"
//               style={{
//                 maxWidth: '80vw',
//                 maxHeight: '80vh',
//               }}
//               src={currentPhoto.link}
//               onLoad={() => {
//                 setImageLoaded(true)
//               }}
//             />
//           ) : null}
//         </ModalContentWrapper>
//       </Modal>
//     </SectionRoot>
//   )
// }

// export default PhotoAlbum
