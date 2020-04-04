import styled from 'styled-components'

import { SPACE_1, SPACE_2, LINES_COLOR, SMALL_RADIUS, LIGHT_COLOR } from '../../theme'

const Block = styled.div`
  position: relative;
  padding: ${SPACE_2};
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_RADIUS};
  background: ${LIGHT_COLOR};
  margin-bottom: ${SPACE_1};
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`

export default Block
