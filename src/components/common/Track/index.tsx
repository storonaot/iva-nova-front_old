import React, { memo } from 'react'
import { files } from 'dropbox'
import { Play as PlayIcon } from '../Icons'
import { themeSettings } from '../../../theme'
import { Block2, IconWrapper, TimeLineWrapper, TimeLine } from './styles'

interface Props {
  // track: TrackItem
  track: files.GetTemporaryLinkResult
}

const Track = ({ track }: Props) => {
  return (
    <Block2 key={track.metadata.id}>
      <IconWrapper>
        <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
      </IconWrapper>
      <div>{track.metadata.name}</div>
      <div>3:21</div>
      <TimeLineWrapper>
        <TimeLine width={30} />
        <TimeLine width={20} lineColor="secondary" />
      </TimeLineWrapper>
    </Block2>
  )
}

export default memo(Track)

// import { FC } from 'hoist-non-react-statics/node_modules/@types/react'
// import React from 'react'
// import { useAudioPlayer } from 'react-use-audio-player'

// interface Props {
//   file: unknown
// }

// const AudioPlayer: FC<Props> = ({ file }) => {
//   console.log('file', file)

//   const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
//     src: file.link,
//     format: 'mp3',
//     autoplay: false,
//     onend: () => console.log('sound has ended!'),
//   })

//   if (!ready && !loading) return <div>No audio to play</div>
//   if (loading) return <div>Loading audio</div>

//   return (
//     <div>
//       <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
//     </div>
//   )
// }

// export default AudioPlayer
