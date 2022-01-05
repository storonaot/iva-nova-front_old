import React, { memo, FC, useEffect, useRef, useState, useCallback, useMemo } from 'react'

import { files } from 'dropbox'
import { intervalToDuration } from 'date-fns'
import { themeSettings } from '../../../theme'
import { IconWrapper, Block, SeekSlider } from './styles'
import { Play as PlayIcon, Pause as PauseIcon } from '../Icons'

interface Props {
  track: files.GetTemporaryLinkResult
  isPlaying: boolean
  setPlaying: (val: boolean) => void
  setCurrentTrackId: (id: string | number | null) => void
}

const padZero = (num: number | undefined) => (num != null && num < 10 ? `0${num}` : num)

const Track: FC<Props> = ({ track, isPlaying, setPlaying, setCurrentTrackId }) => {
  const {
    metadata: { name, id },
    link,
  } = track

  const [duration, setDuration] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<number | null>()
  const [clickedTime, setClickedTime] = useState<number | null>(null)

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(link) : undefined,
  )

  useEffect(() => {
    if (audioRef.current == null) return
    // state setters wrappers
    const setAudioData = () => {
      if (audioRef.current == null) return

      setDuration(audioRef.current.duration)
      setCurrentTime(audioRef.current.currentTime)
    }

    const setAudioTime = () => {
      if (audioRef.current == null) return

      setCurrentTime(audioRef.current.currentTime)
    }

    // DOM listeners: update React state on DOM events
    audioRef.current.addEventListener('loadeddata', setAudioData)
    audioRef.current.addEventListener('timeupdate', setAudioTime)

    // React state listeners: update DOM on React state changes
    if (isPlaying) audioRef.current.play()
    else audioRef.current.pause()

    if (clickedTime && clickedTime !== currentTime) {
      audioRef.current.currentTime = clickedTime
      setClickedTime(null)
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (audioRef.current == null) return

      audioRef.current.removeEventListener('loadeddata', setAudioData)
      audioRef.current.removeEventListener('timeupdate', setAudioTime)
    }
  })

  useEffect(() => {
    if (!isPlaying && audioRef.current != null) {
      audioRef.current.currentTime = 0
    }
  }, [isPlaying])

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setPlaying(false)
      setCurrentTrackId(null)
    } else {
      setPlaying(true)
      setCurrentTrackId(id)
    }
  }, [setPlaying, isPlaying, setCurrentTrackId])

  const formatTime = useCallback(seconds => {
    if (seconds == null) return ''
    const formattedDuration = intervalToDuration({ start: 0, end: seconds * 1000 })
    return `${padZero(formattedDuration.minutes)}:${padZero(formattedDuration.seconds)}`
  }, [])

  const val = useMemo(() => {
    if (currentTime == null || duration == null) return 0

    return (currentTime / duration) * 100
  }, [currentTime, duration])

  const calcClickedTime = useCallback(
    event => {
      const clickPositionInPage = event.pageX
      const bar = event.target
      const barStart = bar.getBoundingClientRect().left + window.scrollX
      const barWidth = bar.offsetWidth
      const clickPositionInBar = clickPositionInPage - barStart
      const timePerPixel = duration != null ? duration / barWidth : 0

      return timePerPixel * clickPositionInBar
    },
    [duration],
  )

  const handleTimeDrag = (event: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    setClickedTime(calcClickedTime(event))

    const updateTimeOnMove = (event: unknown) => {
      setClickedTime(calcClickedTime(event))
    }

    document.addEventListener('mousemove', updateTimeOnMove)

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove)
    })
  }

  const isDisabled = useMemo(() => duration == null, [duration])

  return (
    <Block>
      <IconWrapper onClick={togglePlay} isDisabled={isDisabled}>
        {isPlaying ? (
          <PauseIcon fill={themeSettings.colors.gray} opacity="1" />
        ) : (
          <PlayIcon fill={themeSettings.colors.secondary} opacity="1" />
        )}
      </IconWrapper>
      <div>{name}</div>
      <div> {isPlaying ? formatTime(currentTime) : formatTime(duration)}</div>
      <SeekSlider
        type="range"
        step="1"
        min="0"
        value={val}
        onMouseDown={event => {
          if (!isDisabled && isPlaying) handleTimeDrag(event)
        }}
        currentPercentage={`${val}%`}
        max={100}
      />
    </Block>
  )
}

export default memo(Track)
