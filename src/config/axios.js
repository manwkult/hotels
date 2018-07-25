import axios from 'axios'
import environment from './environment'

const baseURL = process.env.NODE_ENV === 'production' ? environment.prod : environment.dev

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = baseURL

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log(error)
    } else {
      console.log('Ha ocurrido un error')
    }
  })

export default axios
