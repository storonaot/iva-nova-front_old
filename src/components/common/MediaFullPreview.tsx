import React, { FC } from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

import Link from 'next/link'
import Card from './Card'

import { SPACE_3, SECONDARY_FONT, SPACE_4, SPACE_2 } from '../../theme'
import AspectRatioImage, { AspectRatio } from './AspectRatioImage'
import VideoPreview from './VideoPreview'
import { getFullMediaUrl } from '../../helpers'

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Description = styled.p`
  text-align: center;
  font-family: ${SECONDARY_FONT};
  line-height: 1.25em;
`

export const PreviewItem = styled.div`
  margin-bottom: ${SPACE_4};
  &:not(:first-child) {
    display: none;
  }

  ${media.greaterThan('medium')`
    margin-bottom: 0;
    padding: 0;
    &:not(:first-child) {
      display: block;
    }
    &+&: {
      margin-left: ${SPACE_2}
    }
  `}
`

export const Text = styled.p`
  text-align: center;
  font-family: ${SECONDARY_FONT};
  line-height: 1.25em;
`

interface Props {
  text: string
  image: string
  mode?: 'video' | 'photo'
  aspectRatio?: AspectRatio
  to?: string
  onClick?: () => void
}

const MediaFullPreview: FC<Props> = ({
  text,
  image,
  mode,
  aspectRatio = AspectRatio['16:9'],
  to,
  onClick,
}) => {
  const renderPreview = () => {
    return (
      <PreviewItem onClick={onClick}>
        <Card interactive={!!(to || onClick)} padding="small">
          <ImageWrapper>
            {mode === 'video' ? (
              <VideoPreview image={getFullMediaUrl(image)} aspectRatio={aspectRatio} />
            ) : (
              <AspectRatioImage imageUrl={image} aspectRatio={aspectRatio} />
            )}
          </ImageWrapper>
          <Text>{text}</Text>
        </Card>
      </PreviewItem>
    )
  }

  return to ? <Link href={to}>{renderPreview()}</Link> : renderPreview()
}

export default MediaFullPreview
