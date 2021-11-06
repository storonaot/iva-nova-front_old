import styled from 'styled-components'
import { SPACE_2 } from '../../../theme'

export const TrackList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & > *:nth-child(odd) {
    margin-right: ${SPACE_2};
  }
  & > *:nth-child(even) {
    margin-left: ${SPACE_2};
  }
`
