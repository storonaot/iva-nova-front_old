import styled from 'styled-components'
import BlockComp from '../Block'

import { SPACE_1, SPACE_3, SECONDARY_FONT } from '../../../theme'

export const Block = styled(BlockComp)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${SPACE_1};
  font-family: ${SECONDARY_FONT};
  > *:first-child {
    grid-column: 1;
    grid-row: 1 / span 2;
  }
  > *:nth-child(2) {
    grid-column: 2 / span 10;
    grid-row: 1;
    white-space: nowrap;
    grid-row: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > *:nth-child(3) {
    grid-column: 12 / span 1;
    grid-row: 1;
  }
  > *:nth-child(4) {
    grid-column: 2 / span 11;
    grid-row: 2;
  }
`

export const IconWrapper = styled.div`
  margin-right: ${SPACE_3};
  width: 32px;
  overflow: hidden;
`

export const TimeLineWrapper = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
`

export const TimeLine = styled.div<{ lineColor?: string; width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  position: absolute;
  background-color: ${({ lineColor, theme: { colors } }) =>
    lineColor === 'accent' ? colors.accent2 : colors.lightGray};
`
