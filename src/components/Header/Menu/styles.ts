import styled from 'styled-components'
import media from 'styled-media-query'

import {
  SECONDARY_FONT,
  PRIMARY_COLOR,
  SPACE_1,
  selectCustomSize,
  selectSpacing,
} from '../../../theme'

export const MenuRoot = styled.nav`
  display: none;
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}
`

interface MenuItemType {
  isActive?: boolean
}

export const MenuItem = styled.a<MenuItemType>`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  padding: 0 ${SPACE_1};
  white-space: nowrap;
  line-height: ${selectCustomSize('headerHeight')};
  cursor: pointer;
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.secondary : 'inherit')};
  pointer-events: ${({ isActive }) => (isActive ? 'none' : 'inherit')};
  &:hover {
    color: ${PRIMARY_COLOR};
    transition: color 0.5s ease;
  }
  ${media.greaterThan('large')`
    padding:0 ${selectSpacing(1.5)};
  `}
`
