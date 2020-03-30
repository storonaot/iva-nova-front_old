import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU_ITEMS, MenuItem as MenuItemType } from '../../../constants/ui'

import Socials, { DisplayOn } from '../Socials'

import { MenuRoot, MenuItem, Overlay } from './styles'

interface Props {
  isActive?: boolean
}

const MobileMenu = ({ isActive }: Props) => {
  const router = useRouter()

  return (
    <div style={{ position: 'relative', top: '1px' }}>
      <Overlay isActive={isActive} />
      <MenuRoot isActive={isActive}>
        {MENU_ITEMS.map((menuItem: MenuItemType) => (
          <Link key={menuItem.source} href={menuItem.source}>
            <MenuItem isActive={router.pathname === menuItem.source}>{menuItem.title}</MenuItem>
          </Link>
        ))}
        <Socials displayOn={DisplayOn.mobile} />
      </MenuRoot>
    </div>
  )
}

export default MobileMenu
