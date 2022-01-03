import styled from 'styled-components'
import BlockComp from '../Block'

import { SPACE_1, SPACE_3, SECONDARY_FONT } from '../../../theme'

export const Block = styled(BlockComp)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${SPACE_1};
  font-family: ${SECONDARY_FONT};
  position: relative;
  margin-bottom: 0;
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

export const IconWrapper = styled.div<{ isDisabled: boolean }>`
  margin-right: ${SPACE_3};
  width: 32px;
  overflow: hidden;
  cursor: pointer;
  cursor: ${({ isDisabled }) => (isDisabled ? 'progress' : 'pointer')};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`

export const SeekSlider = styled.input<{ currentPercentage: string }>`
  cursor: pointer;
  position: absolute;
  width: 100%;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    height: 4px;
    background-color: #fff;
  }
  &::before {
    position: absolute;
    content: '';
    left: 0;
    width: ${({ currentPercentage }) => currentPercentage};
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    opacity: 0;
  }
`
