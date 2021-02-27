import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../src/components/Layout'
import Schedule from '../src/components/Schedule'
import { fetchEventList, fetchCityList } from '../src/api'
import { EventItem, City } from '../src/api/types'

interface Props {
  list: EventItem[]
  cityList: City[]
}

const SchedulePage: FC<Props> = ({ list, cityList }) => (
  <Layout>
    <Schedule list={list} cityList={cityList} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchEventList('_sort=date:DESC')
    const cityList = await fetchCityList()

    return {
      props: { list: data, cityList },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { list: [] },
    }
  }
}

export default SchedulePage
