import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'

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
    <Footer />
  </Root>
)

export default Layout
