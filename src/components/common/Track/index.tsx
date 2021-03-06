import React from 'react'
import { Play as PlayIcon } from '../Icons'
import { themeSettings } from '../../../theme'
import { Block2, IconWrapper, TimeLineWrapper, TimeLine } from './styles'
import { TrackItem } from '../../../api/types'

interface Props {
  track: TrackItem
}

const Track = ({ track }: Props) => {
  // const seconds = (Number(track.timing) / 1000) % 60
  // const minutes = parseInt(((Number(track.timing) / (1000 * 60)) % 60).toString(), 0)

  return (
    <Block2 key={track.id}>
      <IconWrapper>
        <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
      </IconWrapper>
      <div>{track.title}</div>
      <div>3:21</div>
      <TimeLineWrapper>
        <TimeLine width={30} />
        <TimeLine width={20} lineColor="secondary" />
      </TimeLineWrapper>
    </Block2>
  )

  // return (
  //   <div>
  //     <audio controls>
  //       <source src={track.audio_link} type="audio/mpeg" />
  //       <track kind="captions" />
  //     </audio>
  //     <Block2 key={track.id}>
  //       <IconWrapper>
  //         <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
  //       </IconWrapper>
  //       <div>{track.name}</div>
  //       <div>
  //         {minutes}:{seconds}
  //       </div>
  //       <TimeLineWrapper>
  //         <TimeLine width={30} />
  //         <TimeLine width={20} lineColor="secondary" />
  //       </TimeLineWrapper>
  //     </Block2>
  //   </div>
  // )
}

export default Track
