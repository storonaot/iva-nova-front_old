import React from 'react'
import { VIDEOS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import SectionRoot from '../../common/SectionRoot'
import bgImage from '../../../static/images/bg1.jpg'
import Slider from '../../common/Slider'
import { PreviewItem } from '../../common/Preview'
import VideoPreview from '../../common/VideoPreview'

import { ImageWrapper, Description, Card } from './styles'

import videos from './data'

interface VideoItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  description: string
}

const Video = () => {
  const length = videos.length

  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Heading title="Последние видео" btnTitle="все видео" btnHref={VIDEOS_URL} />
        <Slider length={length}>
          {videos.map((item: VideoItem) => (
            <PreviewItem key={item.id}>
              <Card padding="small">
                <ImageWrapper>
                  <VideoPreview image={item.image} aspectRatio="16:9" />
                </ImageWrapper>
                <Description>{item.description}</Description>
              </Card>
            </PreviewItem>
          ))}
        </Slider>
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
