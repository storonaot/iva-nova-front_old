import styled from 'styled-components'

const Title = styled.h1`
  ${({ theme: { fonts } }) => `
    font-family: ${fonts.secondary};
    font-weight: 600;
    font-size: 2.125em;
    line-height: 1.2em;
  `}
`

export default Title
