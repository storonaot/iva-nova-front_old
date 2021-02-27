import React, { FC } from 'react'
import ScheduleItem from '../../common/ScheduleItem'
import ContentWrapper from '../../common/ContentWrapper'

import { EventItem } from '../../../api/types'

const ScheduleList: FC<{ list: EventItem[] }> = ({ list }) => (
  <ContentWrapper>
    {list.map((item: EventItem) => (
      <ScheduleItem key={item.id} item={item} />
    ))}
  </ContentWrapper>
)

export default ScheduleList
