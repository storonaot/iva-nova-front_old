import React from 'react'
import styled from 'styled-components'
import { SPACE_3 } from '../../../theme'
import ScheduleItem, { ScheduleItemTypes } from '../../common/ScheduleItem'

import schedule from './data'

const Root = styled.div`
  margin-bottom: ${SPACE_3};
`

const ScheduleList = () => (
  <Root>
    {schedule.map((item: ScheduleItemTypes) => (
      <ScheduleItem key={item.id} item={item} />
    ))}
  </Root>
)

export default ScheduleList
