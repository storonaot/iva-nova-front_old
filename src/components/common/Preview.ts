import styled from 'styled-components'
import media from 'styled-media-query'

import { SPACE_2, SPACE_4 } from '../../theme'

export const PreviewList = styled.div`
  display: flex;
  > * {
    width: 100%;
    ${media.greaterThan('medium')`
      width: 33.33%;
    `}
  }
  ${media.greaterThan('medium')`
    margin: 0 -${SPACE_2};
  `}
`

export interface PreviewItemProps {
  isShown?: boolean
}

export const PreviewItem = styled.div<PreviewItemProps>`
  display: none;
  &:first-child {
    display: block;
  }
  ${media.greaterThan<PreviewItemProps>('medium')`
    display: ${({ isShown = false }) => (isShown ? 'block' : 'none')};
    margin-bottom: ${SPACE_4};
    padding: 0 ${SPACE_2} ${SPACE_2} ${SPACE_2};
  `}
`
