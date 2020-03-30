import React, { useState } from 'react'
import Link from 'next/link'

import Menu from './Menu'
import Socials, { DisplayOn, Size } from './Socials'
import Lang from './Lang'
import MobileMenu from './MobileMenu'

import { HeaderRoot, HeaderInner, LogoRoot, BurgerContainer, LogoWrapper } from './styles'

import BurgerIcon from '../../static/svg/burger.svg'
import CrossIcon from '../../static/svg/cross.svg'
import Logo from '../../static/svg/logo.svg'

const Header = () => {
  const [isMenuActive, setMenuState] = useState(false)

  return (
    <HeaderRoot>
      <HeaderInner>
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
        <Socials displayOn={DisplayOn.desktop} size={Size.small} />
        <Lang />
      </HeaderInner>
      <MobileMenu isActive={isMenuActive} />
    </HeaderRoot>
  )
}

export default Header
