import React from 'react'
import styled from 'styled-components'
import { SECONDARY_COLOR, SPACE_4, SPACE_5 } from '../../theme'

const Root = styled.div`
  display: flex;
  margin-bottom: ${SPACE_5};
`

const Control = styled.a`
  color: ${SECONDARY_COLOR};
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.1em;
  & + & {
    margin-left: ${SPACE_4};
  }
`

const Controls = () => (
  <Root>
    <Control>{'<'} Предыдущая</Control>
    <Control>Следующая {'>'}</Control>
  </Root>
)

export default Controls
