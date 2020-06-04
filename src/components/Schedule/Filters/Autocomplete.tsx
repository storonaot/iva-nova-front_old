import React from 'react'
import AutocompleteMUI from '@material-ui/lab/Autocomplete'
import { InputLabel, TextField } from '@material-ui/core'
import styled from 'styled-components'
import { SPACE_2 } from '../../../theme'

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  label: string
  id: string
}

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const FieldWrapper = styled.div`
  margin-left: ${SPACE_2};
  align-items: center;
  width: 100%;
`

const Autocomplete = ({ options, label, id }: Props) => {
  return (
    <Root>
      <InputLabel>{label}</InputLabel>
      <FieldWrapper>
        <AutocompleteMUI
          id={id}
          options={options}
          getOptionLabel={option => option.label}
          fullWidth
          renderInput={params => {
            return (
              <TextField
                InputLabelProps={params.InputLabelProps}
                InputProps={params.InputProps}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                inputProps={params.inputProps}
                placeholder={label}
                variant="outlined"
                margin="dense"
                disabled={params.disabled}
                fullWidth={params.fullWidth}
                id={params.id}
                size={params.size}
                color="secondary"
              />
            )
          }}
          disablePortal
        />
      </FieldWrapper>
    </Root>
  )
}

export default Autocomplete
