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

import { TrackItem, MediaLink } from '../../../api/types'

import { HubaImageContainer, Container, LeftBlock, RightBlock, TracksWrapper } from './styles'

interface Props {
  trackList: TrackItem[] | null
  mediaLinkList: MediaLink[]
}

const Music: FC<Props> = ({ trackList, mediaLinkList }) =>
  trackList ? (
    <SectionRoot bgImage={bgImage}>
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
            {mediaLinkList.map(mediaLink => {
              if (mediaLink.type === 'iTunes') return <ITunesButton href={mediaLink.link} />
              if (mediaLink.type === 'yaMusic') return <YaMusicButton href={mediaLink.link} />

              return null
            })}
          </SubscriptionsWrapper>
        </RightBlock>
      </Container>
      <HubaImageContainer />
    </SectionRoot>
  ) : null

export default Music
