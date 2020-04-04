import React from 'react'
import { MUSIC_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'
import SectionRoot from '../../common/SectionRoot'
import Block from '../../common/Block'
import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../../common/Subscriptions'

// import PlayIcon from '../../../static/svg/play.svg'
import PauseIcon from '../../../static/svg/pause.svg'

import bgImage from '../../../static/images/bg2.jpg'

import tracks from './data'

interface Track {
  id: number
  title: string
  timeline: string
  downloaded?: string
  played?: string
  isActive?: boolean
}

const Music = () => (
  <SectionRoot bgImage={bgImage}>
    <Container>
      <div style={{ display: 'flex' }}>
        <div style={{ minWidth: '60%', marginRight: 58 }}>
          <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
          <div>
            {tracks.map((track: Track) => (
              <Block key={track.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: 32, width: 32, height: 32, overflow: 'hidden' }}>
                    <PauseIcon />
                  </div>
                  <div style={{ flex: '1 0 auto' }}>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}
                    >
                      <div>{track.title}</div>
                      <div>{track.timeline}</div>
                    </div>
                    <div
                      style={{
                        position: 'relative',
                        height: 4,
                        width: '100%',
                        backgroundColor: '#fff',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ position: 'absolute', backgroundColor: 'red' }}>gray line</div>
                      <div style={{ position: 'absolute' }}>orange line</div>
                    </div>
                  </div>
                </div>
              </Block>
            ))}
          </div>
        </div>
        <div style={{ minWidth: 'calc(40% - 58px)', textAlign: 'center' }}>
          <SubscribeTitle>Слушайте и скачивайте!</SubscribeTitle>
          <SubscriptionsWrapper orientation="vertical">
            <ITunesButton />
            <YaMusicButton />
          </SubscriptionsWrapper>
        </div>
      </div>
    </Container>
  </SectionRoot>
)

export default Music
