import React from 'react'

import Search from './Search'
import Autocomplete from './Autocomplete'

import { yaers, cities } from './data'

import {
  Root,
  SelectControls,
  YearFieldWrapper,
  CityFieldWrapper,
  SearchFieldWrapper,
} from './styles'

const Filters = () => (
  <Root>
    <SelectControls>
      <YearFieldWrapper>
        <Autocomplete options={yaers} label="Год" id="year" />
      </YearFieldWrapper>
      <CityFieldWrapper>
        <Autocomplete options={cities} label="Город" id="cities" />
      </CityFieldWrapper>
    </SelectControls>
    <SearchFieldWrapper>
      <Search placeholder="Название концерта, клуб" />
    </SearchFieldWrapper>
  </Root>
)

export default Filters
