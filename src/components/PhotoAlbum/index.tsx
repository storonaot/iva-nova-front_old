import React, { FC, useCallback, useState, useMemo, useEffect } from 'react'
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
  photoLinks: files.GetTemporaryLinkResult[] | null
  photoThumbs: files.GetThumbnailBatchResultEntrySuccess[] | null
}

const ProgressiveImage: FC<{ thumb: string; original: string; onClick: () => void }> = ({
  thumb,
  original,
  onClick,
}) => {
  const [imageIsReady, setImageIsReady] = useState(false)

  useEffect(() => {
    const buffer = new Image()
    buffer.onload = () => {
      setImageIsReady(true)
    }
    buffer.src = original
  }, [])

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      onKeyPress={() => {}}
      tabIndex={0}
      role="button"
    >
      {imageIsReady ? (
        <AspectRatioImage imageUrl={original} aspectRatio={AspectRatio['1:1']} />
      ) : (
        <AspectRatioImage imageUrl={thumb} aspectRatio={AspectRatio['1:1']} />
      )}
    </div>
  )
}

interface PhotoInt {
  id: number
  thumb: string
  original: string
  path?: string
}

const PhotoAlbum: FC<Props> = ({ photoThumbs, photoAlbum, photoLinks }) => {
  const [currentPhoto, setCurrentPhoto] = useState<PhotoInt | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null)

  const photoLinksMap = useMemo(() => {
    if (!photoLinks) return null

    return photoLinks.reduce((acc, current) => {
      return { ...acc, [current.metadata.id]: current }
    }, {})
  }, [photoLinks])

  const showFull = useCallback(
    (photo: PhotoInt) => {
      setCurrentPhoto(photo)
    },
    [setCurrentPhoto],
  )

  const photos: Array<PhotoInt> = useMemo(() => {
    if (photoThumbs == null) return []

    return photoThumbs.map((photo, index) => {
      return {
        id: index,
        thumb: `data:image/jpeg;base64, ${photo.thumbnail}`,
        original: photoLinksMap[photo.metadata.id].link,
        path: photo.metadata.path_lower,
      }
    })
  }, [photoThumbs])

  if (photoLinksMap == null) return null

  return (
    <SectionRoot bgImage={bgImage} opacity={0.5} bgRepeat="x">
      <Container>
        <MainHeading>
          <Title isUpCase>{photoAlbum.title}</Title>
          <Link href={`${PHOTOS_URL}`}>Все альбомы</Link>
        </MainHeading>
        {photoAlbum.description && <Description>{photoAlbum.description}</Description>}
        {photoThumbs && (
          <Grid gridSize={4}>
            {photos.map((photo, index) => {
              return (
                <ProgressiveImage
                  key={photo.id}
                  thumb={photo.thumb}
                  original={photo.original}
                  onClick={() => {
                    setCurrentPhotoIndex(index)
                    showFull(photo)
                  }}
                />
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
          {currentPhoto ? (
            <img
              alt="alt"
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
              }}
              src={currentPhoto.original}
            />
          ) : null}
        </ModalContentWrapper>
      </Modal>
    </SectionRoot>
  )
}

export default PhotoAlbum
