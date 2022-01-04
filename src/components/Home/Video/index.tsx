import React from 'react'
import { VIDEOS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import ShowOn from '../../common/ShowOn'
import Button from '../../common/Button'
import SectionRoot from '../../common/SectionRoot'
// import bgImage from '../../../static/images/bg1.jpg'
import bgImage from '../../../static/images/bg2.jpg'
import Slider from '../../common/Slider'

import videos from './data'
import MediaFullPreview from '../../common/MediaFullPreview'
import { AspectRatio } from '../../common/AspectRatioImage'

interface VideoItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  description: string
}

const Video = () => {
  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Heading title="Последние видео" btnTitle="все видео" btnHref={VIDEOS_URL} />
        <Slider>
          {videos.map((item: VideoItem) => (
            <MediaFullPreview
              key={item.id}
              mode="video"
              aspectRatio={AspectRatio['16:9']}
              text={item.description}
              image={item.image}
            />
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
