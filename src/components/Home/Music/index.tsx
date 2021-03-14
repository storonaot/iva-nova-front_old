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

import Track from '../../common/Track'

import bgImage from '../../../static/images/bg2.jpg'

import { TrackItem } from '../../../api/types'

import { HubaImageContainer, Container, LeftBlock, RightBlock, TracksWrapper } from './styles'

interface Props {
  trackList: TrackItem[] | null
}

const Music: FC<Props> = ({ trackList }) =>
  trackList ? (
    <SectionRoot bgImage={bgImage} bgRepeat={false}>
      <Container>
        <LeftBlock>
          <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
          <TracksWrapper>
            {trackList.map((track: TrackItem) => (
              <Track key={track.id} track={track} />
            ))}
          </TracksWrapper>
          <ShowOn mobile>
            <Button href={MUSIC_URL} isBlock>
              вся музыка
            </Button>
          </ShowOn>
        </LeftBlock>
        <RightBlock>
          <SubscribeTitle>Слушайте и скачивайте!</SubscribeTitle>
          <SubscriptionsWrapper orientation="vertical">
            <ITunesButton href="/" />
            <YaMusicButton href="/" />
          </SubscriptionsWrapper>
        </RightBlock>
      </Container>
      <HubaImageContainer />
    </SectionRoot>
  ) : null

export default Music
