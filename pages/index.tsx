import React from 'react'
import Head from 'next/head'

import Layout from '../src/components/Layout'

const Home = () => (
  <Layout>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    Home
  </Layout>
)

export default Home
