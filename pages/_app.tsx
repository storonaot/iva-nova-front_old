// @ts-nocheck

// import NextApp from 'next/app';
// import React from 'react';
// import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// import 'css-wipe';
// import '../global-styles.css';

// const theme = {
//   primary: '#f2f2f2',
// };

// export default class App extends NextApp {
//   componentDidMount() {
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
//   }

//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <StyledThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </StyledThemeProvider>
//     );
//   }
// }

import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'css-wipe'
import '../src/static/stylesheets/global.css'

import theme from '../src/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
