import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

import { SPACE_2, SECONDARY_FONT, SECONDARY_COLOR } from '../../theme'

interface Props {
  href: string
  children: string
}

const SpanLink = styled.span`
  font-family: ${SECONDARY_FONT};
  font-size: 1.2em;
  margin-right: ${SPACE_2};
  cursor: pointer;
  text-decoration: underline;
  color: ${SECONDARY_COLOR};
`

const Link = ({ href, children }: Props) => (
  <NextLink href={href}>
    <SpanLink>{children}</SpanLink>
  </NextLink>
)

export default Link
