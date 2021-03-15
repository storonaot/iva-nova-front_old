import { BASE_URL } from '../constants'

export const getFullMediaUrl = (url?: string) => (url ? `${BASE_URL}${url}` : '')
