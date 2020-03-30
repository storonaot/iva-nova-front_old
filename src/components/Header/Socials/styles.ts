import styled from 'styled-components'
import media from 'styled-media-query'

import { Props, DisplayOn, Size } from './index'

export const SocialsRoot = styled.div<Props>`
  display: ${({ displayOn }) => (displayOn === DisplayOn.mobile ? 'flex' : 'none')};
  align-items: center;
  padding: ${({ theme: { spacing }, size }) =>
    size === Size.regular ? `${spacing.units * 2}px` : `${spacing.units}px`};
  ${media.greaterThan<Props>('large')`
    display: ${({ displayOn }) => (displayOn === DisplayOn.mobile ? 'none' : 'flex')};
  `};
`

export const IconWrapper = styled.div<Props>`
  width: ${({ size }) => (size === Size.regular ? '45px' : '30px')};
  height: ${({ size }) => (size === Size.regular ? '45px' : '30px')};
  & + & {
    margin-left: ${({ theme: { spacing } }) => `${spacing.units}px`};
  }
`
