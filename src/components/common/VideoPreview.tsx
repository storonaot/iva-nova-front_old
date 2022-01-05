import React from 'react'

import styled from 'styled-components'
import AspectRatioImage, { AspectRatio } from './AspectRatioImage'
import PlayIcon from '../../static/svg/play.svg'

const Root = styled.div`
  position: relative;
  background-color: #000;
`

const IconWrapper = styled.div`
  position: absolute;
  width: 60px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

interface Props {
  image: string
  aspectRatio: AspectRatio
}

const VideoPreview = ({ image, aspectRatio }: Props) => (
  <Root>
    <IconWrapper>
      <PlayIcon />
    </IconWrapper>
    <AspectRatioImage imageUrl={image} aspectRatio={aspectRatio} />
  </Root>
)

export default VideoPreview
