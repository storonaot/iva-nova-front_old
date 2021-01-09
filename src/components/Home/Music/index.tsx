import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import { MUSIC_URL } from '../../../constants/sources'
import { SPACE_2, SPACE_3 } from '../../../theme'

import Heading from '../../common/Heading'
import ContainerComp from '../../common/Container'
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

import bgImage from '../../../static/images/bg2.jpg'
import carrierImage from '../../../static/images/huba.png'

import tracks from './data'
import { TrackItem } from '../../../api/types'

const HubaImageContainer = styled.div`
  width: 100%;
  height: 438px;
  background-image: url(${carrierImage});
  position: absolute;
  z-index: 0;
  background-repeat: no-repeat;
  pointer-events: none;
  bottom: -30px;
  left: 16px;
  background-position: right top;
`

const Container = styled(ContainerComp)`
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

const LeftBlock = styled.div`
  margin-bottom: ${SPACE_2};
  ${media.greaterThan('medium')`
    min-width: 60%; margin-right: 58px;
  `}
`

const RightBlock = styled.div`
  text-align: center;
  min-height: 387px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${media.greaterThan('medium')`
    min-width: calc(40% - 58px);
    min-height: auto;
    text-align: left;
    justify-content: flex-start;
  `}
`

const TracksWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

const Music = () => (
  <SectionRoot bgImage={bgImage} bgRepeat={false}>
    <Container>
      <LeftBlock>
        <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
        <TracksWrapper>
          {/* {tracks.map((track: TrackItem) => (
            <Track key={track.id} track={track} />
          ))} */}
          {tracks.map((track: TrackItem) => (
            <div key={track.id}>track</div>
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
          <ITunesButton href="" />
          <YaMusicButton href="" />
        </SubscriptionsWrapper>
      </RightBlock>
    </Container>
    <HubaImageContainer />
  </SectionRoot>
)

export default Music
