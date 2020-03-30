import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  href: string
  children: string
}

const Btn = styled.a`
  ${({ theme: { spacing, fonts, borderRadius, customSizes } }) => `
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0 ${spacing.units * 3}px;
    display: inline-block;
    font-size: 1.375em;
    font-family: ${fonts[1]};
    font-weight: 400;
    line-height: calc(${customSizes.buttonHeight} - 5px);
    height: ${customSizes.buttonHeight};
    border-radius: ${borderRadius};
    border: 1px solid #fff;
    cursor: pointer;
  `}
`

const Button = ({ href, children }: Props) => (
  <Link href={href}>
    <Btn>{children}</Btn>
  </Link>
)

export default Button
