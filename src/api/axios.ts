import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://159.89.30.102',
})

export default instance
