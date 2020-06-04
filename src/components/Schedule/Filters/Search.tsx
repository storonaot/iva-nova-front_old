import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

interface Props {
  placeholder?: string
}

const Search = ({ placeholder }: Props) => (
  <TextField
    variant="outlined"
    margin="dense"
    placeholder={placeholder}
    color="secondary"
    fullWidth
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon color="disabled" fontSize="small" />
        </InputAdornment>
      ),
    }}
  />
)

export default Search
