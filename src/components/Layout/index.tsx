import React, { FC } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { SocialNetworkItem } from '../../api/types'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Content = styled.div`
  flex: 1 0 auto;
`

interface Props {
  socials: SocialNetworkItem[]
}

const Layout: FC<Props> = ({ children, socials }) => {
  return (
    <Root>
      <Header socials={socials} />
      <Content>{children}</Content>
      <Footer socials={socials} />
    </Root>
  )
}

export default Layout
