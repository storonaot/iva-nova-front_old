import React, { FC, useCallback, useState } from 'react'
import { Video } from '../../api/types'
import MediaFullPreview from '../common/MediaFullPreview'

import SectionRoot from '../common/SectionRoot'
import Modal from '../common/Modal'
import ModalContentWrapper from '../common/Modal/ModalContentWrapper'

import bgImage from '../../static/images/bg3.png'
import Title from '../common/Title'
import Container from '../common/Container'
import Tabs from '../common/Tabs'
import Grid from '../common/Grid'
import { AspectRatio } from '../common/AspectRatioImage'
import Placeholder from '../common/Placeholder'

const tabs = [
  { id: 'all', label: 'Все видео' },
  { id: 'clips', label: 'Клипы' },
  { id: 'concerts', label: 'Концертные' },
  { id: 'ethers', label: 'Эфиры' },
  { id: 'other', label: 'Другое' },
]

interface Props {
  list?: Video[]
}

const Videos: FC<Props> = ({ list }) => {
  const [currentTab, setTab] = useState('all')

  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null)

  const onChangeTab = useCallback(tabId => {
    setTab(tabId)
  }, [])

  const showFull = (videoId: number) => {
    if (list) {
      const targetIndex = list.findIndex(video => video.id === videoId)
      const targetVideo = list[targetIndex]

      if (targetVideo != null) {
        setCurrentVideo(targetVideo)
        setCurrentVideoIndex(targetIndex)
      }
    }
  }

  return (
    <SectionRoot bgImage={bgImage} opacity={0.5}>
      {list?.length ? (
        <Container>
          <Title withMargin>Видео</Title>
          <Tabs tabs={tabs} activeTab={currentTab} onChange={onChangeTab} />
          <Grid>
            {list.map(video => {
              return (
                <MediaFullPreview
                  key={video.id}
                  text={video.title}
                  image={video.preview?.url || ''}
                  aspectRatio={AspectRatio['16:9']}
                  mode="video"
                  onClick={() => {
                    showFull(video.id)
                  }}
                />
              )
            })}
          </Grid>
          <Modal isOpened={!!currentVideo}>
            <ModalContentWrapper
              itemList={list}
              setCurrentIndex={setCurrentVideoIndex}
              setCurrentItem={setCurrentVideo}
              currentIndex={currentVideoIndex}
            >
              {currentVideo && (
                <iframe
                  width="560"
                  height="315"
                  src={currentVideo.src}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </ModalContentWrapper>
          </Modal>
        </Container>
      ) : (
        <Container>
          <Title withMargin>Видео</Title>
          <Placeholder sectionName="Видео" />
        </Container>
      )}
    </SectionRoot>
  )
}

export default Videos
