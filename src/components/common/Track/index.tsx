import React from 'react'
import { Play as PlayIcon } from '../Icons'
import { themeSettings } from '../../../theme'
import { Block, IconWrapper, TimeLineWrapper, TimeLine } from './styles'

export interface TrackProps {
  id: number
  title: string
  timeline: string
  downloaded?: number
  played?: number
  isActive?: boolean
  paused?: boolean
}

interface Props {
  track: TrackProps
}

const Track = ({ track }: Props) => (
  <Block key={track.id}>
    <IconWrapper>
      <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
    </IconWrapper>
    <div>{track.title}</div>
    <div>{track.timeline}</div>
    <TimeLineWrapper>
      <TimeLine width={30} />
      <TimeLine width={20} lineColor="secondary" />
    </TimeLineWrapper>
  </Block>
)

export default Track
