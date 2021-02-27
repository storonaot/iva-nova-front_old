import React, { FC, useCallback, useMemo } from 'react'
import RhombusImage from '../../../static/svg/rhombus.svg'

import s from './styles.module.scss'

import { EventItem } from '../../../api/types'

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

const zeroPadded = (num: number) => {
  if (num < 10) return `0${num}`

  return num
}

const ScheduleItem: FC<{ item: EventItem }> = ({ item }) => {
  const renderEventInfoLink = useCallback(() => {
    const currentTimestamp = Date.now()
    const event = new Date(item.date).getTime()

    const isPastEvent = currentTimestamp > event
    const isFutureEvent = currentTimestamp < event

    if (isPastEvent && item.report_link != null) {
      return (
        <a className={s.eventInfoLink} href={item.report_link} rel="noreferrer" target="_blank">
          Отчет
        </a>
      )
    }

    if (isFutureEvent && item.ticket_link != null) {
      return (
        <a className={s.eventInfoLink} rel="noreferrer" target="_blank" href={item.ticket_link}>
          Купить билет
        </a>
      )
    }

    return <div />
  }, [])

  const currentMonth = useMemo(() => zeroPadded(new Date(item.date).getMonth() + 1), [])
  const currentDate = useMemo(() => zeroPadded(new Date(item.date).getDate()), [])

  return (
    <div className={s.root}>
      <div className={s.date}>{`${currentDate}.${currentMonth}`}</div>
      <div className={s.year}>{new Date(item.date).getFullYear()}</div>
      <span className={s.city}>{item.city.name}</span>
      <span className={s.title}>{item.title}</span>
      {item.place_link ? (
        <a className={s.place} rel="noreferrer" target="_blank" href={item.place_link}>
          {item.place}
        </a>
      ) : (
        <span className={s.place}>{item.place}</span>
      )}
      {renderEventInfoLink()}
      <div className={s.rhombusWrapper}>
        <RhombusImage />
      </div>
    </div>
  )
}

export default ScheduleItem
