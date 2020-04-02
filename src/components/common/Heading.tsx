import styled from 'styled-components'
import React from 'react'

import Title from './Title'
import Button from './Button'
import ShowOn from './ShowOn'

import { SPACE_5 } from '../../theme'

export const Root = styled.div`
  margin-bottom: ${SPACE_5};
  display: flex;
  justify-content: space-between;
`

interface Props {
  title: string
  btnTitle: string
  btnHref: string
}

const Heading = ({ title, btnTitle, btnHref }: Props) => (
  <Root>
    <Title>{title}</Title>
    <ShowOn tablet desktop>
      <Button href={btnHref}>{btnTitle}</Button>
    </ShowOn>
  </Root>
)

export default Heading
