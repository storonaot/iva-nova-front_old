import React, { FC, useMemo } from 'react'

import Search from './Search'
import Autocomplete from './Autocomplete'

import {
  Root,
  SelectControls,
  YearFieldWrapper,
  CityFieldWrapper,
  SearchFieldWrapper,
} from './styles'
import { City } from '../../../api/types'
import { getYears } from './utils'

export type FilterReason = 'year' | 'city'

interface Props {
  cityList: City[]
  onSearch: (query: string) => void
  onFilter: (reason: FilterReason, id: number | null) => void
}

const Filters: FC<Props> = ({ cityList, onFilter, onSearch }) => {
  const yearsOptions = useMemo(
    () => getYears('desc').map(year => ({ label: `${year}`, value: `${year}` })),
    [],
  )

  return (
    <Root>
      <SelectControls>
        <YearFieldWrapper>
          <Autocomplete
            options={yearsOptions}
            label="Год"
            id="year"
            onChange={id => {
              onFilter('year', id)
            }}
          />
        </YearFieldWrapper>
        <CityFieldWrapper>
          <Autocomplete
            options={cityList.map(city => ({ value: city.id, label: city.title }))}
            label="Город"
            id="city"
            onChange={id => {
              onFilter('city', id)
            }}
          />
        </CityFieldWrapper>
      </SelectControls>
      <SearchFieldWrapper>
        <Search placeholder="Название концерта, клуб" onSearch={onSearch} />
      </SearchFieldWrapper>
    </Root>
  )
}

export default Filters
