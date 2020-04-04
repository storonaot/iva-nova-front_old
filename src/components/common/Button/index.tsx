import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { SPACE_3, SECONDARY_FONT, selectCustomSize, X_SMALL_RADIUS } from '../../../theme'

interface Props {
  href: string
  children: string
  isGhost?: boolean
  isBlock?: boolean
}

const Btn = styled.a<{ isGhost?: boolean; isBlock?: boolean }>`
  background-color: ${({ theme: { colors }, isGhost }) =>
    isGhost ? 'rgba(255, 255, 255, 0.2)' : colors.grayDark};
  padding: 0 ${SPACE_3};
  display: inline-block;
  font-size: 1.375em;
  font-family: ${SECONDARY_FONT};
  font-weight: 400;
  line-height: calc(${selectCustomSize('buttonHeight')} - 5px);
  height: ${selectCustomSize('buttonHeight')};
  border-radius: ${X_SMALL_RADIUS};
  border: 1px solid ${({ isGhost, theme: { colors } }) => (isGhost ? '#fff' : colors.grayDark)};
  cursor: pointer;
  color: #fff;
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  text-align: center;
`

const Button = ({ href, children, isGhost = false, isBlock = false }: Props) => (
  <Link href={href}>
    <Btn isGhost={isGhost} isBlock={isBlock}>
      {children}
    </Btn>
  </Link>
)

export default Button
