import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters, { FilterReason } from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import { EventItem, City } from '../../api/types'
import { fetchEventList } from '../../api'

export const Root = styled.div`
  background-image: url(${bgImage});
`

interface Filters {
  year: number | null
  city: number | null
}

interface Props {
  list: EventItem[]
  cityList: City[]
}

// TODO сделать контекстный прелоадер?

const Schedule: FC<Props> = ({ list: _list, cityList }) => {
  const [list, setList] = useState(_list)
  const [filters, setFilters] = useState<Filters>({ year: null, city: null })

  const getList = useCallback(async (query?: string) => {
    try {
      const data = await fetchEventList(query)
      setList(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const onSearch = useCallback(() => {}, [])

  const makeQueryFromFilters = (filters: Filters) => {
    return Object.entries(filters).reduce((acc, [key, value]) => {
      if (value != null) {
        return acc.length ? `${acc}&${key}_eq=${value}` : `${key}_eq=${value}`
      }

      return acc
    }, '')
  }

  const onFilter = useCallback((reason: FilterReason, id: number | null) => {
    const updatedFilters = { ...filters, [reason]: id }
    setFilters(updatedFilters)

    const query = makeQueryFromFilters(updatedFilters)

    getList(query)
  }, [])

  const onPageChange = useCallback(() => {}, [])

  return (
    <Root>
      <Container>
        <Title withMargin>Афиша</Title>
        <ScheduleFilters cityList={cityList} onSearch={onSearch} onFilter={onFilter} />
        <ScheduleList list={list} />
        <Pagination />
      </Container>
    </Root>
  )
}

export default Schedule
