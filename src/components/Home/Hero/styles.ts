import styled from 'styled-components'
import media from 'styled-media-query'

import TitleComp from '../../common/Title'
import CardComponent from '../../common/Card'

import bgImage from '../../../static/images/bg1.jpg'
import carrierImage from '../../../static/images/carrier.png'
import treeImage from '../../../static/images/tree.png'

import {
  selectSpacing,
  selectColor,
  selectCustomSize,
  selectFont,
  SPACE_2,
  SPACE_4,
  SPACE_3,
  LINES_COLOR,
  SMALL_RADIUS,
} from '../../../theme/index'

export const Root = styled.div`
  position: relative;
  ${media.greaterThan('medium')`
    background-image: url(${bgImage});
    top: ${selectCustomSize('heroTopOffsetNegative')};
  `}
`

export const CarrierImageContainer = styled.div`
  background-image: url(${carrierImage});
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;
  width: 657px;
  left: 61vw;
`

export const TreeImageContainer = styled.div`
  background-image: url(${treeImage});
  height: 100%;
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;
  width: 830px;
  right: 56vw;
`

export const Card = styled(CardComponent)`
  padding: 0 0 ${SPACE_3} 0;
  border-bottom: 1px solid ${LINES_COLOR};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${media.greaterThan('medium')`
    top: ${selectCustomSize('heroCardTopOffset')};
    border: 1px solid ${LINES_COLOR};
    padding: ${SPACE_4};
  `}
`

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_2};
  ${media.greaterThan('medium')`
    margin-bottom: ${SPACE_3};
  `}
`

export const Content = styled.div`
  color: ${selectColor('text')};
  text-align: center;
  padding: ${SPACE_2};
  ${media.greaterThan('medium')`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${SPACE_2};
    > *:first-child {
      grid-column: span 7;
      grid-row: 1;
    }
    > *:nth-child(2) {
      grid-column: span 7;
      grid-row: 2 / span 1;
    }
    > *:nth-child(3) {
      grid-column: 9 / span 4;
      grid-row: 1;
    }
    > *:nth-child(4) {
      grid-column: 9 / span 4;
      grid-row: 2 / span 2;
    }
    > *:nth-child(5) {
      grid-column: 1 / span 7;
      grid-row: 3 / span 1;
    }
  `}
  ${media.greaterThan('large')`
    > *:nth-child(3) {
      grid-column: 10 / span 4;
      grid-row: 1;
    }
    > *:nth-child(4) {
      grid-column: 10 / span 4;
      grid-row: 2 / span 2;
    }
  `}
`

export const Title = styled(TitleComp)`
  margin-bottom: ${SPACE_2};
  text-align: left;
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const Description = styled.p`
  line-height: 1.2em;
  margin-bottom: ${SPACE_3};
  text-align: left;
  display: inline-block;
  ${media.greaterThan('medium')`
    margin-bottom: ${SPACE_2};
  `}
`

export const SocialsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${SPACE_3};
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const ButtonWrapper = styled.div`
  margin-bottom: ${SPACE_3};
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const SubscribeTitle = styled.h4`
  font-family: ${selectFont('secondary')};
  font-size: 1.5em;
  margin-bottom: ${SPACE_3};
`

export const SubscriptionsWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: center;
    max-width: 497px;
  `}
`

export const SubscriptionButton = styled.a`
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_RADIUS};
  background-color: #fff;
  height: 56px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & + & {
    margin-top: ${SPACE_2};
    ${media.greaterThan('medium')`
      margin-top: 0;
      margin-left: ${SPACE_2};
    `}
  }
`

export const SocialsRoot = styled.div`
  ${media.greaterThan('medium')`
    margin-top: ${selectSpacing(2)};
  `}
`
