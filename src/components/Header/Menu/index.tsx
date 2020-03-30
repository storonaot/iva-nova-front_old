import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU_ITEMS, MenuItem as MenuItemType } from '../../../constants/ui'

import { MenuRoot, MenuItem } from './styles'

const Menu = () => {
  const router = useRouter()
  return (
    <MenuRoot>
      {MENU_ITEMS.map((menuItem: MenuItemType) => (
        <Link key={menuItem.source} href={menuItem.source}>
          <MenuItem isActive={router.pathname === menuItem.source}>{menuItem.title}</MenuItem>
        </Link>
      ))}
    </MenuRoot>
  )
}
export default Menu
