import React, { FC, useCallback, useMemo } from 'react'
import RhombusImage from '../../../static/svg/rhombus.svg'

import { EventItem } from '../../../api/types'

import {
  RhombusWrapper,
  Root,
  Date as DateBlock,
  Year,
  City,
  Title,
  Place,
  BuyLink,
} from './styles'

const zeroPadded = (num: number) => {
  if (num < 10) return `0${num}`

  return num
}

const ScheduleItem: FC<{ item: EventItem }> = ({ item }) => {
  const currentTimestamp = Date.now()
  const eventTimestamp = new Date(item.date).getTime()
  const isPastEvent = currentTimestamp > eventTimestamp
  const isFutureEvent = currentTimestamp < eventTimestamp

  const renderEventInfoLink = useCallback(() => {
    if (isPastEvent && item.report_src) {
      return (
        <BuyLink href={item.report_src} rel="noreferrer" target="_blank">
          Отчет
        </BuyLink>
      )
    }

    if (isFutureEvent && item.ticket_src) {
      return (
        <BuyLink rel="noreferrer" target="_blank" href={item.ticket_src}>
          Купить билет
        </BuyLink>
      )
    }

    return <div />
  }, [])

  const currentMonth = useMemo(() => zeroPadded(new Date(item.date).getMonth() + 1), [])
  const currentDate = useMemo(() => zeroPadded(new Date(item.date).getDate()), [])

  return (
    <Root isPastEvent={isPastEvent}>
      <DateBlock>{`${currentDate}.${currentMonth}`}</DateBlock>
      <Year>{new Date(item.date).getFullYear()}</Year>
      <City>{item.city.title}</City>
      <Title>{item.title}</Title>
      <Place>{item.place}</Place>
      {renderEventInfoLink()}
      <RhombusWrapper>
        <RhombusImage />
      </RhombusWrapper>
    </Root>
  )
}

export default ScheduleItem
