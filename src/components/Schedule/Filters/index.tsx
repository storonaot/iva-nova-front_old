import React, { FC } from 'react'

import Search from './Search'
import Autocomplete from './Autocomplete'

import { yaers } from './data'

import {
  Root,
  SelectControls,
  YearFieldWrapper,
  CityFieldWrapper,
  SearchFieldWrapper,
} from './styles'
import { City } from '../../../api/types'

const Filters: FC<{ cityList: City[] }> = ({ cityList }) => (
  <Root>
    <SelectControls>
      <YearFieldWrapper>
        <Autocomplete options={yaers} label="Год" id="year" />
      </YearFieldWrapper>
      <CityFieldWrapper>
        <Autocomplete
          options={cityList.map(city => ({ value: city.id, label: city.name }))}
          label="Город"
          id="cities"
        />
      </CityFieldWrapper>
    </SelectControls>
    <SearchFieldWrapper>
      <Search placeholder="Название концерта, клуб" />
    </SearchFieldWrapper>
  </Root>
)

export default Filters
