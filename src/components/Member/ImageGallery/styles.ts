import styled from 'styled-components'
import { SPACE_5, SPACE_6 } from '../../../theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${SPACE_5};
  margin-bottom: ${SPACE_6};
`
