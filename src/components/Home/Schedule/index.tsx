import React from 'react'

import Container from '../../common/Container'
import Button from '../../common/Button'
import ShowOn from '../../common/ShowOn'
import Heading from '../../common/Heading'
import { SCHEDULE_URL } from '../../../constants/sources'

import schedule from './data'
import Item from './Item'
import { Root, List } from './styles'

export interface ScheduleItem {
  id: number
  date: string
  year: string
  title: string
  place: string
  placeHref?: string
  city: string
  buyHref: string
}

const Schedule = () => (
  <Root>
    <Container>
      <Heading title="Ближайшие концерты" btnTitle="все концерты" btnHref={SCHEDULE_URL} />
      <List>
        {schedule.map((item: ScheduleItem) => (
          <Item key={item.id} data={item} />
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
