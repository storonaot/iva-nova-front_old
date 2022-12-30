import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
// import { COUNT_RECORDS_ON_PAGE } from '../../src/constants'
import { fetchCityList, fetchEventList, fetchEventsCount } from '../../src/api'
import Schedule from '../../src/components/Schedule'
import { EventItem, City } from '../../src/api/types'

interface Props {
  list?: EventItem[]
  cityList?: City[]
  listCount?: number
  error?: string
}

const ArchivePage: FC<Props> = ({ list, cityList, error, listCount }) => {
  return error ? <>{error}</> : <Schedule list={list} cityList={cityList} listCount={listCount} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const currentTimestamp = Date.now()

  try {
    const cityList = await fetchCityList()
    const listCount = await fetchEventsCount(`date_lt=${currentTimestamp}`)
    const data = await fetchEventList(
      `date_lt=${currentTimestamp}&_limit=${listCount}&_sort=date:DESC`,
    )

    return {
      props: {
        list: data,
        cityList,
        listCount: data.length,
      },
    }
  } catch (error) {
    console.error('error', error.message)

    return {
      props: { error: error.message },
    }
  }
}

export default ArchivePage
