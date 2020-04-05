import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { MUSIC_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import ContainerComp from '../../common/Container'
import SectionRoot from '../../common/SectionRoot'
import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../../common/Subscriptions'

import Track, { TrackProps } from '../../common/Track'

import bgImage from '../../../static/images/bg2.jpg'

import tracks from './data'

const Container = styled(ContainerComp)`
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

const LeftBlock = styled.div`
  ${media.greaterThan('medium')`
    min-width: 60%; margin-right: 58px;
  `}
`

const RightBlock = styled.div`
  ${media.greaterThan('medium')`
    min-width: calc(40% - 58px);
    text-align: center;
  `}
`

const Music = () => (
  <SectionRoot bgImage={bgImage}>
    <Container>
      <LeftBlock>
        <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
        {tracks.map((track: TrackProps) => (
          <Track key={track.id} track={track} />
        ))}
      </LeftBlock>
      <RightBlock>
        <SubscribeTitle>Слушайте и скачивайте!</SubscribeTitle>
        <SubscriptionsWrapper orientation="vertical">
          <ITunesButton />
          <YaMusicButton />
        </SubscriptionsWrapper>
      </RightBlock>
    </Container>
  </SectionRoot>
)

export default Music
