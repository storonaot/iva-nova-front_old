import styled from 'styled-components'

import { SPACE_6, SPACE_5 } from '../../theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionRoot = styled.div<{ bgImage?: any; bgRepeat?: 'x' | 'y' | 'xy'; opacity?: number }>`
  padding: ${SPACE_6} 0 ${SPACE_5} 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: ${({ opacity = 1 }) => opacity};
    top: 0;
    background-color: #fff;
    background-image: url(${({ bgImage }) => bgImage || null});
    background-repeat: ${({ bgRepeat = 'xy' }) => {
      if (bgRepeat === 'xy') return 'repeat'

      if (bgRepeat === 'x') return 'repeat-x'
      if (bgRepeat === 'y') return 'repeat-y'

      return 'no-repeat'
    }};
  }
`

export default SectionRoot
