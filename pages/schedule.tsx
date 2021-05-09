import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Schedule from '../src/components/Schedule'
import { fetchEventList, fetchCityList, fetchEventsCount } from '../src/api'
import { EventItem, City } from '../src/api/types'
import { COUNT_RECORDS_ON_PAGE } from '../src/constants'

interface Props {
  list?: EventItem[]
  cityList?: City[]
  listCount?: number
  error?: string
}

const SchedulePage: FC<Props> = ({ list, listCount, cityList, error }) =>
  error ? <>{error}</> : <Schedule list={list} cityList={cityList} listCount={listCount} />

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { start, limit } = { start: 0, limit: COUNT_RECORDS_ON_PAGE, ...query }

  try {
    const data = await fetchEventList(`_start=${start}&_limit=${limit}`)
    const listCount = await fetchEventsCount()
    const cityList = await fetchCityList()

    return {
      props: { list: data, listCount, cityList },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { error: error.message },
    }
  }
}

export default SchedulePage
