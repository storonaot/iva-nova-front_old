import styled from 'styled-components'
// import media from 'styled-media-query'

import { SPACE_2 } from '../../../theme'

const ArrowWrapper = styled.div<{ isShown: boolean }>`
  opacity: 0.3;
  top: 50%;
  transform: translate(-50%);
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
`

export const LeftArrowWrapper = styled(ArrowWrapper)`
  left: ${SPACE_2};
`
export const RightArrowWrapper = styled(ArrowWrapper)`
  transform: scale(-1);
  right: 0;
`
