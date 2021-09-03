import axios from 'axios'
import * as EndPoints from '../api/endPoints'
import getData from './getData'

//? สินค้า
export const GET_PRODUCT_CATEGORY = async () => {
  const result = await getData.get(EndPoints.PRODUCTS + `/category`)
  return result.data
}

//? รูปแบบสินค้า
export const GET_MATERIAL_CATEGORY = async (token) => {
  const url = 'http://localhost:8000/api/material/material-category?sort=id:ASC'
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return result.data
}

//? ประเภทกระดาษ
export const GET_PAPER_LIST = async (token) => {
  const url = 'http://localhost:8000/api/material/paper-category?_sort=id:ASC'
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return result.data
}

//? การเคลือบ
export const GET_ENAMEL_LIST = async () => {
  const result = await getData.get('/enamels-price?_sort=id:ASC')
  return result.data
}

//? ประเภทเครื่องพิมพ์
export const GET_PRINTER_NAME = async (token) => {
  const url = 'http://localhost:8000/api/material/printer-category?_sort=id:ASC'
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return result.data
}
