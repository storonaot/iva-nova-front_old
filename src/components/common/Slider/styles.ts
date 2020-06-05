// import styled from 'styled-components'
// // import media from 'styled-media-query'

import styled from 'styled-components'
import { SPACE_4 } from '../../../theme'

// const ArrowWrapper = styled.div<{ isShown: boolean }>`
//   opacity: 0.3;
//   top: 50%;
//   transform: translate(-50%);
//   position: absolute;
//   width: 32px;
//   height: 32px;
//   cursor: pointer;
//   display: ${({ isShown }) => (isShown ? 'block' : 'none')};
// `

// export const LeftArrowWrapper = styled(ArrowWrapper)`
//   left: ${SPACE_2};
// `
// export const RightArrowWrapper = styled(ArrowWrapper)`
//   transform: scale(-1);
//   right: 0;
// `

export const Root = styled.div`
  display: grid;
  grid-gap: ${SPACE_4};
  grid-template-columns: repeat(3, 1fr);
`
