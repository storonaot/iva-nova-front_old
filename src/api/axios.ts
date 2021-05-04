import axios from 'axios'
// import { BASE_URL } from '../constants'
// export const BASE_URL = 'http://159.89.30.102'

// export const BASE_URL = 'https://agile-headland-93975.herokuapp.com/'
export const BASE_URL = 'https://iva-nova-admin-duw73.ondigitalocean.app/'

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance
