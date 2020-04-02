import styled from 'styled-components'
import media from 'styled-media-query'

export interface Props {
  padded?: boolean
}

const Container = styled.div<Props>`
  max-width: ${({ theme: { customSizes } }) => customSizes.conteinerMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme: { spacing }, padded = true }) => (padded ? `0 ${spacing.units * 2}px` : 0)};
  ${media.greaterThan('medium')`
    padding: ${({ theme: { spacing } }) => `0 ${spacing.units * 2}px`};
  `}
`

export default Container
