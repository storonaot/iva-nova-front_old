import styled from 'styled-components'
import media from 'styled-media-query'

import TitleComp from '../../common/Title'

import bgImage from '../../../static/images/bg1.jpg'
import mainPhoto from './main_photo.jpg'
import carrierImage from '../../../static/images/carrier.png'
import treeImage from '../../../static/images/tree.png'

import {
  selectBorderRadius,
  selectSpacingUnits,
  selectColor,
  selectCustomSize,
  selectFont,
} from '../../../theme/index'

export const Root = styled.div`
  position: relative;
  ${media.greaterThan('medium')`
    background-image: url(${bgImage});
    top: ${selectCustomSize('heroTopOffset')};
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

export const Card = styled.div`
  border-bottom-left-radius: ${selectBorderRadius('big')};
  border-bottom-right-radius: ${selectBorderRadius('big')};
  background-color: #fff;
  padding-bottom: ${selectSpacingUnits(3)};
  border-bottom: 1px solid ${selectColor('lines')};
  ${media.greaterThan('medium')`
    border-radius: ${selectBorderRadius('regular')};
    position: relative;
    top: ${selectCustomSize('heroCardTopOffset')};
    padding: ${selectSpacingUnits(4)};
    border: 1px solid ${selectColor('lines')};
    margin-left: -${selectSpacingUnits(2)};
    margin-right: -${selectSpacingUnits(2)};
  `}
`

// 16:9
export const AspectRatioBox = styled.div`
  height: 0;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  margin-bottom: ${selectSpacingUnits(2)};
`

export const AspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${mainPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  color: ${selectColor('text')};
  text-align: center;
  padding: ${selectSpacingUnits(2)};
  ${media.greaterThan('medium')`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
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
  margin-bottom: ${selectSpacingUnits(2)};
  text-align: left;
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const Description = styled.p`
  line-height: 1.2em;
  margin-bottom: ${selectSpacingUnits(3)};
  text-align: left;
  display: inline-block;
  ${media.greaterThan('medium')`
    margin-bottom: ${selectSpacingUnits(2)};
  `}
`

export const SocialsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${selectSpacingUnits(3)};
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const ButtonWrapper = styled.div`
  margin-bottom: ${selectSpacingUnits(3)};
  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const SubscribeTitle = styled.h4`
  font-family: ${selectFont('secondary')};
  font-size: 1.5em;
  margin-bottom: ${selectSpacingUnits(3)};
`

export const SubscriptionsWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: center;
    max-width: 497px;
  `}
`

export const SubscriptionButton = styled.a`
  border: 1px solid ${selectColor('lines')};
  border-radius: ${selectBorderRadius('small')};
  background-color: #fff;
  height: 56px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & + & {
    margin-top: ${selectSpacingUnits(2)};
    ${media.greaterThan('medium')`
      margin-top: 0;
      margin-left: ${selectSpacingUnits(2)};
    `}
  }
`

export const SocialsRoot = styled.div`
  ${media.greaterThan('medium')`
    margin-top: ${selectSpacingUnits(2)};
  `}
`
