import styled from 'styled-components'

import { SPACE_6, SPACE_5 } from '../../theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionRoot = styled.div<{ bgImage?: any; bgRepeat?: boolean }>`
  background-image: url(${({ bgImage }) => bgImage || null});
  padding: ${SPACE_6} 0 ${SPACE_5} 0;
  position: relative;
  background-repeat: ${({ bgRepeat = true }) => (bgRepeat ? 'repeat' : 'no-repeat')};
`

export default SectionRoot
