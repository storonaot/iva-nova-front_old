import React from 'react'
import ScheduleItem, { ScheduleItemTypes } from '../../common/ScheduleItem'

import schedule from './data'

const ScheduleList = () => (
  <div>
    {schedule.map((item: ScheduleItemTypes) => (
      <ScheduleItem key={item.id} item={item} />
    ))}
  </div>
)

export default ScheduleList
