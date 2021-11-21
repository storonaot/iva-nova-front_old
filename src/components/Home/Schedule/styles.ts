import styled from 'styled-components'
import media from 'styled-media-query'

import bgImage from '../../../static/images/bg2.jpg'

import { SPACE_3, SPACE_6, SPACE_9, selectCustomSize } from '../../../theme'

export const Root = styled.div`
  padding-top: ${SPACE_6};
  background-image: url(${bgImage});
  ${media.greaterThan('medium')`
    margin-top: ${selectCustomSize('heroTopOffsetNegative')};
    padding-top: calc(${selectCustomSize('heroTopOffset')} + ${SPACE_9});
    padding-bottom: 1px;
  `}
`

export const List = styled.div`
  margin-bottom: ${SPACE_3};
`
