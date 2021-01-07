import axios from './axios'
import { Album } from './types'

export const fetchAlbums = (): Promise<Album[]> => axios.get('/albums').then(({ data }) => data)
