import React from 'react'
import { MUSIC_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'

const Music = () => (
  <Container>
    <Heading title="Музыка" btnTitle="вся музыка" btnHref={MUSIC_URL} />
  </Container>
)

export default Music
