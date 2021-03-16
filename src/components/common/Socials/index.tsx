import React from 'react'

import VkIcon from '../../../static/svg/vk.svg'
import FbIcon from '../../../static/svg/fb.svg'
import YoutubeIcon from '../../../static/svg/youtube.svg'
import InstaIcon from '../../../static/svg/insta.svg'

import { SocialsRoot, IconWrapper } from './styles'
import { SocialNetworkItem, SocialNetworkType } from '../../../api/types'

export interface Props {
  size?: number
  padded?: boolean
  list: SocialNetworkItem[]
}

const Socials = ({ size = 40, padded = true, list = [] }: Props) => {
  const getIcon = (type: SocialNetworkType) => {
    switch (type) {
      case 'vk':
        return <VkIcon />
      case 'fb':
        return <FbIcon />
      case 'youtube':
        return <YoutubeIcon />
      default:
        return <InstaIcon />
    }
  }

  const listWithIcons = list.map(item => ({ ...item, icon: getIcon(item.type) }))

  return (
    <SocialsRoot padded={padded}>
      {listWithIcons.map(item => (
        <IconWrapper key={item.id} size={size}>
          <a style={{ display: 'block' }} href={item.link} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        </IconWrapper>
      ))}
    </SocialsRoot>
  )
}

export default Socials
