import styled from 'styled-components'
import media from 'styled-media-query'

import Container, { Props as ContainerProps } from '../common/Container'

import bgFooter from '../../static/images/bg_footer.jpg'
import imgCarrierFooter from '../../static/images/carrier_footer.png'
import imgTadpolesFooter from '../../static/images/tadpoles_footer.png'

export const FooterRoot = styled.footer`
  background-image: url(${bgFooter});
  padding: 50px 0;
  position: relative;
  overflow: hidden;
`

export const FooterContainer = styled(Container)<ContainerProps>`
  color: #fff;
`

export const FooterInner = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => `${spacing.units * 15}px`};
`

export const CarrierContainer = styled.div`
  position: absolute;
  background-image: url(${imgCarrierFooter});
  opacity: 0.3;
  pointer-events: none;
  width: 429px;
  height: 576px;
  left: 30vw;
  top: 33px;
  background-size: cover;
  ${media.greaterThan('medium')`
    top: -83px;
    left: 50vw;
    width: 692px;
    height: 930px;
  `}
`

export const TadpolesContainer = styled.div`
  display: none;
  position: absolute;
  background-image: url(${imgTadpolesFooter});
  width: 346px;
  height: 556px;
  right: 80vw;
  top: -118px;
  opacity: 0.3;
  pointer-events: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Title = styled.h4`
  ${({ theme: { fonts, spacing } }) => `
    font-family: ${fonts[1]};
    font-weight: 600;
    font-size: 2.125em;
    line-height: 1.2em;
    margin-bottom: ${spacing.units * 4}px;
    max-width: 84%;
    min-width: 242px;
  `}
`
export const SocialsWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => `${spacing.units * 3}px`};
`

export const Copyright = styled.span`
  font-size: 1.125em;
  line-height: 1.5em;
`
