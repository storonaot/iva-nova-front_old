import axios from './axios'

const fetchAlbums = () =>
  axios.get('/albums').then(
    response => ({ response }),
    error => ({ error }),
  )

export default { fetchAlbums }
