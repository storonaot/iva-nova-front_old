import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU_ITEMS, MenuItem as MenuItemType } from '../../../constants/ui'

import Socials from '../../common/Socials'

import { MenuRoot, MenuItem, Overlay, MenuWrapper } from './styles'

interface Props {
  isActive?: boolean
  setInactive: () => void
}

const MobileMenu = ({ isActive, setInactive }: Props) => {
  const router = useRouter()

  return (
    <MenuWrapper>
      <Overlay isActive={isActive} onClick={setInactive} />
      <MenuRoot isActive={isActive}>
        {MENU_ITEMS.map((menuItem: MenuItemType) => (
          <Link key={menuItem.source} href={menuItem.source}>
            <MenuItem isActive={router.pathname === menuItem.source}>{menuItem.title}</MenuItem>
          </Link>
        ))}
        <Socials size={45} />
      </MenuRoot>
    </MenuWrapper>
  )
}

export default MobileMenu
