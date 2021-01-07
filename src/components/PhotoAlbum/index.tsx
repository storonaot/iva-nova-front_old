import React from 'react'
import Title from '../common/Title'
import Link from '../common/Link'

import { PHOTOS_URL } from '../../constants/sources'
import Container from '../common/Container'
import bgImage from '../../static/images/bg4.png'
import SectionRoot from '../common/SectionRoot'

import { MainHeading, Description } from './styles'
import Grid from '../common/Grid'

import photos from './data'
import AspectRatioImage from '../common/AspectRatioImage'

const PhotoAlbum = () => {
  return (
    <SectionRoot bgImage={bgImage} opacity={0.5}>
      <Container>
        <MainHeading>
          <Title isUpCase>Autumn Tour 2019</Title>
          <Link href={`${PHOTOS_URL}`}>Все альбомы</Link>
        </MainHeading>
        <Description>
          16-17 февраля 2019 года. Двухдневное музыкально-развлекательно-познавательное путешествие
          в Таллинн с группой Ива-Нова.
        </Description>
        <Grid gridSize={4}>
          {photos.map(photo => {
            return (
              <div key={photo.id} style={{ cursor: 'pointer' }}>
                <AspectRatioImage image={photo.image} aspectRatio="1:1" />
              </div>
            )
          })}
        </Grid>
      </Container>
    </SectionRoot>
  )
}

export default PhotoAlbum
