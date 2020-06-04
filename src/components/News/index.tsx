import React from 'react'

import Title from '../common/Title'
import NewsList from './List'

import Container from '../common/Container'
import Pagination from '../common/Pagination'

const Schedule = () => (
  <Container>
    <Title withMargin>Новости</Title>
    <NewsList />
    <Pagination />
  </Container>
)

export default Schedule
