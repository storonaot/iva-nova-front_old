import axios from './axios'

export const fetchAlbums = () =>
  axios.get('/albums').then(
    ({ data }) => data,
    error => error,
  )
