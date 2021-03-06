import React, { FC, useState } from 'react'
import styled from 'styled-components'

import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters, { FilterReason } from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import { EventItem, City } from '../../api/types'
import { fetchEventList, fetchEventsCount } from '../../api'
import { COUNT_RECORDS_ON_PAGE } from '../../constants'

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
  listCount: number
}

// TODO сделать контекстный прелоадер?
const Schedule: FC<Props> = ({ list: _list, cityList, listCount: _listCount }) => {
  const [list, setList] = useState(_list)
  const [listCount, setListCount] = useState(_listCount)
  const [page, setPage] = useState(1)
  // const [start, setStart] = useState(0)
  // const [limit, setLimit] = useState(0)

  const [filters, setFilters] = useState<Filters>({ year: null, city: null })

  // const [hhh] = useState({
  //   year: { gt: null, lt: null },
  //   city: { eq: null },
  // })

  // const [ppp] = useState({ start: 0, limit: COUNT_RECORDS_ON_PAGE })

  const getList = async (query?: string) => {
    try {
      const data = await fetchEventList(query)
      const count = await fetchEventsCount(query)

      setList(data)
      setListCount(count)
    } catch (error) {
      console.error(error)
    }
  }

  // пагинацию сбрасываем а фильтрацию? сохраняем?
  const onSearch = searchString => {
    console.log('searchString', searchString)
    // title or place
  }

  const getYearFilter = (year: number | null) => {
    if (year != null) {
      const start = new Date(year, 0, 1).getTime()
      const end = new Date(year, 11, 31).getTime()

      return `date_gt=${start}&date_lt=${end}`
    }

    return null
  }

  const getCityFilter = (cityId: number | null) => {
    if (cityId != null) {
      return `city_eq=${cityId}`
    }

    return null
  }

  const makeQueryFromFilters = (filters: Filters) => {
    let accString = ''

    const cityFilter = getCityFilter(filters.city)
    const yearFilter = getYearFilter(filters.year)

    if (cityFilter) accString = `${accString}&${cityFilter}`
    if (yearFilter) accString = `${accString}&${yearFilter}`

    return accString
  }

  // при обновлении фильтра пагинацию сбрасываем до дефолта
  const onFilter = (reason: FilterReason, id: number | null) => {
    const updatedFilters = { ...filters, [reason]: id }

    setFilters(updatedFilters)

    const query = makeQueryFromFilters(updatedFilters)

    getList(`${query}&_start=${0}&_limit=${COUNT_RECORDS_ON_PAGE}`)
    setPage(1)
  }

  // при переключении страниц нужно учитывать текущие фильтры
  const onPageChange = (_page: number, start: number, limit: number) => {
    const _filters = makeQueryFromFilters(filters)
    const paginationQuery = `_start=${start}&_limit=${limit}`

    getList(_filters ? `${paginationQuery}&${_filters}` : paginationQuery)
    setPage(_page)
  }

  return (
    <Root>
      <Container>
        <Title withMargin>Афиша</Title>
        <ScheduleFilters cityList={cityList} onSearch={onSearch} onFilter={onFilter} />
        <ScheduleList list={list} />
        <Pagination totalRecordsCount={listCount} onChange={onPageChange} page={page} />
      </Container>
    </Root>
  )
}

export default Schedule
