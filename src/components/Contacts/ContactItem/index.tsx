import React, { FC } from 'react'
import { Image } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'
import { Root, Photo, Name, Position, PhoneNumber } from './styles'

// export const Name = styled.div``

// export const Position = styled.div``

// export const PhoneNumber = styled.div``

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
