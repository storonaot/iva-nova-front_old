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
