import React, { FC } from 'react'
import Link from 'next/link'

import cn from 'classnames'
import { MUSIC_URL } from '../../../constants/sources'
import AspectRatioImage, { AspectRatio } from '../AspectRatioImage'
import { Album } from '../../../api/types'
import { getFullImageUrl } from '../../../helpers'

import s from './styles.module.scss'

interface Props {
  album: Album
}

const MusicAlbumItem: FC<Props> = ({ album }) => (
  <Link href={`${MUSIC_URL}/${album.id}`}>
    <div className={s.wrapper}>
      <div className={s.imageRoot}>
        <AspectRatioImage
          imageUrl={getFullImageUrl(album.cover.url)}
          aspectRatio={AspectRatio['1:1']}
        />
        <div className={s.overlay}>
          <div className={s.overlayText}>
            <p className={cn(s.paragrarh, s.isBold)}>{album.title}</p>
            <p className={s.paragrarh}>{album.short_description}</p>
          </div>
        </div>
      </div>
      <div className={s.content}>
        <p className={s.title}>{album.title}</p>
        <p className={s.year}>{new Date(album.date).getFullYear()}</p>
      </div>
    </div>
  </Link>
)

export default MusicAlbumItem
