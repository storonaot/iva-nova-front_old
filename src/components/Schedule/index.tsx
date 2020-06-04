import React from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'

export const Root = styled.div`
  background-image: url(${bgImage});
`

const Schedule = () => (
  <Root>
    <Container>
      <Title withMargin>Афиша</Title>
      <ScheduleFilters />
      <ScheduleList />
      <Pagination />
    </Container>
  </Root>
)

export default Schedule
