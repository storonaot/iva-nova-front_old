import React from 'react'
import { NEWS_URL } from '../../../constants/sources'

import Heading from '../../common/Heading'
import Container from '../../common/Container'

const News = () => (
  <Container>
    <Heading title="Свежие новости" btnTitle="все новости" btnHref={NEWS_URL} />
  </Container>
)

export default News
