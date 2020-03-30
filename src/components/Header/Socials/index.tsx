import React from 'react'

import VkIcon from '../../../static/svg/vk.svg'
import FbIcon from '../../../static/svg/fb.svg'
import YoutubeIcon from '../../../static/svg/youtube.svg'
import InstaIcon from '../../../static/svg/insta.svg'

import { SocialsRoot, IconWrapper } from './styles'

export enum DisplayOn {
  mobile = 'mobile',
  desktop = 'desktop',
}

export enum Size {
  small = 'small',
  regular = 'regular',
}
export interface Props {
  displayOn?: DisplayOn
  size?: Size
}

const Socials = ({ displayOn = DisplayOn.desktop, size = Size.regular }: Props) => (
  <SocialsRoot displayOn={displayOn} size={size}>
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
