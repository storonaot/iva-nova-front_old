import axios from './axios'
import { Album, City, EventItem } from './types'

export const fetchAlbumList = (paramsString?: string): Promise<Album[]> =>
  axios.get(paramsString ? `/albums?${paramsString}` : '/albums').then(({ data }) => data)
export const fetchAlbum = (id: string | string[]): Promise<Album[]> =>
  axios.get(`/albums/${id}`).then(({ data }) => data)

export const fetchEventList = (paramsString?: string): Promise<EventItem[]> =>
  axios.get(paramsString ? `/events?${paramsString}` : '/events').then(({ data }) => data)

export const fetchCityList = (paramsString?: string): Promise<City[]> =>
  axios.get(paramsString ? `/cities?${paramsString}` : '/cities').then(({ data }) => data)
