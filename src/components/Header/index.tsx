import React, { FC, useState } from 'react'
import Link from 'next/link'

import Menu from './Menu'
import Socials from '../common/Socials'
import Lang from './Lang'
import MobileMenu from './MobileMenu'

import {
  HeaderRoot,
  HeaderInner,
  LogoRoot,
  BurgerContainer,
  LogoWrapper,
  SocialsWrapper,
} from './styles'

import BurgerIcon from '../../static/svg/burger.svg'
import CrossIcon from '../../static/svg/cross.svg'
import Logo from '../../static/svg/logo.svg'
import { Socials as SocialsType } from '../../api/types'

interface Props {
  socials: SocialsType
}

const Header: FC<Props> = ({ socials }) => {
  const [isMenuActive, setMenuState] = useState(false)

  return (
    <HeaderRoot>
      <HeaderInner padded={false}>
        <BurgerContainer onClick={() => setMenuState(!isMenuActive)}>
          {isMenuActive ? <CrossIcon /> : <BurgerIcon />}
        </BurgerContainer>
        <Link href="/">
          <LogoRoot>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </LogoRoot>
        </Link>
        <Menu />
        <SocialsWrapper>
          <Socials size={30} socials={socials} />
        </SocialsWrapper>
        <Lang />
      </HeaderInner>
      <MobileMenu
        isActive={isMenuActive}
        setInactive={() => setMenuState(false)}
        socials={socials}
      />
    </HeaderRoot>
  )
}

export default Header
