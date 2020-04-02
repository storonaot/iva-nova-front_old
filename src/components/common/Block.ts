import styled from 'styled-components'

import { SPACE_2, LINES_COLOR, SMALL_RADIUS, LIGHT_COLOR } from '../../theme'

const Block = styled.div`
  position: relative;
  padding: ${SPACE_2};
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_RADIUS};
  background: ${LIGHT_COLOR};
`

export default Block
