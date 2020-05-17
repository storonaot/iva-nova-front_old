import React from 'react'
import Link from 'next/link'
import RhombusImage from '../../../static/svg/rhombus.svg'

import { RhombusWrapper, Root, Date, Year, City, Title, Place, PlaceLink, BuyLink } from './styles'

export interface ScheduleItemTypes {
  id: number
  date: string
  year: string
  title: string
  place: string
  placeHref?: string
  city: string
  buyHref?: string | null
}

interface Props {
  item: ScheduleItemTypes
}

const ScheduleItem = ({ item }: Props) => (
  <Root>
    <Date>{item.date}</Date>
    <Year>{item.year}</Year>
    <City>{item.city}</City>
    <Title>{item.title}</Title>
    {item.placeHref ? (
      <Link href={item.placeHref}>
        <PlaceLink>{item.place}</PlaceLink>
      </Link>
    ) : (
      <Place>{item.place}</Place>
    )}
    {item.buyHref ? (
      <Link href={item.buyHref}>
        <BuyLink>Купить билет</BuyLink>
      </Link>
    ) : (
      <div />
    )}
    <RhombusWrapper>
      <RhombusImage />
    </RhombusWrapper>
  </Root>
)

export default ScheduleItem
