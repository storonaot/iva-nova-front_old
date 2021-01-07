import axios from './axios'

const fetchAlbums = () => axios.get('/albums').then(({ data }) => data)

export default { fetchAlbums }
