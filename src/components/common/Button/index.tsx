import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  href: string
  children: string
  isGhost?: boolean
  isBlock?: boolean
}

const Btn = styled.a<{ isGhost?: boolean; isBlock?: boolean }>`
  ${({ theme: { spacing, fonts, borderRadius, customSizes, colors }, isGhost, isBlock }) => `
    background-color: ${isGhost ? 'rgba(255, 255, 255, 0.2)' : colors.grayDark} ;
    padding: 0 ${spacing.units * 3}px;
    display: inline-block;
    font-size: 1.375em;
    font-family: ${fonts.secondary};
    font-weight: 400;
    line-height: calc(${customSizes.buttonHeight} - 5px);
    height: ${customSizes.buttonHeight};
    border-radius: ${borderRadius.xSmall};
    border: 1px solid ${isGhost ? '#fff' : colors.grayDark};
    cursor: pointer;
    color: #fff;
    width: ${isBlock ? '100%' : 'auto'};
    text-align: center;
  `}
`

const Button = ({ href, children, isGhost = false, isBlock = false }: Props) => (
  <Link href={href}>
    <Btn isGhost={isGhost} isBlock={isBlock}>
      {children}
    </Btn>
  </Link>
)

export default Button
