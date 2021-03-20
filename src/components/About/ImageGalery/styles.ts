import styled from 'styled-components'

import { SPACE_2 } from '../../../theme'

const BaseRow = styled.div`
  display: grid;
  height: 300px;
  grid-gap: ${SPACE_2};
`

export const FirstRow = styled(BaseRow)`
  grid-template-columns: 9fr 7fr 4fr;
  margin-bottom: ${SPACE_2};
`

export const SecondRow = styled(BaseRow)`
  grid-template-columns: 4fr 9fr 7fr;
`

export const PhotoItem = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: center center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`
