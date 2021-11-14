// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import React, { useEffect, useMemo, memo, useCallback, useRef, useState, FC } from 'react'
import { files } from 'dropbox'
import { Block2, IconWrapper, SeekSlider } from './styles'
import { Play as PlayIcon, Pause as PauseIcon } from '../Icons'
import { themeSettings } from '../../../theme'

interface Props {
  track: files.GetTemporaryLinkResult
  isPlaying: boolean
  setIsPlaying: (condition: boolean) => void
  setCurrentTrackId: (id: null | string | number) => void
}

const Track: FC<Props> = ({ track, isPlaying, setIsPlaying, setCurrentTrackId }) => {
  const [trackProgress, setTrackProgress] = useState(0)
  const {
    metadata: { name, id },
    link,
  } = track

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(link) : undefined,
  )
  const intervalRef = useRef<number>()
  // const isReady = useRef(false)

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      setCurrentTrackId(null)
    }
  }, [setIsPlaying, setCurrentTrackId, audioRef.current])

  const reset = useCallback(() => {
    clearInterval(intervalRef.current)
    setTrackProgress(0)
    setIsPlaying(false)
    setCurrentTrackId(null)
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current)

    // intervalRef.current = setInterval(() => {
    //   if (audioRef.current) {
    //     if (audioRef.current.ended) reset()
    //     else setTrackProgress(audioRef.current.currentTime)
    //   }
    // }, 1000)
  }, [setTrackProgress, reset, audioRef.current?.currentTime])

  const start = useCallback(() => {
    if (audioRef.current) {
      setIsPlaying(true)
      setCurrentTrackId(id)
      audioRef.current.play()
      startTimer()
    }
  }, [setIsPlaying, setCurrentTrackId, id])

  const togglePlay = useCallback(() => {
    if (isPlaying) stop()
    else start()
  }, [isPlaying, stop, start])

  const { duration } = useMemo(() => audioRef.current || { duration: null }, [audioRef.current])

  const currentPercentage = useMemo(
    () => (duration ? `${(trackProgress / duration) * 100}%` : '0%'),
    [trackProgress, duration],
  )

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    return () => {
      if (audioRef.current != null) {
        audioRef.current.pause()
      }
    }
  }, [])

  // const onScrub = value => {
  //   console.log('value', value)

  //   if (audioRef.current) {
  //     // Clear any timers already running
  //     clearInterval(intervalRef.current)
  //     audioRef.current.currentTime = value
  //     setTrackProgress(audioRef.current.currentTime)
  //   }
  // }

  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     setIsPlaying(true)
  //   }
  //   startTimer()
  // }

  // const [val, setVal] = useState(0)
  const [val, setVal] = useState(0)

  return (
    <>
      <Block2 key={id}>
        <IconWrapper onClick={togglePlay}>
          {isPlaying ? (
            <PauseIcon fill={themeSettings.colors.secondary} opacity="1" />
          ) : (
            <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
          )}
        </IconWrapper>
        <div>{name}</div>
        <div> {isPlaying ? trackProgress : duration}</div>

        <SeekSlider
          type="range"
          step="1"
          min="0"
          value={val}
          onChange={e => setVal(Number(e.target.value))}
          currentPercentage={`${val}%`}
          // onChange={e => {
          //   console.log('e', e.target)

          //   onScrub(e.target.value)
          // }}
          // onMouseUp={onScrubEnd}
          // onKeyUp={onScrubEnd}
          max={100}
        />
      </Block2>
      <div>currentPercentage {currentPercentage}</div>
      <div>trackProgress {trackProgress}</div>
      <div>duration {duration}</div>
      <div>audioRef.current.currentTime {audioRef.current && audioRef.current.currentTime}</div>
    </>
  )
}

export default memo(Track)
