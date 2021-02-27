import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../src/components/Layout'
import Schedule from '../src/components/Schedule'
import { fetchEventList } from '../src/api'
import { EventItem } from '../src/api/types'

const SchedulePage: FC<{ list: EventItem[] }> = ({ list }) => (
  <Layout>
    <Schedule list={list} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchEventList()
    return {
      props: { list: data },
    }
  } catch (err) {
    console.error('error', err.message)

    return {
      props: { list: [] },
    }
  }
}

export default SchedulePage
