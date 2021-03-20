import React, { FC } from 'react'
import Link from '../common/Link'

import Container from '../common/Container'

import { Member } from '../../api/types'

import bgImage from '../../static/images/bg2.jpg'
import SectionRoot from '../common/SectionRoot'
import Title from '../common/Title'
import HTMLContent from '../common/HTMLContent'
import MembersBlock from '../common/MembersBlock'
import { MainHeading, Subtitle } from './styles'

import ImageGallery from './ImageGallery'
import { ABOUT_URL } from '../../constants/sources'

interface Props {
  member: Member
  memberList: Member[]
}

const MONTHES = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

const MemberComp: FC<Props> = ({ member, memberList }) => {
  const date = new Date(member.date_of_birth)
  const monsOgBirthIndex = date.getMonth()
  const monsOgBirth = MONTHES[monsOgBirthIndex]
  const yearOfBirth = date.getFullYear()
  const dateOfBirth = date.getDate()

  return (
    <>
      <SectionRoot bgImage={bgImage} bgRepeat="x">
        <Container>
          <MainHeading>
            <Title>{member.full_name}</Title>
            <Link href={`${ABOUT_URL}`}>О группе</Link>
          </MainHeading>
          <Subtitle>
            (род. {dateOfBirth} {monsOgBirth} в {yearOfBirth} году в г.
            {member.city_of_birth.title}) - {member.specialization}
          </Subtitle>
          <ImageGallery photos={member.photos.slice(0, 4)} />
          <HTMLContent inputString={member.description} />
        </Container>
      </SectionRoot>
      <MembersBlock title="Другие участницы" list={memberList} />
    </>
  )
}

export default MemberComp
