import React, { FC } from 'react'
import Link from 'next/link'

import { MUSIC_URL } from '../../../constants/sources'
import AspectRatioImage from '../AspectRatioImage'
import { ImageRoot, OverlayText, Year, Title, Content, Wrapper, Overlay, Paragrarh } from './styles'
import { Album } from '../../../api/types'

interface Props {
  album: Album
}

const MusicAlbumItem: FC<Props> = ({ album }) => (
  <Link href={`${MUSIC_URL}/${album.id}`}>
    <Wrapper>
      <ImageRoot>
        <AspectRatioImage imageUrl={`http://159.89.30.102${album.cover.url}`} aspectRatio="1:1" />
        <Overlay>
          <OverlayText>
            <Paragrarh isBold>{album.name}</Paragrarh>
            <Paragrarh>{album.short_description}</Paragrarh>
          </OverlayText>
        </Overlay>
      </ImageRoot>
      <Content>
        <Title>{album.name}</Title>
        <Year>{new Date(album.date).getFullYear()}</Year>
      </Content>
    </Wrapper>
  </Link>
)

export default MusicAlbumItem
