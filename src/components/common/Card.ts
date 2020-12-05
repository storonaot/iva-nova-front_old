import styled from 'styled-components'
import media from 'styled-media-query'

import { BIG_RADIUS, LINES_COLOR, REGULAR_RADIUS } from '../../theme'

const Card = styled.div<{ padding?: 'small' | 'regular' }>`
  border-radius: ${BIG_RADIUS};
  background-color: #fff;
  border: 1px solid ${LINES_COLOR};
  height: 100%;
  padding: ${({ padding = 'regular', theme: { spacing } }) =>
    padding === 'regular' ? `${spacing.units * 4}px` : `${spacing.units * 3}px`};
  ${media.greaterThan('medium')`
    border-radius: ${REGULAR_RADIUS};
    position: relative;
  `}
`

export default Card
