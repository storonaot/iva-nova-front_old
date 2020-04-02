import React from 'react'
import { VIDEOS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'

const Video = () => (
  <Container>
    <Heading title="Последние видео" btnTitle="все видео" btnHref={VIDEOS_URL} />
  </Container>
)

export default Video
