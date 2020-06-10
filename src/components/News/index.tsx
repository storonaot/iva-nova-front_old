import React from 'react'

import Title from '../common/Title'
import NewsList from './List'

import Container from '../common/Container'
import Pagination from '../common/Pagination'
import NewsSectionRoot from '../common/NewsRoot'

const Schedule = () => (
  <NewsSectionRoot>
    <Container>
      <Title withMargin>Новости</Title>
      <NewsList />
      <Pagination />
    </Container>
  </NewsSectionRoot>
)

export default Schedule
