import React, { FC, useState } from 'react'

import qs from 'qs'
import Title from '../common/Title'
import Pagination from '../common/Pagination'

import ScheduleFilters, { FilterReason } from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import { EventItem, City } from '../../api/types'
import { fetchEventList, fetchEventsCount } from '../../api'
import { COUNT_RECORDS_ON_PAGE } from '../../constants'
import SectionRoot from '../common/SectionRoot'

interface Props {
  list: EventItem[]
  cityList: City[]
  listCount: number
}

interface QueryParams {
  _start: number
  _limit: number
  _where?: {
    _or: {
      title_contains?: string
      place_contains?: string
    }[]
  }
  city_eq?: number
  date_gt?: number
  date_lt?: number
}

const initialPaginationQueryParams = {
  _start: 0,
  _limit: COUNT_RECORDS_ON_PAGE,
}

const initialQueryParams = {
  ...initialPaginationQueryParams,
}

const initialPage = 1

const Schedule: FC<Props> = ({ list: _list, cityList, listCount: _listCount }) => {
  const [list, setList] = useState(_list)
  const [listCount, setListCount] = useState(_listCount)

  const [queryParams, setQueryParams] = useState(initialQueryParams)
  // TODO? как на основании параметров старт и лимит вычислять номер текущей страницы?
  const [page, setPage] = useState(initialPage)

  const getEventList = async (query?: string) => {
    try {
      const data = await fetchEventList(query)
      const count = await fetchEventsCount(query)

      setList(data)
      setListCount(count)
    } catch (error) {
      console.error(error)
    }
  }

  const updateComponentState = (newQueryParams: QueryParams, page?: number) => {
    if (page != null) {
      setPage(page)
    } else {
      setPage(initialPage)
    }

    setQueryParams(newQueryParams)
  }

  const getYearFilter = (year: number | null) => {
    const FIRST_MONTH_ON_YEAR = 0
    const FIRST_DATE_ON_YEAR = 1
    const LAST_MONTH_ON_YEAR = 11
    const LAST_DATE_ON_YEAR = 31

    const startPeriod =
      year === null ? undefined : new Date(year, FIRST_MONTH_ON_YEAR, FIRST_DATE_ON_YEAR).getTime()

    const endPeriod =
      year === null ? undefined : new Date(year, LAST_MONTH_ON_YEAR, LAST_DATE_ON_YEAR).getTime()

    return { date_gt: startPeriod, date_lt: endPeriod }
  }

  const getCityFilter = (id: number | null) => ({
    city_eq: id == null ? undefined : id,
  })

  const getQueryString = (queryParams: QueryParams) => qs.stringify(queryParams)

  const getUpdatedQueryParams = (
    newQueryParamsPart: Partial<QueryParams>,
    isPaginationParams = false,
  ) => {
    const baseParams = {
      ...queryParams,
      ...newQueryParamsPart,
    }

    // если переключаем страницы, то сохраняем фильтры и поиск, если изменяем фильтры или поиск,
    // то сбрасываем пагинацию к initial значению
    return isPaginationParams
      ? baseParams
      : {
          ...baseParams,
          ...initialPaginationQueryParams,
        }
  }

  const onSearch = (searchString: string) => {
    const searchQueryParams = {
      _where: {
        _or: [{ title_contains: searchString }, { place_contains: searchString }],
      },
    }
    const updetedQueryParams = getUpdatedQueryParams(searchQueryParams)
    const queryString = getQueryString(updetedQueryParams)

    getEventList(queryString)
    updateComponentState(updetedQueryParams)
  }

  const onFilter = (reason: FilterReason, value: number | null) => {
    const filtersQueryParams = reason === 'city' ? getCityFilter(value) : getYearFilter(value)
    const updetedQueryParams = getUpdatedQueryParams(filtersQueryParams)
    const queryString = getQueryString(updetedQueryParams)

    getEventList(queryString)
    updateComponentState(updetedQueryParams)
  }

  const onPageChange = (newPage: number, start: number, limit: number) => {
    const paginationQueryParams = { _start: start, _limit: limit }
    const updetedQueryParams = getUpdatedQueryParams(paginationQueryParams, true)
    const queryString = getQueryString(updetedQueryParams)

    getEventList(queryString)
    updateComponentState(updetedQueryParams, newPage)
  }

  return (
    <SectionRoot bgImage={bgImage} bgRepeat="x">
      <Container>
        <Title withMargin>Афиша</Title>
        <ScheduleFilters cityList={cityList} onSearch={onSearch} onFilter={onFilter} />
        <ScheduleList list={list} />
        <Pagination totalRecords={listCount} onChange={onPageChange} page={page} />
      </Container>
    </SectionRoot>
  )
}

export default Schedule
