import axios from 'axios'
// import { BASE_URL } from '../constants'
// export const BASE_URL = 'http://159.89.30.102'

const BASE_URL = 'http://localhost:1337'

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance
