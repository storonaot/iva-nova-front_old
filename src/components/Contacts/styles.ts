import styled from 'styled-components'
import {
  SECONDARY_FONT,
  SPACE_1,
  SPACE_3,
  SPACE_6,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../theme'

export const Subtitle = styled.h2`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  margin-bottom: ${SPACE_3};
`

export const ContactsBlock = styled.div`
  margin-bottom: ${SPACE_6};
`

export const DocumentTitle = styled.span`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
`

export const DocumentWrapper = styled.div`
  margin: ${SPACE_1} 0;
`

export const Link = styled.a`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  color: ${SECONDARY_COLOR};
  cursor: pointer;
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
