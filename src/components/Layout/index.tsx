import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Content = styled.div`
  flex: 1 0 auto;
`

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => (
  <Root>
    <Header />
    <Content>{props.children}</Content>
    <Footer></Footer>
  </Root>
)

export default Layout
