import React, { FC } from 'react'
import { VIDEOS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import SectionRoot from '../../common/SectionRoot'
// import bgImage from '../../../static/images/bg1.jpg'
import bgImage from '../../../static/images/bg2.jpg'
import Slider from '../../common/Slider'

import MediaFullPreview from '../../common/MediaFullPreview'
import { AspectRatio } from '../../common/AspectRatioImage'

import { Video as VideoType } from '../../../api/types'
import VideoModal from '../../Videos/VideoModal'
import useShowVideo from '../../Videos/useShowVideo'

interface Props {
  videos?: VideoType[]
}

const Video: FC<Props> = ({ videos }) => {
  const {
    currentVideo,
    setCurrentVideo,
    currentVideoIndex,
    setCurrentVideoIndex,
    showFull,
  } = useShowVideo(videos || [])

  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Heading title="Последние видео" btnTitle="все видео" btnHref={VIDEOS_URL} />
        <Slider>
          {videos != null &&
            videos.map(video => {
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
        </Slider>
        <VideoModal
          currentVideo={currentVideo}
          list={videos}
          setCurrentVideoIndex={setCurrentVideoIndex}
          setCurrentVideo={setCurrentVideo}
          currentVideoIndex={currentVideoIndex}
        />
        <ShowOn mobile>
          <Button href={VIDEOS_URL} isBlock>
            все видео
          </Button>
        </ShowOn>
      </Container>
    </SectionRoot>
  )
}

export default Video
