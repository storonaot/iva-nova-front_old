import React, { FC } from 'react'
import bgImage from '../../static/images/bg2.jpg'
import bgImage1 from '../../static/images/bg1.jpg'

import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import HTMLContent from '../common/HTMLContent'
import { About, Member, Image } from '../../api/types'
import { getFullMediaUrl } from '../../helpers'
import MemberList from '../common/MemberList'

interface Props {
  about: About
  memberList: Member[]
}

const ImageGallery: FC<{ photos: Image[] }> = ({ photos }) => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '9fr  7fr 4fr',
          height: 300,
          gridGap: 16,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[0].url)})`,
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[1].url)})`,
          }}
        />
        <div
          style={{
            backgroundColor: 'blue',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[0].url)})`,
          }}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '4fr  9fr 7fr',
          height: 300,
          gridGap: 16,
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[1].url)})`,
          }}
        />
        <div
          style={{
            backgroundColor: 'green',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[0].url)})`,
          }}
        />
        <div
          style={{
            backgroundColor: 'blue',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${getFullMediaUrl(photos[1].url)})`,
          }}
        />
      </div>
    </div>
  )
}

const AboutComponent: FC<Props> = ({ about, memberList }) => {
  const {
    activeMembers,
    exMembers,
  }: { activeMembers: Member[]; exMembers: Member[] } = memberList.reduce(
    (acc, currentMember) => {
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
      <SectionRoot bgImage={bgImage1} bgRepeat="xy">
        <Container>
          <Title withMargin>Настоящий состав</Title>
          <MemberList list={activeMembers} />
        </Container>
      </SectionRoot>
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
