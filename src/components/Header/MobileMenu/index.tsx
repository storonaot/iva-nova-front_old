import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU_ITEMS, MenuItem as MenuItemType } from '../../../constants/ui'

import Socials from '../../common/Socials'

import { MenuRoot, MenuItem, Overlay, MenuWrapper } from './styles'
import { Socials as SocialsType } from '../../../api/types'

interface Props {
  isActive?: boolean
  setInactive: () => void
  socials: SocialsType
}

const MobileMenu: FC<Props> = ({ isActive, setInactive, socials }) => {
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
        <Socials size={45} socials={socials} />
      </MenuRoot>
    </MenuWrapper>
  )
}

export default MobileMenu
