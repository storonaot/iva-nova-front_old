import React, { FC } from 'react'
import bgImage from '../../static/images/bg2.jpg'

import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import HTMLContent from '../common/HTMLContent'
import { About, Member } from '../../api/types'
import MembersBlock from '../common/MembersBlock'
import ImageGallery from './ImageGalery'

interface Props {
  about: About
  memberList: Member[]
}

interface MembersGroups {
  activeMembers: Member[]
  exMembers: Member[]
}

const AboutComponent: FC<Props> = ({ about, memberList }) => {
  const { activeMembers, exMembers }: MembersGroups = memberList.reduce(
    (acc: MembersGroups, currentMember: Member) => {
      if (currentMember.is_ex) {
        return { activeMembers: acc.activeMembers, exMembers: [...acc.exMembers, currentMember] }
      }

      return { activeMembers: [...acc.activeMembers, currentMember], exMembers: acc.exMembers }
    },
    {
      activeMembers: [],
      exMembers: [],
    },
  )

  return (
    <>
      <SectionRoot bgImage={bgImage} bgRepeat="x">
        <Container>
          <Title withMargin>О группе</Title>
          <HTMLContent inputString={about.description} />
          <ImageGallery photos={about.photos} />
        </Container>
      </SectionRoot>
      <SectionRoot>
        <Container>
          <Title withMargin>История группы</Title>
          <HTMLContent inputString={about.history} />
        </Container>
      </SectionRoot>
      <MembersBlock title="Настоящий состав" list={activeMembers} />
      <SectionRoot bgImage={bgImage} bgRepeat="x">
        <Container>
          <Title withMargin>Бывшие участницы</Title>
          {exMembers.map(member => (
            <div key={member.id} style={{ marginBottom: '24px' }}>
              <strong>{member.full_name}</strong> - {member.specialization} ({member.active_periods}
              )
            </div>
          ))}
        </Container>
      </SectionRoot>
    </>
  )
}

export default AboutComponent
