import React from 'react'

import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import Tabs from '../common/Tabs'

import AlbumList from './MusicAlbumList'

import bgImage from '../../static/images/bg2.jpg'

const tabs = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'CD' },
  { id: 3, label: 'DVD' },
  { id: 4, label: 'Синглы' },
  { id: 5, label: 'Что-то еще' },
]

const Music = () => (
  <SectionRoot bgImage={bgImage}>
    <Container>
      <Title withMargin>Музыка</Title>
      <Tabs tabs={tabs} />
      <AlbumList />
    </Container>
  </SectionRoot>
)

export default Music
