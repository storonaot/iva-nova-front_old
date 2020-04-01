import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Title from '../../common/Title'
import Container from '../../common/Container'
import Button from '../../common/Button'
import { SCHEDULE_URL } from '../../../constants/sources'

import Item from './Item'

const Root = styled.div`
  ${media.greaterThan('medium')`
    margin-top: ${({ theme: { customSizes } }) => customSizes.heroTopOffset};
    padding-top: 82px;
  `}
`

export interface ScheduleItem {
  id: number
  date: string
  year: string
  title: string
  place: string
  city: string
  buyHref: string
}

const schedule = [
  {
    id: 1,
    date: '06.09',
    year: '2019',
    title: 'День рождения группы',
    place: 'Клуб "Китайский Летчик"',
    city: 'Москва',
    buyHref: '',
  },
  {
    id: 2,
    date: '06.09',
    year: '2019',
    title: 'День рождения группы',
    place: 'Клуб "Китайский Летчик"',
    city: 'Москва',
    buyHref: '',
  },
  {
    id: 3,
    date: '06.09',
    year: '2019',
    title: 'День рождения группы',
    place: 'Клуб "Китайский Летчик"',
    city: 'Москва',
    buyHref: '',
  },
  {
    id: 4,
    date: '06.09',
    year: '2019',
    title: 'День рождения группы',
    place: 'Клуб "Китайский Летчик"',
    city: 'Санкт-Петербург',
    buyHref: '',
  },
]

const List = styled.div`
  > * {
    margin-bottom: 8px;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`

const Schedule = () => (
  <Root>
    <Container>
      <div>
        <Title>Ближайшие концерты</Title>
        <Button href={SCHEDULE_URL}>подробнее о группе</Button>
      </div>
      <List>
        {schedule.map((item: ScheduleItem) => (
          <Item key={item.id} data={item} />
        ))}
      </List>
    </Container>
  </Root>
)

export default Schedule
