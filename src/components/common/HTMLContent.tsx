import React from 'react'
import styled from 'styled-components'
import { SECONDARY_COLOR, SPACE_4, SPACE_1 } from '../../theme'

interface Props {
  htmlString: string
  style?: { [key: string]: string | number }
}

const Root = styled.div`
  font-size: 0.9em;
  line-height: 1.5em;
  margin-bottom: ${SPACE_4};
  a {
    color: ${SECONDARY_COLOR};
    display: inline-block;
  }
  p {
    // white-space: pre-line;
    margin-bottom: ${SPACE_1};
  }
  p + *:not(p) {
    margin-top: ${SPACE_4};
  }
  b {
    font-weight: 600;
  }
`

const HTMLContent = ({ htmlString, style }: Props) => (
  // eslint-disable-next-line react/no-danger
  <Root dangerouslySetInnerHTML={{ __html: htmlString }} style={style} />
)

export default HTMLContent
