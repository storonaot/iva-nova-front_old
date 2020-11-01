import styled from 'styled-components'
import { SECONDARY_FONT, SPACE_2, SPACE_5, SECONDARY_COLOR } from '../../../theme'

export const TabList = styled.div`
  display: flex;
  margin-bottom: ${SPACE_5};
`

export const TabItem = styled.div<{ isActive?: boolean }>`
  font-family: ${SECONDARY_FONT};
  font-size: 1.2em;
  margin-right: ${SPACE_2};
  cursor: pointer;
  text-decoration: underline;
  color: ${({ isActive }) => (isActive ? SECONDARY_COLOR : 'initial')};
  &:lastchild {
    margin-right: 0;
  }
`
