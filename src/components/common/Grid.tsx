import styled from 'styled-components'
import { SPACE_4 } from '../../theme'

const Grid = styled.div<{ gridSize?: number }>`
  display: grid;
  grid-gap: ${SPACE_4};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(${({ gridSize = 3 }) => gridSize}, 1fr);
`

export default Grid
