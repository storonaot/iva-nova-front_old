import styled from 'styled-components'
import media from 'styled-media-query'

export interface Props {
  mobile?: boolean
  tablet?: boolean
  desktop?: boolean
}

const ShowOn = styled.div<Props>`
  display: ${({ mobile = false }) => (mobile ? 'block' : 'none')};
  ${media.greaterThan<Props>('medium')`
    display: ${({ tablet = false }) => (tablet ? 'block' : 'none')};
  `}
  ${media.greaterThan<Props>('large')`
    display: ${({ desktop = false }) => (desktop ? 'block' : 'none')};
  `}
`

export default ShowOn
