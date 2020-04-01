import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ScheduleItem } from '../index'
// import media from 'styled-media-query'

import { selectBorderRadius, selectColor, selectSpacingUnits } from '../../../../theme'

interface Props {
  data: ScheduleItem
}

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: #F7F7F7;
// /* lines */

// border: 1px solid #E3E3E3;
// box-sizing: border-box;
// border-radius: 8px;

const SMALL_BORDER = selectBorderRadius('small')
const LINES_COLOR = selectColor('lines')
const LIGHT_COLOR = selectColor('light')

const Root = styled.div`
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_BORDER};
  background: ${LIGHT_COLOR};
  padding: 16px 14px 15px 44px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-gap: ${selectSpacingUnits(0)}px; */
  /* margin-bottom: ${selectSpacingUnits()}px; */
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


`

const Date = styled.span`
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.2em;
`
const Year = styled.span``
const City = styled.span``
const Title = styled.span``
const Place = styled.span``
const BuyLink = styled.a``

const Item = ({ data }: Props) => (
  <Root>
    <Date>{data.date}</Date>
    <Year>{data.year}</Year>
    <City>{data.city}</City>
    <Title>{data.title}</Title>
    <Place>{data.place}</Place>
    <Link href={data.buyHref}>
      <BuyLink>Купить билет</BuyLink>
    </Link>
  </Root>
)

export default Item
