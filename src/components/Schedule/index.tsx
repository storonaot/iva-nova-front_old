import React, { FC } from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import { EventItem } from '../../api/types'

export const Root = styled.div`
  background-image: url(${bgImage});
`

const Schedule: FC<{ list: EventItem[] }> = ({ list }) => (
  <Root>
    <Container>
      <Title withMargin>Афиша</Title>
      <ScheduleFilters />
      <ScheduleList list={list} />
      <Pagination />
    </Container>
  </Root>
)

export default Schedule
