import React from 'react'
import Link from 'next/link'
import { ScheduleItem } from '../index'
import RhombusImage from '../../../../static/svg/rhombus.svg'

import { RhombusWrapper, Root, Date, Year, City, Title, Place, PlaceLink, BuyLink } from './styles'

interface Props {
  data: ScheduleItem
}

const Item = ({ data }: Props) => (
  <Root>
    <Date>{data.date}</Date>
    <Year>{data.year}</Year>
    <City>{data.city}</City>
    <Title>{data.title}</Title>
    {data.placeHref ? (
      <Link href={data.placeHref}>
        <PlaceLink>{data.place}</PlaceLink>
      </Link>
    ) : (
      <Place>{data.place}</Place>
    )}
    <Link href={data.buyHref}>
      <BuyLink>Купить билет</BuyLink>
    </Link>
    <RhombusWrapper>
      <RhombusImage />
    </RhombusWrapper>
  </Root>
)

export default Item
