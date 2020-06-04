import React from 'react'

import Title from '../common/Title'
import NewsList from './List'

import Container from '../common/Container'
import Pagination from '../common/Pagination'
import NewsRoot from '../common/NewsRoot'

const Schedule = () => (
  <NewsRoot>
    <Container>
      <Title withMargin>Новости</Title>
      <NewsList />
      <Pagination />
    </Container>
  </NewsRoot>
)

export default Schedule
