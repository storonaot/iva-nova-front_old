import React from 'react'
import { Pagination as PaginationMUI } from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  ul: {
    justifyContent: 'center',
  },
})

interface Props {
  classes: { [key: string]: string }
}

const Pagination = ({ classes }: Props) => (
  <PaginationMUI count={10} color="secondary" classes={{ ul: classes.ul }} />
)

export default withStyles(styles)(Pagination)
