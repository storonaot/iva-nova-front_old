import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Root = styled.div`
  ${media.greaterThan('medium')`
    margin-top: ${({ theme: { customSizes } }) => customSizes.heroTopOffset};
  `}
`

const Schedule = () => <Root>Schedule</Root>

export default Schedule
