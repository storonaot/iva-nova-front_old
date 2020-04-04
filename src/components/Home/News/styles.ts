import styled from 'styled-components'
import media from 'styled-media-query'

import CardComp from '../../common/Card'
import { Wrapper as WrapperComp } from '../../common/Container'
import { PreviewItem as PreviewItemComp, PreviewItemProps } from '../../common/Preview'

import { LINES_COLOR, SECONDARY_FONT, SPACE_2, SPACE_3, SPACE_4 } from '../../../theme'

export const Wrapper = styled(WrapperComp)`
  padding: 0 ${SPACE_2};
  ${media.greaterThan('medium')`
    padding: 0 ${SPACE_4};
  `}
  ${media.greaterThan('large')`
    padding: 0;
  `}
`

export const Card = styled(CardComp)`
  padding: ${SPACE_3};
  margin-bottom: ${SPACE_3};
  ${media.greaterThan('medium')`
    padding: ${SPACE_4};
  `}
`

export const ImageWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`

export const Date = styled.span`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  margin-bottom: ${SPACE_2};
  display: inline-block;
`

export const Description = styled.p`
  line-height: 1.2em;
`

export const BottomBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HintText = styled.h5`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  text-align: center;
  margin-right: ${SPACE_4};
`

export const PreviewItem = styled(PreviewItemComp)`
  ${media.greaterThan<PreviewItemProps>('medium')`
    display: ${({ isShown = false }) => (isShown ? 'block' : 'none')};
    margin-bottom: ${SPACE_4};
    padding: 0 ${SPACE_2} ${SPACE_2} ${SPACE_2};
    &:first-child {
      border-right: 1px solid ${LINES_COLOR};
    }
    &:nth-child(3n) {
      border-left: 1px solid ${LINES_COLOR};
    }
  `}
`
