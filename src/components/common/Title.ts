import styled from 'styled-components'

import { SECONDARY_FONT } from '../../theme'

const Title = styled.h1<{ withMargin?: boolean }>`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  font-size: 2.125em;
  line-height: 1.2em;
  margin-bottom: ${({ withMargin = false, theme: { spacing } }) =>
    withMargin ? `${spacing.units * 4}px` : null};
`

export default Title
