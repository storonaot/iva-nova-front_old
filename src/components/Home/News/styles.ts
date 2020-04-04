import styled from 'styled-components'
import media from 'styled-media-query'

import bgImage from '../../../static/images/bg1.jpg'
import CardComp from '../../common/Card'
import { Wrapper as WrapperComp } from '../../common/Container'

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
  position: relative;
`

export const Wrapper = styled(WrapperComp)`
  padding: 0 ${SPACE_2};
  ${media.greaterThan('medium')`
    padding: 0 ${SPACE_4};
  `}
  ${media.greaterThan('large')`
    padding: 0;
  `}
`

export const Card = styled(CardComp)`
  margin-bottom: ${SPACE_3};
`

export const PreviewList = styled.div`
  display: flex;
  > * {
    width: 100%;
    ${media.greaterThan('medium')`
      width: 33.33%;
    `}
  }
  ${media.greaterThan('medium')`
    margin: 0 -${SPACE_2};
  `}
`

export const Preview = styled.div<{ isShown?: boolean }>`
  display: ${({ isShown = false }) => (isShown ? 'block' : 'none')};
  ${media.greaterThan('medium')`
    display: block;
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

const ArrowWrapper = styled.div`
  opacity: 0.3;
  top: 50%;
  transform: translate(-50%);
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const LeftArrowWrapper = styled(ArrowWrapper)`
  left: ${SPACE_2};
`
export const RightArrowWrapper = styled(ArrowWrapper)`
  transform: scale(-1);
  right: 0;
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
