import React, { FC } from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import { EventItem, City } from '../../api/types'

export const Root = styled.div`
  background-image: url(${bgImage});
`

interface Props {
  list: EventItem[]
  cityList: City[]
}

const Schedule: FC<Props> = ({ list, cityList }) => (
  <Root>
    <Container>
      <Title withMargin>Афиша</Title>
      <ScheduleFilters cityList={cityList} />
      <ScheduleList list={list} />
      <Pagination />
    </Container>
  </Root>
)

export default Schedule
