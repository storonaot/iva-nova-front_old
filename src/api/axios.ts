import axios from 'axios'
// import { BASE_URL } from '../constants'
// export const BASE_URL = 'http://159.89.30.102'

export const BASE_URL = 'https://agile-headland-93975.herokuapp.com/'

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance
