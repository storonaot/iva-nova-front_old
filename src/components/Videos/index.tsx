import React, { FC, useCallback, useState } from 'react'
import { Video } from '../../api/types'
import MediaFullPreview from '../common/MediaFullPreview'

import SectionRoot from '../common/SectionRoot'

import bgImage from '../../static/images/bg3.png'
import Title from '../common/Title'
import Container from '../common/Container'
import Tabs from '../common/Tabs'
import Grid from '../common/Grid'
import { AspectRatio } from '../common/AspectRatioImage'
import Placeholder from '../common/Placeholder'
import VideoModal from './VideoModal'
import useShowVideo from './useShowVideo'

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

  const filteredList =
    currentTab === 'all' ? list : list?.filter(video => video.type === currentTab)

  const {
    currentVideo,
    setCurrentVideo,
    currentVideoIndex,
    setCurrentVideoIndex,
    showFull,
  } = useShowVideo(filteredList)

  const onChangeTab = useCallback(tabId => {
    setTab(tabId)
  }, [])

  return (
    <SectionRoot bgImage={bgImage} opacity={0.5}>
      {list?.length ? (
        <Container>
          <Title withMargin>Видео</Title>
          <Tabs tabs={tabs} activeTab={currentTab} onChange={onChangeTab} />
          <Grid>
            {filteredList != null &&
              filteredList.map(video => {
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
          <VideoModal
            currentVideo={currentVideo}
            list={filteredList}
            setCurrentVideoIndex={setCurrentVideoIndex}
            setCurrentVideo={setCurrentVideo}
            currentVideoIndex={currentVideoIndex}
          />
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
