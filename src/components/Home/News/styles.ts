import styled from 'styled-components'
import media from 'styled-media-query'

import CardComp from '../../common/Card'
import { Wrapper as WrapperComp } from '../../common/Container'

import { SECONDARY_FONT, SPACE_2, SPACE_3, SPACE_4 } from '../../../theme'

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
