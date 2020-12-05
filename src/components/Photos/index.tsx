import React from 'react'
import SectionRoot from '../common/SectionRoot'

import bgImage from '../../static/images/bg4.png'
import Title from '../common/Title'
import Container from '../common/Container'
import Tabs from '../common/Tabs'
import PhotoAlbumList from './PhotoAlbumList'

const tabs = [
  { id: 1, label: 'Все фото' },
  { id: 2, label: '2020' },
  { id: 3, label: '2019' },
  { id: 4, label: '2018' },
  { id: 5, label: '2017' },
  { id: 6, label: '2016' },
  { id: 7, label: '2015' },
  { id: 8, label: '2014' },
  { id: 9, label: '2013' },
  { id: 10, label: '2012' },
  { id: 11, label: '2011' },
  { id: 12, label: '2010' },
  { id: 13, label: '2009' },
  { id: 14, label: '2008' },
  { id: 15, label: '2007' },
  { id: 16, label: '2006' },
  { id: 17, label: '2005' },
  { id: 18, label: '2004' },
  { id: 19, label: '2003' },
]
const Photos = () => (
  <SectionRoot bgImage={bgImage} opacity={0.5}>
    <Container>
      <Title withMargin>Фото</Title>
      <Tabs tabs={tabs} />
      <PhotoAlbumList />
    </Container>
  </SectionRoot>
)

export default Photos
