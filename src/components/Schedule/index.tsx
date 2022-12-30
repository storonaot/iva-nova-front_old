import React, { useCallback, FC, useMemo, useState } from 'react'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'
import SectionRoot from '../common/SectionRoot'
// import Title from '../common/Title'
import Heading from '../common/Heading'

import ScheduleList from './List'
import Placeholder from '../common/Placeholder'
import { EventItem, City } from '../../api/types'
import { getQueryString, QueryParams } from '../../helpers'
import { fetchEventList } from '../../api'
import ScheduleFilters, { FilterReason } from './Filters'
import { SCHEDULE_ARCHIVE_URL } from '../../constants/sources'

interface Props {
  list?: EventItem[]
  cityList?: City[]
  listCount?: number
  isArchive?: boolean
  initialParams?: QueryParams
}

const TITLE = 'Афиша'
const ARCHIVE_TITLE = 'Архив событий'

const Schedule: FC<Props> = ({ list: _list, cityList, isArchive = false, initialParams = {} }) => {
  const [list, setList] = useState(_list)
  const [queryParams, setQueryParams] = useState(initialParams)

  const title = useMemo(() => (isArchive ? ARCHIVE_TITLE : TITLE), [isArchive])

  const getEventList = useCallback(async (query?: string) => {
    try {
      const data = await fetchEventList(query)

      setList(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const getUpdatedQueryParams = useCallback(
    (newQueryParamsPart: Partial<QueryParams>) => {
      return {
        ...queryParams,
        ...newQueryParamsPart,
      }
    },
    [queryParams],
  )

  const onSearch = useCallback(
    (searchString: string) => {
      const searchQueryParams = {
        _where: {
          _or: [{ title_contains: searchString }, { place_contains: searchString }],
        },
      }
      const updetedQueryParams = getUpdatedQueryParams(searchQueryParams)
      const queryString = getQueryString(updetedQueryParams)

      getEventList(queryString)
      setQueryParams(updetedQueryParams)
    },
    [getEventList],
  )

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

  const onFilter = useCallback((reason: FilterReason, value: number | null) => {
    const filtersQueryParams = reason === 'city' ? getCityFilter(value) : getYearFilter(value)
    const updetedQueryParams = getUpdatedQueryParams(filtersQueryParams)
    const queryString = getQueryString(updetedQueryParams)

    getEventList(queryString)
    setQueryParams(updetedQueryParams)
  }, [])

  return (
    <SectionRoot bgImage={bgImage} bgRepeat="x">
      <Container>
        {/* <Title withMargin>{title}</Title> */}
        <Heading title={title} btnTitle="архив" btnHref={SCHEDULE_ARCHIVE_URL} />
        {cityList?.length ? (
          <ScheduleFilters cityList={cityList} onSearch={onSearch} onFilter={onFilter} />
        ) : null}
        {list?.length ? <ScheduleList list={list} /> : <Placeholder sectionName={title} />}
        {/* {!isArchive && listCount != null && list?.length ? (
          <Pagination totalRecords={listCount} onChange={onPageChange} page={page} />
        ) : null} */}
      </Container>
    </SectionRoot>
  )
}

export default Schedule
