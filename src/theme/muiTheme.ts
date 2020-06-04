import { createMuiTheme } from '@material-ui/core/styles'

import { COLORS } from '../constants/ui'

export default createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
})
