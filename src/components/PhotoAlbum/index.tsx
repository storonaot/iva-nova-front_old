import React, { FC, useCallback, useMemo, useState } from 'react'
import { files } from 'dropbox'
import ReactDOM from 'react-dom'
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

const Modal = ({ isOpened, children }) => {
  let container
  if (typeof window !== 'undefined') {
    const rootContainer = document.createElement('div')
    const parentElem = document.querySelector('#__next')
    if (parentElem) parentElem.appendChild(rootContainer)
    container = rootContainer
  }
  // const isShown = props.show ? '': ''
  const element = (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000000b3',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  )

  return container && isOpened ? ReactDOM.createPortal(element, container) : null
}

interface Props {
  photoAlbum: PhotoAlbumType
  photos: files.GetTemporaryLinkResult[] | null
}

const PhotoAlbum: FC<Props> = ({ photos, photoAlbum }) => {
  const [currentPhoto, setCurrentPhoto] = useState(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(null)

  const showFull = useCallback(id => {
    const targetIndex = photos?.findIndex(photo => photo.metadata.id === id)
    const targetPhoto = photos[targetIndex]

    setCurrentPhoto(targetPhoto)
    setCurrentPhotoIndex(targetIndex)
  }, [])

  const goPrev = useCallback(() => {
    if (currentPhotoIndex != null && currentPhotoIndex > 0) {
      const newIndex = currentPhotoIndex - 1
      setCurrentPhotoIndex(currentPhotoIndex - 1)
      setCurrentPhoto(photos[newIndex])
    }
  }, [currentPhotoIndex, currentPhoto])

  const goNext = useCallback(() => {
    if (currentPhotoIndex != null && currentPhotoIndex < photos?.length - 1) {
      const newIndex = currentPhotoIndex + 1

      setCurrentPhotoIndex(newIndex)
      setCurrentPhoto(photos[newIndex])
    }
  }, [currentPhotoIndex, currentPhoto])

  const resetCurrentPhoto = useCallback(() => {
    setCurrentPhotoIndex(null)
    setCurrentPhoto(null)
  }, [currentPhotoIndex, currentPhoto])

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
      <Modal isOpened={currentPhoto}>
        <button
          onClick={resetCurrentPhoto}
          style={{
            position: 'absolute',
            right: 50,
            top: 50,
          }}
        >
          close
        </button>
        <button
          disabled={currentPhotoIndex === 0}
          onClick={goPrev}
          style={{
            position: 'absolute',
            left: '40px',
          }}
        >
          prev
        </button>
        {currentPhoto && (
          <img
            style={{
              maxWidth: '80vw',
              maxHeight: '80vh',
            }}
            src={currentPhoto.link}
          />
        )}
        <button
          disabled={currentPhotoIndex === photos.length - 1}
          onClick={goNext}
          style={{
            position: 'absolute',
            right: '40px',
          }}
        >
          next
        </button>
      </Modal>
    </SectionRoot>
  )
}

export default PhotoAlbum
