import React, { useState } from 'react'
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

const Header = () => {
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
          <Socials size={30} />
        </SocialsWrapper>
        <Lang />
      </HeaderInner>
      <MobileMenu isActive={isMenuActive} />
    </HeaderRoot>
  )
}

export default Header
