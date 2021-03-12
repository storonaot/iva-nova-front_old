import React, { useEffect, useState } from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import useDebounce from './useDebounce'

interface Props {
  placeholder?: string
  onSearch: (value: string) => void
}

const Search = ({ placeholder, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    onSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <TextField
      variant="outlined"
      margin="dense"
      placeholder={placeholder}
      color="secondary"
      fullWidth
      onChange={event => setSearchTerm(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Search
