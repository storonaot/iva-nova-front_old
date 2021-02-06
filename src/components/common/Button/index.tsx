/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
// import Link from 'next/link'
// import styled from 'styled-components'

// import {
//   SPACE_3,
//   SECONDARY_FONT,
//   selectCustomSize,
//   TEXT_COLOR,
//   X_SMALL_RADIUS,
// } from '../../../theme'

// interface Props {
//   href: string
//   children: string
//   isGhost?: boolean
//   isBlock?: boolean
// }

// const Btn = styled.a<{ isGhost?: boolean; isBlock?: boolean }>`
//   background-color: ${({ theme: { colors }, isGhost }) =>
//     isGhost ? 'rgba(255, 255, 255, 0.2)' : colors.grayDark};
//   padding: 0 ${SPACE_3};
//   display: inline-block;
//   font-size: 1.375em;
//   font-family: ${SECONDARY_FONT};
//   font-weight: 400;
//   line-height: calc(${selectCustomSize('buttonHeight')} - 5px);
//   height: ${selectCustomSize('buttonHeight')};
//   border-radius: ${X_SMALL_RADIUS};
//   border: 1px solid ${({ isGhost, theme: { colors } }) => (isGhost ? '#fff' : colors.grayDark)};
//   cursor: pointer;
//   color: #fff;
//   width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
//   text-align: center;
//   &:hover {
//     background-color: ${TEXT_COLOR};
//     transition: background-color 0.5s ease;
//   }
// `

// const Button = ({ href, children, isGhost = false, isBlock = false }: Props) => (
//   <Link href={href}>
//     <Btn isGhost={isGhost} isBlock={isBlock}>
//       {children}
//     </Btn>
//   </Link>
// )

// export default Button

import React, { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import s from './styles.module.scss'

interface Props {
  href: string
  children: string
  isGhost?: boolean
  isBlock?: boolean
}

const Button: FC<Props> = ({ href, children, isGhost = false, isBlock = false }) => (
  <Link href={href}>
    <a className={cn(s.button, { [s.isGhost]: isGhost, [s.isBlock]: isBlock })}>{children}</a>
  </Link>
)

export default Button
