import React from 'react'
import styled from 'styled-components'
import { SECONDARY_COLOR, SPACE_4 } from '../../theme'

interface Props {
  htmlString: string
}

const Root = styled.div`
  line-height: 1.5em;
  margin-bottom: ${SPACE_4};
  a {
    color: ${SECONDARY_COLOR};
    display: inline-block;
  }
  p + *:not(p) {
    margin-top: ${SPACE_4};
  }
`

const HTMLContent = ({ htmlString }: Props) => (
  // eslint-disable-next-line react/no-danger
  <Root dangerouslySetInnerHTML={{ __html: htmlString }} />
)

export default HTMLContent
