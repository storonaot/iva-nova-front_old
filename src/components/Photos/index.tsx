import React, { FC, useMemo, useState } from 'react'
import SectionRoot from '../common/SectionRoot'

import bgImage from '../../static/images/bg4.png'
import Title from '../common/Title'
import Container from '../common/Container'
import Tabs from '../common/Tabs'
import PhotoAlbumList from './PhotoAlbumList'
import { PhotoAlbum } from '../../api/types'

interface Props {
  years: number[]
  photoAlbums: PhotoAlbum[]
}

const Photos: FC<Props> = ({ years, photoAlbums }) => {
  const [currentTabId, setCurrentTabId] = useState<string>('0')

  const tabs = useMemo(() => {
    const yearsTabs = years.map(year => ({
      id: `${year}`,
      label: `${year}`,
    }))

    return [{ id: '0', label: 'Все фото' }, ...yearsTabs]
  }, [])

  const selectedPhotoAlbums = useMemo(() => {
    if (currentTabId === '0') return photoAlbums

    return photoAlbums.filter(item => {
      const year = new Date(item.date).getFullYear()
      return `${year}` === currentTabId
    })
  }, [currentTabId])

  return (
    <SectionRoot bgImage={bgImage} opacity={0.5} bgRepeat="x">
      <Container>
        <Title withMargin>Фото</Title>
        <Tabs
          tabs={tabs}
          activeTab={currentTabId}
          onChange={tabId => setCurrentTabId(`${tabId}`)}
        />
        <PhotoAlbumList photoAlbums={selectedPhotoAlbums} />
      </Container>
    </SectionRoot>
  )
}

export default Photos
