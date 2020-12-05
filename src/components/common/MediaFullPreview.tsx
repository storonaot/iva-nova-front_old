import React, { FC } from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

import Link from 'next/link'
import CardComp from './Card'

import { SPACE_3, SECONDARY_FONT, SPACE_4, SPACE_2, GRAY_COLOR } from '../../theme'
import AspectRatioImage, { AspectRatios } from './AspectRatioImage'
import VideoPreview from './VideoPreview'

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Description = styled.p`
  text-align: center;
  font-family: ${SECONDARY_FONT};
  line-height: 1.25em;
`

export const Card = styled(CardComp)<{ interactive: boolean }>`
  height: 100%;
  &:hover {
    border-color: ${GRAY_COLOR};
    cursor: pointer;
  }
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  mode?: 'video' | 'photo'
  aspectRatio?: AspectRatios
  to?: string
}

const MediaFullPreview: FC<Props> = ({ text, image, mode, aspectRatio = '16:9', to }) => {
  const renderPreview = () => {
    return (
      <PreviewItem>
        <Card interactive={!!to} padding="small">
          <ImageWrapper>
            {mode === 'video' ? (
              <VideoPreview image={image} aspectRatio={aspectRatio} />
            ) : (
              <AspectRatioImage image={image} aspectRatio={aspectRatio} />
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
