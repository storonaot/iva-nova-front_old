import React from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
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
      <Title>Афиша</Title>
      <ScheduleFilters />
      <ScheduleList />
    </Container>
  </Root>
)

export default Schedule
