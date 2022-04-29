import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 5000
})

request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

export default <T = any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
