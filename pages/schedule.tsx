import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../src/components/Layout'
import Schedule from '../src/components/Schedule'
import { fetchEventList, fetchCityList, fetchEventsCount } from '../src/api'
import { EventItem, City } from '../src/api/types'
import { COUNT_RECORDS_ON_PAGE } from '../src/constants'

interface Props {
  list: EventItem[]
  cityList: City[]
  listCount: number
}

const SchedulePage: FC<Props> = ({ list, listCount, cityList }) => (
  <Layout>
    <Schedule list={list} cityList={cityList} listCount={listCount} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { start, limit } = { start: 0, limit: COUNT_RECORDS_ON_PAGE, ...query }

  try {
    const data = await fetchEventList(`_start=${start}&_limit=${limit}`)
    const listCount = await fetchEventsCount()
    const cityList = await fetchCityList()

    return {
      props: { list: data, listCount, cityList },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { list: [] },
    }
  }
}

export default SchedulePage
