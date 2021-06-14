import React, { FC } from 'react'
import Link from 'next/link'

import { MUSIC_URL } from '../../../constants/sources'
import AspectRatioImage, { AspectRatio } from '../AspectRatioImage'
import { ImageRoot, OverlayText, Year, Title, Content, Wrapper, Overlay, Paragrarh } from './styles'
import { Album } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'

interface Props {
  album: Album
}

const MusicAlbumItem: FC<Props> = ({ album }) => (
  <Link href={`${MUSIC_URL}/${album.id}`}>
    <Wrapper>
      <ImageRoot>
        <AspectRatioImage
          imageUrl={getFullMediaUrl(album.cover?.url)}
          aspectRatio={AspectRatio['1:1']}
        />
        <Overlay>
          <OverlayText>
            <Paragrarh isBold>{album.title}</Paragrarh>
            <Paragrarh>{album.short_description}</Paragrarh>
          </OverlayText>
        </Overlay>
      </ImageRoot>
      <Content>
        <Title>{album.title}</Title>
        <Year>{new Date(album.date).getFullYear()}</Year>
      </Content>
    </Wrapper>
  </Link>
)

export default MusicAlbumItem
