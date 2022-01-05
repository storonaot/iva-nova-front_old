import styled from 'styled-components'
import { SPACE_2 } from '../../../theme'

export const TrackList = styled.div<{ columns: 1 | 2 }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${SPACE_2};
  & > *:nth-child(odd) {
    margin-right: ${({ columns, theme: { spacing } }) => (columns === 2 ? spacing.units * 2 : 0)}px;
  }
  & > *:nth-child(even) {
    margin-left: ${({ columns, theme: { spacing } }) => (columns === 2 ? spacing.units * 2 : 0)}px;
  }
`
