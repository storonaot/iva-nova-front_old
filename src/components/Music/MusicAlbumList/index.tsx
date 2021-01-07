import React, { FC } from 'react'
import { Album } from '../../../api/types'
import Grid from '../../common/Grid'
import MusicAlbumItem from '../../common/MusicAlbumItem'

interface Props {
  list: Album[]
}

const MusicAlbumList: FC<Props> = ({ list }) => {
  return (
    <Grid>
      {list.map(album => (
        <MusicAlbumItem key={album.id} album={album} />
      ))}
    </Grid>
  )
}

export default MusicAlbumList
