import React, { FC, useCallback, useMemo, useState } from 'react'

import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import Tabs from '../common/Tabs'

import AlbumList from './MusicAlbumList'

import bgImage from '../../static/images/bg2.jpg'
import { Album } from '../../api/types'

const tabs = [
  { id: 'all', label: 'Все' },
  { id: 'CD', label: 'CD' },
  { id: 'DVD', label: 'DVD' },
]

interface Props {
  list: Album[]
}

const Music: FC<Props> = ({ list }) => {
  const [currentTab, setTab] = useState('all')

  const sortedList = useMemo(
    () =>
      list.sort((a, b) =>
        new Date(a.date).getFullYear() > new Date(b.date).getFullYear() ? -1 : 1,
      ),
    [list],
  )

  const filteredList = useMemo(
    () => (currentTab === 'all' ? sortedList : sortedList.filter(item => item.type === currentTab)),
    [currentTab],
  )

  const onChangeTab = useCallback(tabId => {
    setTab(tabId)
  }, [])

  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Title withMargin>Музыка</Title>
        <Tabs tabs={tabs} activeTab={currentTab} onChange={onChangeTab} />
        <AlbumList list={filteredList} />
      </Container>
    </SectionRoot>
  )
}

export default Music
