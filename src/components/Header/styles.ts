import styled from 'styled-components'
import media from 'styled-media-query'

import Container, { Props as ContainerProps } from '../common/Container'

export const HeaderRoot = styled.div`
  position: relative;
  height: ${({ theme: { customSizes } }) => customSizes.headerHeight};
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.lines}`};
`

export const HeaderInner = styled(Container)<ContainerProps>`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
  background: #fff;
`

export const LogoRoot = styled.div`
  flex: 1 0 auto;
  align-items: center;
  display: flex;
  margin-left: ${({ theme: { spacing } }) => `${spacing.units}px`};
  cursor: pointer;
  ${media.greaterThan('medium')`
    margin-left: 0;
    margin-right: ${({ theme: { spacing } }) => `${spacing.units}px`};
  `}
`

export const LogoWrapper = styled.div`
  max-width: 146px;
  width: 100%;
  min-width: 80px;
`

export const BurgerContainer = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.units * 2}px`};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const SocialsWrapper = styled.div`
  display: none;
  ${media.greaterThan('large')`
    display: block;
  `};
`
