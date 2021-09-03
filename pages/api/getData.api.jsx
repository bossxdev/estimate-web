import * as EndPoints from '../api/endPoints'
import getData from './local'

//? สินค้า
export const GET_PRODUCT_CATEGORY = async () => {
  const result = await getData.get(EndPoints.PRODUCTS + `/category`)
  return result.data
}

//? รูปแบบสินค้า
export const GET_MATERIAL_CATEGORY = async () => {
  const result = await getData.get(EndPoints.MATERIAL + `/material-category`)
  return result.data
}

//? ประเภทกระดาษ
export const GET_PAPER_LIST = async () => {
  const result = await getData.get(EndPoints.MATERIAL + `/paper-category`)
  return result.data
}

//? ประเภทเครื่องพิมพ์
export const GET_PRINTER_NAME = async () => {
  const result = await getData.get(EndPoints.MATERIAL + `printer_category`)
  return result.data
}

//? การเคลือบ
export const GET_ENAMEL_LIST = async () => {
  const result = await getData.get(`/enamels-price`)
  return result.data
}
