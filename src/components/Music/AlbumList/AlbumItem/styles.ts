import styled from 'styled-components'
import {
  SPACE_1,
  SPACE_2,
  SPACE_3,
  REGULAR_RADIUS,
  LINES_COLOR,
  SECONDARY_FONT,
} from '../../../../theme'

export const ImageRoot = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border: 1px solid ${LINES_COLOR};
  border-radius: ${REGULAR_RADIUS};
  overflow: hidden;
  margin-bottom: ${SPACE_2};
`

export const DescriptionRoot = styled.div`
  display: none;
`

export const Title = styled.p`
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 700;
  font-size: 1.5em;
  font-family: ${SECONDARY_FONT};
  margin-bottom: ${SPACE_1};
`

export const Year = styled.p`
  font-size: 1.2em;
`

export const Content = styled.div`
  text-align: center;
  margin-bottom: ${SPACE_3};
`
