import styled from 'styled-components'
import media from 'styled-media-query'

import { SPACE_1, SPACE_2, SECONDARY_FONT, LINES_COLOR } from '../../../theme'

interface Props {
  isActive?: boolean
}

export const LangRoot = styled.div<Props>`
  display: flex;
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
`

export const LangInner = styled.div`
  display: flex;
  align-items: center;
`

export const LangItem = styled.div<Props>`
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.secondary : 'inherit')};
  &:first-child {
    padding: 0 ${SPACE_1} 0 ${SPACE_2};
    border-right: 1px solid ${LINES_COLOR};
    ${media.greaterThan('medium')`
      padding: ${SPACE_1};
    `}
    ${media.greaterThan('large')`
      padding: 0 ${SPACE_1} 0 ${SPACE_2};
    `}
  }
  &:last-child {
    padding: 0 ${SPACE_2} 0 ${SPACE_1};
    ${media.greaterThan('medium')`
      padding: 0 ${SPACE_1};
    `}
    ${media.greaterThan('large')`
      padding: 0 ${SPACE_2} 0 ${SPACE_1};
    `}
  }
`
