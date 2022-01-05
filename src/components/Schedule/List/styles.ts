import styled from 'styled-components'
import media from 'styled-media-query'

import { SPACE_2, SPACE_4, SECONDARY_FONT } from '../../../theme'

export const Wrapper = styled.div`
  margin-bottom: ${SPACE_4};
`

export const Year = styled.span`
  font-family: ${SECONDARY_FONT};
  font-size: 1.375em;
  line-height: 1.2em;
  font-weight: 600;
  margin-bottom: ${SPACE_2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  ${media.greaterThan('medium')`
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
  `}
`
