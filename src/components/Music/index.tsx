import React, { FC } from 'react'

import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import Tabs from '../common/Tabs'

import AlbumList from './MusicAlbumList'

import bgImage from '../../static/images/bg2.jpg'
import { Album } from '../../api/types'

const tabs = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'CD' },
  { id: 3, label: 'DVD' },
]

interface Props {
  list: Album[]
}

const Music: FC<Props> = ({ list }) => {
  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Title withMargin>Музыка</Title>
        <Tabs tabs={tabs} />
        <AlbumList list={list} />
      </Container>
    </SectionRoot>
  )
}

export default Music
