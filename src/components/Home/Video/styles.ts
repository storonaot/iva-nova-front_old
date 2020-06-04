import styled from 'styled-components'
import media from 'styled-media-query'

import CardComp from '../../common/Card'

import { SPACE_3, SECONDARY_FONT, SPACE_4, SPACE_2 } from '../../../theme'

interface VideoItem {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  description: string
}

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Description = styled.p`
  text-align: center;
  font-family: ${SECONDARY_FONT};
  line-height: 1.25em;
`

export const Card = styled(CardComp)`
  height: 100%;
`

export const PreviewItem = styled.div`
  margin-bottom: ${SPACE_4};
  &:not(:first-child) {
    display: none;
  }
  ${media.greaterThan('medium')`
    margin-bottom: 0;
    padding: 0 ${SPACE_2} ${SPACE_2} ${SPACE_2};
    &:not(:first-child) {
      display: block;
    }
    &+&: {
      margin-left: ${SPACE_2}
    }
  `}
`
