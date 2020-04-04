import React from 'react'

import styled from 'styled-components'
import AspectRatioImage, { AspectRatios } from './AspectRatioImage'
import PlayIcon from '../../static/svg/play.svg'

const Root = styled.div`
  position: relative;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  aspectRatio: AspectRatios
}

const VideoPreview = ({ image, aspectRatio }: Props) => (
  <Root>
    <IconWrapper>
      <PlayIcon />
    </IconWrapper>
    <AspectRatioImage image={image} aspectRatio={aspectRatio} />
  </Root>
)

export default VideoPreview
