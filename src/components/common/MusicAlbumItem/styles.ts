import styled from 'styled-components'
import {
  SPACE_1,
  SPACE_2,
  SPACE_3,
  SPACE_4,
  REGULAR_RADIUS,
  LINES_COLOR,
  SECONDARY_FONT,
  SECONDARY_COLOR,
} from '../../../theme'

export const ImageRoot = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border: 1px solid ${LINES_COLOR};
  border-radius: ${REGULAR_RADIUS};
  overflow: hidden;
  margin-bottom: ${SPACE_2};
`

export const Title = styled.p`
  text-transform: uppercase;
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

export const Overlay = styled.div`
  position: absolute;
  top: 1000px;
  background-color: ${SECONDARY_COLOR};
  width: 100%;
  height: 100%;
  opacity: 0.95;
  color: #fff;
  font-size: 0.9em;
  padding: ${SPACE_4};

  transition: top 0.5s ease-in;
`

export const OverlayText = styled.div`
  display: flex;
  text-align: center;
  display: flex;
  white-space: pre-wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Paragrarh = styled.p<{ isBold?: boolean }>`
  font-weight: ${({ isBold }) => (isBold ? '600' : 'regular')};
  & + & {
    margin-top: ${SPACE_1};
  }
`

export const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    ${Overlay} {
      top: 0;
      transition: top 0.5s ease-out;
    }
    ${Title} {
      text-decoration: underline;
    }
  }
`
