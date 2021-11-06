// import React, { memo, useState, useMemo } from 'react'
// import { files } from 'dropbox'
// import { useRef } from 'react'
// import { useEffect } from 'react'
// import { Play as PlayIcon } from '../Icons'
// import { themeSettings } from '../../../theme'
// import { Block2, IconWrapper, SeekSlider } from './styles'

// interface Props {
//   // track: TrackItem
//   track: files.GetTemporaryLinkResult
// }

// const Track = ({ track }: Props) => {
//   const [seekSliderValue, setSeekSliderValue] = useState(0)
//   const [duration, setDuration] = useState(null)

//   const audioRef = useRef()

//   const calculateTime = (secs: number) => {
//     const minutes = Math.floor(secs / 60)
//     const seconds = Math.floor(secs % 60)
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
//     return `${minutes}:${returnedSeconds}`
//   }

//   useEffect(() => {
//     audioRef.current.onloadedmetadata = () => {
//       const titme = calculateTime(audioRef.current.duration)

//       setDuration(titme)
//     }
//   }, [])

//   const bufferedAmount = useMemo(() => {
//     return audioRef.current
//       ? audioRef.current.buffered.end(audioRef.current.buffered.length - 1)
//       : null
//   }, [])

//   const seekableAmount = useMemo(() => {
//     console.log('audioRef.current', audioRef.current)

//     return audioRef.current
//       ? audioRef.current.seekable.end(audioRef.current.seekable.length - 1)
//       : null
//   }, [])

//   return (
//     <div>
//       <audio preload="metadata" loop ref={audioRef} style={{ position: 'absolute', opacity: 1 }}>
//         <track kind="captions" />
//         <source src={track.link} />
//       </audio>
//       <Block2 key={track.metadata.id}>
//         <IconWrapper>
//           <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
//         </IconWrapper>
//         <div>{track.metadata.name}</div>
//         <div>{duration}</div>
//         <div>bufferedAmount {bufferedAmount}</div>
//         <div>seekableAmount {seekableAmount}</div>

//         {/* <span id="current-time" className="time">
//           0:00
//         </span>
//         <span id="duration" className="time">
//           {duration}
//         </span> */}
//         <SeekSlider
//           type="range"
//           value={seekSliderValue}
//           onChange={e => {
//             setSeekSliderValue(Number(e.target.value))
//           }}
//         />
//       </Block2>
//     </div>
//   )
// }

// export default memo(Track)
