import React, { FC } from 'react'

import { GetServerSideProps } from 'next'
import { fetchMember, fetchMembers } from '../../src/api'
import { Member } from '../../src/api/types'
import MemberComp from '../../src/components/Member'

interface Props {
  member: Member
  memberList: Member[]
}

const MemberPage: FC<Props> = ({ memberList, member }) => {
  return <MemberComp member={member} memberList={memberList} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const memberList = await fetchMembers(`id_ne=${query.id}&is_ex=false`)
    const member = await fetchMember(query.id as string)

    return { props: { memberList, member } }
  } catch (error) {
    return { props: { memberList: null, member: null } }
  }
}

export default MemberPage
