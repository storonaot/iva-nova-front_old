import React, { FC } from 'react'
import { Image } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'
import { Root, Photo, Name, Position, PhoneNumber } from './styles'

import Link from '../../common/Link'

interface Props {
  name: string
  photo: Image
  position: string
  phoneNumber?: string
  email: string
}

const ContactItem: FC<Props> = ({ name, photo, position, phoneNumber, email }) => {
  return (
    <Root>
      <Photo imageUrl={getFullMediaUrl(photo.url)} />
      <div>
        <Name>{name}</Name>
        <Position>({position})</Position>
        <PhoneNumber>{phoneNumber}</PhoneNumber>
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
    </Root>
  )
}

export default ContactItem
