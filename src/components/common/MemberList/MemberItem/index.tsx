import Link from 'next/link'
import React, { FC } from 'react'
import { Member } from '../../../../api/types'
import { ABOUT_URL } from '../../../../constants/sources'
import { getFullMediaUrl } from '../../../../helpers'
import AspectRatioImage, { AspectRatio } from '../../AspectRatioImage'

import Card from '../../Card'

import { Caption, AccentText } from './styles'

interface Props {
  member: Member
}

const MemberItem: FC<Props> = ({ member }) => (
  <Link href={`${ABOUT_URL}/${member.id}`}>
    <a>
      <Card interactive padding="small">
        <AspectRatioImage
          imageUrl={getFullMediaUrl(member.main_photo.url)}
          aspectRatio={AspectRatio['3:4']}
        />
        <Caption>
          <AccentText>{member.full_name}</AccentText>
          <div>{member.specialization}</div>
        </Caption>
      </Card>
    </a>
  </Link>
)

export default MemberItem
