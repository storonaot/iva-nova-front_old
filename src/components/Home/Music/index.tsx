import React, { FC } from 'react'

import { MUSIC_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import SectionRoot from '../../common/SectionRoot'
import Button from '../../common/Button'
import ShowOn from '../../common/ShowOn'
import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../../common/Subscriptions'

// import Track from '../../common/Track'
import Placeholder from '../../common/Placeholder'

// import bgImage from '../../../static/images/bg2.jpg'
import bgImage from '../../../static/images/bg1.jpg'

import { TrackItem, MediaLinks } from '../../../api/types'

import { HubaImageContainer, Container, LeftBlock, RightBlock } from './styles'

interface Props {
  trackList?: TrackItem[]
  mediaLinks?: MediaLinks
}

const Music: FC<Props> = ({ trackList, mediaLinks }) => (
  <SectionRoot bgImage={bgImage}>
    {trackList?.length ? (
      <Container>
        <LeftBlock>
          <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
          {/* <TracksWrapper>
            {trackList.map((track: TrackItem) => (
              <Track key={track.id} track={track} />
            ))}
          </TracksWrapper> */}
          <ShowOn mobile>
            <Button href={MUSIC_URL} isBlock>
              вся музыка
            </Button>
          </ShowOn>
        </LeftBlock>
        {mediaLinks ? (
          <RightBlock>
            <SubscribeTitle>Слушайте и скачивайте!</SubscribeTitle>
            <SubscriptionsWrapper orientation="vertical">
              <ITunesButton href={mediaLinks.itunes_src} />
              <YaMusicButton href={mediaLinks.ya_music_src} />
            </SubscriptionsWrapper>
          </RightBlock>
        ) : null}
      </Container>
    ) : (
      <Container>
        <Placeholder sectionName="Музыка" />
      </Container>
    )}
    <HubaImageContainer />
  </SectionRoot>
)

export default Music
