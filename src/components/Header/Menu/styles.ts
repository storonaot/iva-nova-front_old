import styled from 'styled-components'
import media from 'styled-media-query'

export const MenuRoot = styled.nav`
  display: none;
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

interface MenuItemType {
  isActive?: boolean
}

export const MenuItem = styled.a<MenuItemType>`
  font-family: ${({ theme: { fonts } }) => fonts[1]};
  font-weight: 600;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.units}px`};
  white-space: nowrap;
  line-height: ${({ theme: { customSizes } }) => customSizes.headerHeight};
  cursor: pointer;
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.accent2 : 'inherit')};
  ${media.greaterThan('large')`
    padding: ${({ theme: { spacing } }) => `0 ${spacing.units * 1.5}px`};
  `}
`
