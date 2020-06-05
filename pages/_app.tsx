/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck

import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as ThemeProviderMUI } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
import 'css-wipe'
import '../src/static/stylesheets/global.css'

import theme from '../src/theme'
import muiTheme from '../src/theme/muiTheme'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProviderMUI theme={muiTheme}>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProviderMUI>
  )
}

export default MyApp
