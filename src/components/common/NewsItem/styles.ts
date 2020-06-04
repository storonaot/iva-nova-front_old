import styled from 'styled-components'

import { SECONDARY_FONT, SPACE_2, SPACE_3, LINES_COLOR } from '../../../theme'

export const PreviewItem = styled.div`
  position: relative;
  &:nth-child(3n + 2),
  &:nth-child(3n) {
    &::before {
      background-color: ${LINES_COLOR};
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: -${SPACE_2};
    }
  }
`

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Date = styled.span`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  margin-bottom: ${SPACE_2};
  display: inline-block;
`

export const Description = styled.p`
  line-height: 1.2em;
`
