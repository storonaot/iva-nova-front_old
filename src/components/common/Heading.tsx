import styled from 'styled-components'
import React from 'react'

import Title from './Title'
import Button from './Button'
import ShowOn from './ShowOn'

export const Root = styled.div<{ withMargin?: boolean }>`
  margin-bottom: ${({ withMargin = true, theme: { spacing } }) =>
    withMargin ? `${spacing.units * 4}px` : 0};
  display: flex;
  justify-content: space-between;
`

interface Props {
  title: string
  btnTitle: string
  btnHref: string
  withMargin?: boolean
}

const Heading = ({ title, btnTitle, btnHref, withMargin }: Props) => (
  <Root withMargin={withMargin}>
    <Title>{title}</Title>
    <ShowOn tablet desktop>
      <Button href={btnHref}>{btnTitle}</Button>
    </ShowOn>
  </Root>
)

export default Heading
