import styled from 'styled-components'
import { SPACE_5, SPACE_4 } from '../../../theme'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACE_5};
`

export const SelectControls = styled.div`
  display: flex;
  width: 70%;
  > div + div {
    margin-left: ${SPACE_4};
  }
`

export const YearFieldWrapper = styled.div`
  width: 25%;
  max-width: 150px;
`

export const CityFieldWrapper = styled.div`
  width: 50%;
  max-width: 286px;
`

export const SearchFieldWrapper = styled.div`
  width: 25%;
  max-width: 364px;
`
