import styled from 'styled-components'
import media from 'styled-media-query'

import bgImage from '../../../static/images/bg1.jpg'

import {
  LINES_COLOR,
  SECONDARY_FONT,
  SPACE_2,
  SPACE_3,
  SPACE_5,
  SPACE_4,
  SPACE_6,
} from '../../../theme'

export const Root = styled.div`
  background-image: url(${bgImage});
  padding: ${SPACE_6} 0 ${SPACE_5} 0;
`

export const PreviewList = styled.div`
  display: flex;
  margin: 0 -${SPACE_2};
  > * {
    width: 100%;
    ${media.greaterThan('medium')`
      width: 33.33%;
    `}
  }
`

export const Preview = styled.div<{ isShown?: boolean }>`
  display: ${({ isShown = false }) => (isShown ? 'block' : 'none')};
  ${media.greaterThan('medium')`
    margin-bottom: ${SPACE_4};
    padding: 0 ${SPACE_2} ${SPACE_2} ${SPACE_2};
    &:first-child {
      border-right: 1px solid ${LINES_COLOR};
    }
    &:last-child {
      border-left: 1px solid ${LINES_COLOR};
    }
  `}
`

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Date = styled.span`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  margin-bottom: ${SPACE_2};
  display: inline-block;
`

export const Description = styled.p`
  line-height: 1.2em;
`

export const BottomBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HintText = styled.h5`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  text-align: center;
  margin-right: ${SPACE_4};
`
