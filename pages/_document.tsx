/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
// @ts-nocheck

// import React from 'react';
// import NextDocument from 'next/document';
// import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';

// export default class Document extends NextDocument {
//   static async getInitialProps(ctx) {
//     const styledComponentSheet = new StyledComponentSheets();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await NextDocument.getInitialProps(ctx);

//       return {
//         ...initialProps,
//         styles: [
//           <React.Fragment key="styles">
//             {initialProps.styles}
//             {styledComponentSheet.getStyleElement()}
//           </React.Fragment>,
//         ],
//       };
//     } finally {
//       styledComponentSheet.seal();
//     }
//   }
// }

import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
