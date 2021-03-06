import React, { FC } from 'react'
import { Pagination as PaginationMUI } from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'

import { COUNT_RECORDS_ON_PAGE } from '../../../constants'

const styles = () => ({
  ul: {
    justifyContent: 'center',
  },
})

interface Props {
  classes: { [key: string]: string }
  // общее количество записей
  totalRecordsCount: number
  onChange: (page: number, start: number, limit: number) => void
  countRecordsOnPage?: number
  page?: number
}

const Pagination: FC<Props> = ({
  classes,
  totalRecordsCount,
  onChange,
  countRecordsOnPage = COUNT_RECORDS_ON_PAGE,
  page,
}: Props) => {
  const count = Math.ceil(totalRecordsCount / countRecordsOnPage)

  return (
    <PaginationMUI
      count={count}
      color="secondary"
      classes={{ ul: classes.ul }}
      page={page}
      onChange={(_, page) => {
        const start = (page - 1) * countRecordsOnPage
        const limit = countRecordsOnPage

        onChange(page, start, limit)
      }}
    />
  )
}

export default withStyles(styles)(Pagination)
