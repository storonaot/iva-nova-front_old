import React from 'react'

import Search from './Search'
import Autocomplete from './Autocomplete'

import { yaers, cities } from './data'

const Filters = () => (
  <div>
    <div>
      <Autocomplete options={yaers} label="Год" id="year" />
      <Autocomplete options={cities} label="Город" id="cities" />
    </div>
    <Search />
  </div>
)

export default Filters
