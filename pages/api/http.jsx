import axios from 'axios'
import Cookies from 'js-cookie'
import { HTTP_STATUS_CODE } from '../../src/utils/constants'

const Http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'ManageContent-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
})

Http.interceptors.request.use(
  function (config) {
    const token = Cookies.get('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

Http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (
      error != null &&
      error.response != null &&
      error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
      Cookies.remove('token')
      window.location = '/'
    }
    return Promise.reject(error)
  }
)

export default Http

// for Authen
const AxiosAuthen = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'ManageContent-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
})

AxiosAuthen.interceptors.request.use(
  function (config) {
    const token = Cookies.get('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

AxiosAuthen.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (
      error != null &&
      error.response != null &&
      error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
      Cookies.remove('token')
      window.location = '/'
    }
    return Promise.reject(error)
  }
)
// for Authen

// for get Data
const AxiosGetData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINTS,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'ManageContent-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
})

AxiosGetData.interceptors.request.use(
  function (config) {
    const token = Cookies.get('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

AxiosGetData.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (
      error != null &&
      error.response != null &&
      error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
      Cookies.remove('token')
      window.location = '/'
    }
    return Promise.reject(error)
  }
)

export { AxiosAuthen, AxiosGetData }
