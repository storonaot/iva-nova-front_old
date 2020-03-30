import React from 'react'

import VkIcon from '../../../static/svg/vk.svg'
import FbIcon from '../../../static/svg/fb.svg'
import YoutubeIcon from '../../../static/svg/youtube.svg'
import InstaIcon from '../../../static/svg/insta.svg'

import { SocialsRoot, IconWrapper } from './styles'

export interface Props {
  size?: number
  padded?: boolean
}

const Socials = ({ size = 40, padded = true }: Props) => (
  <SocialsRoot padded={padded}>
    <IconWrapper size={size}>
      <VkIcon />
    </IconWrapper>
    <IconWrapper size={size}>
      <FbIcon />
    </IconWrapper>
    <IconWrapper size={size}>
      <YoutubeIcon />
    </IconWrapper>
    <IconWrapper size={size}>
      <InstaIcon />
    </IconWrapper>
  </SocialsRoot>
)

export default Socials
