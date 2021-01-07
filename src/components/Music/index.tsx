import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'
import Title from '../common/Title'
import Tabs from '../common/Tabs'

import AlbumList from './MusicAlbumList'

import bgImage from '../../static/images/bg2.jpg'
import { getAlbums } from '../../data-access/store/slices/albums'

const tabs = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'CD' },
  { id: 3, label: 'DVD' },
  { id: 4, label: 'Синглы' },
  { id: 5, label: 'Что-то еще' },
]

const Music = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('qwqwe')

    dispatch(getAlbums())
  }, [dispatch])

  return (
    <SectionRoot bgImage={bgImage}>
      <Container>
        <Title withMargin>Музыка</Title>
        <Tabs tabs={tabs} />
        <AlbumList />
      </Container>
    </SectionRoot>
  )
}

export default Music

// import React from 'react'
// import Layout from '../../src/components/Layout'
// import Music from '../../src/components/Music'
// import { getAlbums } from '../../src/data-access/store/slices/albums'
// import { wrapper } from '../../src/data-access/store'

// const MusicPage = () => {
//   // const dispatch = useDispatch()

//   // useEffect(() => {
//   //   dispatch(getAlbums())
//   // }, [dispatch])

//   return (
//     <Layout>
//       <Music />
//     </Layout>
//   )
// }

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(getAlbums())
// })

// export default MusicPage
