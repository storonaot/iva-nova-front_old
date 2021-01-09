import React, { FC } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { SECONDARY_COLOR, SPACE_4, SPACE_1 } from '../../theme'

interface Props {
  inputString: string
  style?: { [key: string]: string | number }
}

const Root = styled.div`
  font-size: 0.9em;
  line-height: 1.5em;
  margin-bottom: ${SPACE_4};
  white-space: break-spaces;
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
  strong {
    font-weight: 600;
  }
`

const HTMLContent: FC<Props> = ({
  inputString,
  style = {
    fontSize: '0.9em',
  },
}) => (
  <Root style={style}>
    <ReactMarkdown source={inputString} />
  </Root>
)

export default HTMLContent
