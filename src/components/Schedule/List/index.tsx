import React from 'react'
import ScheduleItem, { ScheduleItemTypes } from '../../common/ScheduleItem'
import ContentWrapper from '../../common/ContentWrapper'

import schedule from './data'

const ScheduleList = () => (
  <ContentWrapper>
    {schedule.map((item: ScheduleItemTypes) => (
      <ScheduleItem key={item.id} item={item} />
    ))}
  </ContentWrapper>
)

export default ScheduleList
