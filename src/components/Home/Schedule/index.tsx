import React from 'react'

import Title from '../../common/Title'
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
      <Heading>
        <Title>Ближайшие концерты</Title>
        <ShowOn tablet desktop>
          <Button href={SCHEDULE_URL}>все концерты</Button>
        </ShowOn>
      </Heading>
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
