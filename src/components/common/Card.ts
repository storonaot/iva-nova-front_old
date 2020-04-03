import styled from 'styled-components'
import media from 'styled-media-query'

import { BIG_RADIUS, SPACE_4, LINES_COLOR, REGULAR_RADIUS } from '../../theme'

const Card = styled.div`
  border-radius: ${BIG_RADIUS};
  background-color: #fff;
  border: 1px solid ${LINES_COLOR};
  padding: ${SPACE_4};
  ${media.greaterThan('medium')`
    border-radius: ${REGULAR_RADIUS};
    position: relative;
  `}
`

export default Card
