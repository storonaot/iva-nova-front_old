import React, { FC } from 'react'
import { Video } from '../../api/types'

import Modal from '../common/Modal'
import ModalContentWrapper from '../common/Modal/ModalContentWrapper'

interface Props {
  currentVideo: Video | null
  list?: Video[]
  setCurrentVideoIndex: (index: number | null) => void
  setCurrentVideo: (video: Video | null) => void
  currentVideoIndex: number | null
}

const VideoModal: FC<Props> = ({
  currentVideo,
  list = [],
  setCurrentVideoIndex,
  setCurrentVideo,
  currentVideoIndex,
}) => {
  return (
    <Modal isOpened={!!currentVideo}>
      <ModalContentWrapper
        itemList={list}
        setCurrentIndex={setCurrentVideoIndex}
        setCurrentItem={setCurrentVideo}
        currentIndex={currentVideoIndex}
      >
        {currentVideo && (
          <div style={{ position: 'relative', width: '70vw', paddingBottom: '56.25%' }}>
            {currentVideo.src}
            <iframe
              style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
              src={`${currentVideo.src}?autoplay=1`}
              title={currentVideo.title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
      </ModalContentWrapper>
    </Modal>
  )
}

export default VideoModal
