import React, { useRef } from 'react'
import { files } from 'dropbox'
// import { Play as PlayIcon } from '../Icons'
// import { themeSettings } from '../../../theme'
// import { Block2, IconWrapper, TimeLineWrapper, TimeLine } from './styles'
// import { TrackItem } from '../../../api/types'

interface Props {
  // track: TrackItem
  track: files.GetTemporaryLinkResult
}

const Track = ({ track }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  // const myaudio = new Audio(track.link)

  // console.log('myaudio', myaudio)

  // const seconds = (Number(track.timing) / 1000) % 60
  // const minutes = parseInt(((Number(track.timing) / (1000 * 60)) % 60).toString(), 0)

  // return (
  //   <Block2 key={track.metadata.id}>
  //     <IconWrapper>
  //       <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
  //     </IconWrapper>
  //     <div>{track.metadata.name}</div>
  //     <div>3:21</div>
  //     <TimeLineWrapper>
  //       <TimeLine width={30} />
  //       <TimeLine width={20} lineColor="secondary" />
  //     </TimeLineWrapper>
  //     {myaudio.duration}
  //   </Block2>
  // )

  // useEffect(() => {
  //   if (audioRef.current != null) {
  //     audioRef.current.addEventListener('seeked', () => {})
  //   }
  // }, [audioRef])

  return (
    <>
      <audio src={track.link} controls ref={audioRef} preload="metadata">
        <track kind="captions" />
      </audio>
      <div>duration: {audioRef.current?.duration}</div>
      <div>currentTime: {audioRef.current?.currentTime}</div>
      <div>buffered.length: {audioRef.current?.buffered.length}</div>
    </>
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
