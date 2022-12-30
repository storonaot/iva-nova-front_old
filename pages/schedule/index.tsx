import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Schedule from '../../src/components/Schedule'
import { fetchEventList, fetchCityList, fetchEventsCount } from '../../src/api'
import { EventItem, City } from '../../src/api/types'
import { getQueryString, QueryParams } from '../../src/helpers'

interface Props {
  list?: EventItem[]
  cityList?: City[]
  listCount?: number
  error?: string
  initialParams: QueryParams
}

const SchedulePage: FC<Props> = ({ list, listCount, cityList, error, initialParams }) =>
  error ? (
    <>{error}</>
  ) : (
    <Schedule list={list} cityList={cityList} listCount={listCount} initialParams={initialParams} />
  )

export const getServerSideProps: GetServerSideProps = async () => {
  const currentTimestamp = Date.now().toString()

  try {
    // const listCount = await fetchEventsCount(`date_gt=${currentTimestamp}`)
    const listCount = await fetchEventsCount(`date_lt=${currentTimestamp}`)

    const params = {
      _limit: listCount,
      date_lt: currentTimestamp,
      _sort: 'date:ASC',
    }

    const data = await fetchEventList(getQueryString(params))
    // const data = await fetchEventList(`date_gt=${currentTimestamp}&_limit=${100}&_sort=date:ASC`)
    const cityList = await fetchCityList()

    return {
      props: { list: data, listCount, cityList, initialParams: params },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { error: error.message },
    }
  }
}

export default SchedulePage
