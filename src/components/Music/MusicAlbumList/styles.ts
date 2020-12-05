import styled from 'styled-components'
import { SPACE_4 } from '../../../theme'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${SPACE_4};
  grid-template-columns: repeat(3, 1fr);
`
