/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import AutocompleteMUI from '@material-ui/lab/Autocomplete'
import { InputLabel, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

interface Classes {
  [key: string]: string
}

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  label: string
  id: string
  classes: Classes
}

const Root = styled.div`
  display: flex;
  align-items: center;
`

const styles = () => ({
  root: {
    width: 300,
  },
  rootLabel: {
    marginRight: 16,
  },
})

const Autocomplete = ({ options, label, id, classes }: Props) => {
  return (
    <Root>
      <InputLabel classes={{ root: classes.rootLabel }}>{label}</InputLabel>
      <div>
        <AutocompleteMUI
          id={id}
          options={options}
          getOptionLabel={option => option.label}
          classes={{
            root: classes.root,
            focused: classes.focused,
            inputRoot: classes.inputRoot,
            input: classes.input,
            inputFocused: classes.inputFocused,
          }}
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
                // classes={{
                //   root: classes.inputRoot,
                // }}
              />
            )
          }}
          disablePortal
        />
      </div>
    </Root>
  )
}

export default withStyles(styles)(Autocomplete)
