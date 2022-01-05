import { useState } from 'react'
import { Video } from '../../api/types'

const useShowVideo = list => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null)

  const showFull = (videoId: number) => {
    if (list) {
      const targetIndex = list.findIndex(video => video.id === videoId)
      const targetVideo = list[targetIndex]

      if (targetVideo != null) {
        setCurrentVideo(targetVideo)
        setCurrentVideoIndex(targetIndex)
      }
    }
  }

  return { currentVideo, setCurrentVideo, currentVideoIndex, setCurrentVideoIndex, showFull }
}

export default useShowVideo
