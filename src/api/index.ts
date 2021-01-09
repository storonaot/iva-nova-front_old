import axios from './axios'
import { Album } from './types'

export const fetchAlbumList = (): Promise<Album[]> => axios.get('/albums').then(({ data }) => data)
export const fetchAlbum = (id: string | string[]): Promise<Album[]> =>
  axios.get(`/albums/${id}`).then(({ data }) => data)
