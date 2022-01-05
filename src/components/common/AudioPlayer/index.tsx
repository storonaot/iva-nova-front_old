import React, { memo, FC, useState } from 'react'
import { files } from 'dropbox'
import { TrackList } from './styles'

import Track from '../Track'

interface Props {
  tracks: files.GetTemporaryLinkResult[]
  columns?: 1 | 2
}

const AudioPlayer: FC<Props> = ({ tracks, columns = 2 }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [currentTrackId, setCurrentTrackId] = useState<string | number | null>(null)

  return (
    <TrackList columns={columns}>
      {tracks.map(track => (
        <Track
          key={track.metadata.id}
          track={track}
          isPlaying={isPlaying && currentTrackId === track.metadata.id}
          setPlaying={setPlaying}
          setCurrentTrackId={setCurrentTrackId}
        />
      ))}
    </TrackList>
  )
}

export default memo(AudioPlayer)
