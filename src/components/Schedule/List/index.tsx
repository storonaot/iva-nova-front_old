import React, { FC, useMemo } from 'react'
import ScheduleItem from '../../common/ScheduleItem'
import ContentWrapper from '../../common/ContentWrapper'

import { EventItem } from '../../../api/types'

import { Year, Wrapper } from './styles'

const ScheduleList: FC<{ list: EventItem[] }> = ({ list }) => {
  const mapByYear = useMemo(() => {
    return list.reduce((acc, current) => {
      const year = new Date(current.date).getFullYear()

      if (acc[year] != null) {
        return { ...acc, [year]: [...acc[year], current] }
      }

      return { ...acc, [year]: [current] }
    }, {})
  }, [list])

  return (
    <ContentWrapper>
      {Object.keys(mapByYear)
        .sort((a, b) => (a < b ? 1 : -1))
        .map(year => {
          const events = mapByYear[year] || []

          return (
            <Wrapper key={year}>
              <Year>{year} год</Year>
              <div>
                {events.map((item: EventItem) => (
                  <ScheduleItem key={item.id} item={item} />
                ))}
              </div>
            </Wrapper>
          )
        })}
    </ContentWrapper>
  )
}

export default ScheduleList
