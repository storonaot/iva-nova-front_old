import React, { FC } from 'react'
import { Member } from '../../../api/types'

import MemberItem from './MemberItem'

interface Props {
  list: Member[]
}

const MemberList: FC<Props> = ({ list }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '32px' }}>
      {list.map(member => (
        <MemberItem key={member.id} member={member} />
      ))}
    </div>
  )
}
export default MemberList
