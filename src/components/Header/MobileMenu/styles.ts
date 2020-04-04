import styled from 'styled-components'
import media from 'styled-media-query'

import { Theme } from '../../../theme'

import { selectCustomSize, SPACE_1, SPACE_2, SECONDARY_FONT } from '../../../theme'

interface Props {
  theme: Theme
  isActive?: boolean
}

export const MenuWrapper = styled.div`
  position: relative;
  top: 1px;
  z-index: 1;
`

export const Overlay = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: calc(100vh - ${selectCustomSize('headerHeight')});
  background-color: #0000006b;
  top: ${({ isActive }) => (isActive ? 0 : '-101vh')};
  left: 0;
  transition: top 0.5s;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const MenuRoot = styled.nav<Props>`
  position: absolute;
  background-color: #fff;
  top: 0;
  width: 100%;
  padding: ${SPACE_1} 0;
  transition: left 0.5s;
  left: ${({ isActive }) => (isActive ? 0 : '-100vw')};
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const MenuItem = styled.a<Props>`
  display: block;
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  padding: ${SPACE_1} ${SPACE_2};
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.accent2 : 'inherit')};
  cursor: pointer;
`
