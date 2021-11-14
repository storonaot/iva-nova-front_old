import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

import { SPACE_2, SECONDARY_FONT, SECONDARY_COLOR } from '../../theme'

interface Props {
  href: string
  children: string
  isBlank?: boolean
}

const SpanLink = styled.span`
  font-family: ${SECONDARY_FONT};
  font-size: 1.2em;
  margin-right: ${SPACE_2};
  cursor: pointer;
  text-decoration: underline;
  color: ${SECONDARY_COLOR};
`

const Link = ({ href, children, isBlank }: Props) =>
  isBlank ? (
    <a href={href} target="blank" rel="noopener norefferer">
      <SpanLink>{children}</SpanLink>
    </a>
  ) : (
    <NextLink href={href}>
      <SpanLink>{children}</SpanLink>
    </NextLink>
  )

export default Link
