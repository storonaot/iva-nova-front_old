import React, { memo, FC, useState } from 'react'
import { files } from 'dropbox'
import { TrackList } from './styles'

import Track from '../Track'

interface Props {
  tracks: files.GetTemporaryLinkResult[]
}

const AudioPlayer: FC<Props> = ({ tracks }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [currentTrackId, setCurrentTrackId] = useState<string | number | null>(null)

  return (
    <TrackList>
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
