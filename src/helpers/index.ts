import qs from 'qs'
import { BASE_URL } from '../constants'

export const getFullMediaUrl = (url?: string) => (url ? `${BASE_URL}${url}` : '')

export interface QueryParams {
  // _start: number
  // _limit: number
  _where?: {
    _or: {
      title_contains?: string
      place_contains?: string
    }[]
  }
  city_eq?: number
  date_gt?: number
  date_lt?: number
  _sort?: string
}

export const getQueryString = (queryParams: QueryParams) => qs.stringify(queryParams)
