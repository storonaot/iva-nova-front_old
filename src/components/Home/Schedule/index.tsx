import React from 'react'

import Container from '../../common/Container'
import Button from '../../common/Button'
import ShowOn from '../../common/ShowOn'
import Heading from '../../common/Heading'
import ScheduleItem, { ScheduleItemTypes } from '../../common/ScheduleItem'
import { SCHEDULE_URL } from '../../../constants/sources'

import schedule from './data'
import { Root, List } from './styles'

const Schedule = () => (
  <Root>
    <Container>
      <Heading title="Ближайшие концерты" btnTitle="все концерты" btnHref={SCHEDULE_URL} />
      <List>
        {schedule.map((item: ScheduleItemTypes) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </List>
      <ShowOn mobile>
        <Button href={SCHEDULE_URL} isBlock>
          все концерты
        </Button>
      </ShowOn>
    </Container>
  </Root>
)

export default Schedule
