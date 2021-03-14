import styled from 'styled-components'
import media from 'styled-media-query'

import Block from '../Block'

import {
  PRIMARY_COLOR,
  SPACE_1,
  SPACE_2,
  SPACE_3,
  SPACE_5,
  SECONDARY_FONT,
  selectSpacing,
} from '../../../theme'

export const RhombusWrapper = styled.div`
  position: absolute;
  width: 11px;
  height: 63px;
  top: ${SPACE_2};
  left: ${SPACE_1};
`

export const Root = styled(Block)`
  padding-left: ${SPACE_5};
  padding-right: ${SPACE_3};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  > *:first-child {
    grid-column: span 1;
    grid-row: 1;
  }
  > *:nth-child(2) {
    grid-column: 2 / span 1;
    grid-row: 1;
  }
  > *:nth-child(3) {
    grid-column: 3 / span 2;
    grid-row: 1;
  }
  > *:nth-child(4) {
    grid-column: span 4;
    grid-row: 2;
  }
  > *:nth-child(5) {
    grid-column: span 4;
    grid-row: 3;
  }
  > *:nth-child(6) {
    grid-column: span 4;
    grid-row: 4;
  }
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${SPACE_1};
    padding-left: ${SPACE_3};
    > *:first-child {
      grid-column: 1 / span 2;
      grid-row: 1;
    }
    > *:nth-child(2) {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    > *:nth-child(3) {
      grid-column: 9 / span 2;
      grid-row: 1 / span 2;
    }
    > *:nth-child(4) {
      grid-column: 3 / span 8;
      grid-row: 1;
    }
    > *:nth-child(5) {
      grid-column: 3 / span 8;
      grid-row: 2;
    }
    > *:nth-child(6) {
      grid-column: 11 / span 3;
      grid-row: 1 / span 2;
    }
  `}
`

export const Date = styled.span`
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.2em;
  ${media.greaterThan('medium')`
    font-size: 1.625em;
    justify-self: center;
  `}
`
export const Year = styled.span`
  font-size: 1.125em;
  line-height: 1.2em;
  ${media.greaterThan('medium')`
    justify-self: center;
  `}
`
export const City = styled.span`
  font-size: 1.125em;
  line-height: 1.2em;
  margin-bottom: ${SPACE_1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.greaterThan('small')`
    justify-self: end;
  `}
  ${media.greaterThan('medium')`
    margin-bottom: 0;
    align-self: center;
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
    justify-self: initial;
  `}
`
export const Title = styled.span`
  font-family: ${SECONDARY_FONT};
  font-size: 1.375em;
  line-height: 1.2em;
  font-weight: 600;
  margin-bottom: ${SPACE_1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.greaterThan('medium')`
    margin-bottom: 0;
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
  `}
`
export const Place = styled.span`
  line-height: 1.2em;
  margin-bottom: ${selectSpacing(1.5)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.greaterThan('medium')`
    margin-bottom: 0;
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
  `}
`

export const BuyLink = styled.a`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.2em;
  text-decoration-line: underline;
  color: ${PRIMARY_COLOR};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.greaterThan('medium')`
    align-self: center;
    justify-self: end;
    overflow: initial;
    text-overflow: initial;
  `}
`
