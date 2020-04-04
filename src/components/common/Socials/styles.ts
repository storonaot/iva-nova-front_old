import styled from 'styled-components'
import { SPACE_1 } from '../../../theme'

export const SocialsRoot = styled.div<{ padded: boolean }>`
  align-items: center;
  padding: ${({ theme: { spacing }, padded }) => (padded ? `${spacing.units * 2}px` : 0)};
  display: flex;
`

export const IconWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  & + & {
    margin-left: ${SPACE_1};
  }
`
