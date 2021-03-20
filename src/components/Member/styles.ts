import styled from 'styled-components'
import { SECONDARY_FONT, SPACE_2, SPACE_4 } from '../../theme'

export const Subtitle = styled.div`
  font-family: ${SECONDARY_FONT};
  margin-top: ${SPACE_2};
  font-size: 1.5em;
  margin-bottom: ${SPACE_4};
`

export const MainHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
