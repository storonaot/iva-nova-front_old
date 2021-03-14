import styled from 'styled-components'
import media from 'styled-media-query'

import { SPACE_2, SPACE_3 } from '../../../theme'

import ContainerComp from '../../common/Container'

import carrierImage from '../../../static/images/huba.png'

export const HubaImageContainer = styled.div`
  width: 100%;
  height: 438px;
  background-image: url(${carrierImage});
  position: absolute;
  z-index: 0;
  background-repeat: no-repeat;
  pointer-events: none;
  bottom: -30px;
  left: 16px;
  background-position: right top;
`

export const Container = styled(ContainerComp)`
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

export const LeftBlock = styled.div`
  margin-bottom: ${SPACE_2};
  ${media.greaterThan('medium')`
    min-width: 60%; margin-right: 58px;
  `}
`

export const RightBlock = styled.div`
  text-align: center;
  min-height: 387px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${media.greaterThan('medium')`
    min-width: calc(40% - 58px);
    min-height: auto;
    text-align: left;
    justify-content: flex-start;
  `}
`

export const TracksWrapper = styled.div`
  margin-bottom: ${SPACE_3};
`
