import React, { FC } from 'react'

import Container from '../../common/Container'
import Button from '../../common/Button'
import ShowOn from '../../common/ShowOn'
import Heading from '../../common/Heading'
import ScheduleItem from '../../common/ScheduleItem'
import { SCHEDULE_URL } from '../../../constants/sources'

import { Root, List } from './styles'
import { EventItem } from '../../../api/types'

interface Props {
  events: EventItem[]
}

const Schedule: FC<Props> = ({ events }) => (
  <Root>
    <Container>
      <Heading title="Ближайшие концерты" btnTitle="все концерты" btnHref={SCHEDULE_URL} />
      <List>
        {events.map(item => (
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
