import React, { FC } from 'react'

import bgImage from '../../../static/images/bg1.jpg'
import SectionRoot from '../SectionRoot'

import MemberList from '../MemberList'
import Container from '../Container'
import Title from '../Title'
import { Member } from '../../../api/types'

const MembersBlock: FC<{ list: Member[]; title: string }> = ({ list, title }) => {
  return (
    <SectionRoot bgImage={bgImage} bgRepeat="xy">
      <Container>
        <Title withMargin>{title}</Title>
        <MemberList list={list} />
      </Container>
    </SectionRoot>
  )
}

export default MembersBlock
