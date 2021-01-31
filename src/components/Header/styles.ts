import styled from 'styled-components'
import media from 'styled-media-query'

import { selectCustomSize, LINES_COLOR, SPACE_1, SPACE_2 } from '../../theme'

import Container, { Props as ContainerProps } from '../common/Container'

export const HeaderRoot = styled.div`
  position: relative;
  height: ${selectCustomSize('headerHeight')};
  border-bottom: 1px solid ${LINES_COLOR};
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
`

export const HeaderInner = styled(Container)<ContainerProps>`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
  align-items: center;
`

export const LogoRoot = styled.div`
  flex: 1 0 auto;
  display: flex;
  margin-left: ${SPACE_1};
  cursor: pointer;
  ${media.greaterThan('medium')`
    margin-left: 0;
    margin-right: ${SPACE_1};
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
  padding: 0 ${SPACE_2};
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
