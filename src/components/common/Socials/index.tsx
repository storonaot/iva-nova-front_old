import React from 'react'

import VkIcon from '../../../static/svg/vk.svg'
import FbIcon from '../../../static/svg/fb.svg'
import YoutubeIcon from '../../../static/svg/youtube.svg'
import InstaIcon from '../../../static/svg/insta.svg'

import { SocialsRoot, IconWrapper } from './styles'
import { Socials as SocialsType } from '../../../api/types'

export interface Props {
  size?: number
  padded?: boolean
  socials: SocialsType
}

const Socials = ({ size = 40, padded = true, socials }: Props) => {
  return (
    <SocialsRoot padded={padded}>
      <IconWrapper size={size}>
        <a style={{ display: 'block' }} href={socials.vk_src} target="_blank" rel="noreferrer">
          <VkIcon />
        </a>
      </IconWrapper>
      <IconWrapper size={size}>
        <a style={{ display: 'block' }} href={socials.fb_src} target="_blank" rel="noreferrer">
          <FbIcon />
        </a>
      </IconWrapper>
      <IconWrapper size={size}>
        <a style={{ display: 'block' }} href={socials.youtube_src} target="_blank" rel="noreferrer">
          <YoutubeIcon />
        </a>
      </IconWrapper>
      <IconWrapper size={size}>
        <a style={{ display: 'block' }} href={socials.insta_src} target="_blank" rel="noreferrer">
          <InstaIcon />
        </a>
      </IconWrapper>
    </SocialsRoot>
  )
}

export default Socials
