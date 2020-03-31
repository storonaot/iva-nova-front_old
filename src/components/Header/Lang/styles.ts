import styled from 'styled-components'
import media from 'styled-media-query'

interface Props {
  isActive?: boolean
}

export const LangRoot = styled.div<Props>`
  display: flex;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-weight: 600;
`

export const LangInner = styled.div`
  display: flex;
  align-items: center;
`

export const LangItem = styled.div<Props>`
  color: ${({ isActive, theme: { colors } }) => (isActive ? colors.accent2 : 'inherit')};
  &:first-child {
    padding: ${({ theme: { spacing } }) => `0 ${spacing.units}px 0 ${spacing.units * 2}px`};
    border-right: ${({ theme: { colors } }) => `1px solid ${colors.lines}`};
    ${media.greaterThan('medium')`
      padding: ${({ theme: { spacing } }) => `0 ${spacing.units}px`};
    `}
    ${media.greaterThan('large')`
      padding: ${({ theme: { spacing } }) => `0 ${spacing.units}px 0 ${spacing.units * 2}px`};
    `}
  }
  &:last-child {
    padding: ${({ theme: { spacing } }) => `0 ${spacing.units * 2}px 0 ${spacing.units}px`};
    ${media.greaterThan('medium')`
      padding: ${({ theme: { spacing } }) => `0 ${spacing.units}px`};
    `}
    ${media.greaterThan('large')`
      padding: ${({ theme: { spacing } }) => `0 ${spacing.units * 2}px 0 ${spacing.units}px`};
    `}
  }
`
