import React from 'react'
import styled from 'styled-components'
import { Pagination } from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'

import Title from '../common/Title'
import ScheduleFilters from './Filters'
import ScheduleList from './List'

import Container from '../common/Container'
import bgImage from '../../static/images/bg2.jpg'

export const Root = styled.div`
  background-image: url(${bgImage});
`

const styles = () => ({
  ul: {
    justifyContent: 'center',
  },
})

interface Props {
  classes: { [key: string]: string }
}

const Schedule = ({ classes }: Props) => (
  <Root>
    <Container>
      <Title withMargin>Афиша</Title>
      <ScheduleFilters />
      <ScheduleList />
      <Pagination count={10} color="secondary" classes={{ ul: classes.ul }} />
    </Container>
  </Root>
)

export default withStyles(styles)(Schedule)
