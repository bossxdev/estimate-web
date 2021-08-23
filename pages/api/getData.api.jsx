import axios from 'axios'
const api = 'http://localhost:4200/process'

export const API_GET_PROCESS = async () => {
  try {
    const result = await axios.get(api)
    return result.data
  } catch (error) {
    console.log(
      '🚀 ~ file: GetAPI.jsx ~ line 8 ~ constAPI_GET_PROCESS= ~ error',
      error
    )
  }
}

//? สินค้า
export const GET_PRODUCT_CATEGORY = async (token) => {
  const url = 'http://localhost:8000/api/products/category/?sort=id:ASC'
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
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
export const GET_ENAMEL_LIST = async (token) => {
  const url = 'http://localhost:8000/api/enamels-price?_sort=id:ASC'
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
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
