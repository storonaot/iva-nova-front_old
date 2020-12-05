import styled from 'styled-components'
import { SECONDARY_FONT, SPACE_2, SPACE_5, SECONDARY_COLOR, SPACE_1 } from '../../../theme'

export const TabList = styled.div`
  display: flex;
  margin-bottom: ${SPACE_5};
  flex-wrap: wrap;
`

export const TabItem = styled.div<{ isActive?: boolean }>`
  font-family: ${SECONDARY_FONT};
  font-size: 1.2em;
  margin-right: ${SPACE_2};
  cursor: pointer;
  text-decoration: underline;
  color: ${({ isActive }) => (isActive ? SECONDARY_COLOR : 'initial')};
  margin-top: ${SPACE_1};
  &:lastchild {
    margin-right: 0;
  }
`
