/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as ThemeProviderMUI } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'css-wipe'
import '../src/static/stylesheets/global.css'
import { fetchSocialNetworkList } from '../src/api'
import Layout from '../src/components/Layout'

import theme from '../src/theme'
import muiTheme from '../src/theme/muiTheme'

const MyApp = ({ Component, pageProps }) => {
  const [socials, setSocials] = useState([])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const getData = async () => {
    try {
      const socialNetworkList = await fetchSocialNetworkList()
      setSocials(socialNetworkList)
    } catch (error) {
      console.error('error', error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProviderMUI theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout socials={socials}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeProviderMUI>
  )
}

export default MyApp
