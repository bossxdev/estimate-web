const SET_PRODUCT_NAME = 'Main/SET_PRODUCT_NAME'
const SET_MATERIAL_NAME = 'Main/SET_MATERIAL_NAME'
const SET_PAPER_NAME = 'Main/SET_PAPER_NAME'
const SET_ENAMEL_NAME = 'Main/SET_ENAMEL_NAME'
const SET_PRINTER_NAME = 'Main/SET_PRINTER_NAME'

const initialState = {
  productName: [],
  materialName: [],
  paperName: [],
  enamelName: [],
  printerName: [],
}

export default function Main(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_NAME:
      return {
        ...state,
        productName: action.payload,
      }
    case SET_MATERIAL_NAME:
      return {
        ...state,
        materialName: action.payload,
      }
    case SET_PAPER_NAME:
      return {
        ...state,
        paperName: action.payload,
      }
    case SET_ENAMEL_NAME:
      return {
        ...state,
        enamelName: action.payload,
      }
    case SET_PRINTER_NAME:
      return {
        ...state,
        printerName: action.payload,
      }
    default:
      return state
  }
}

export const setProductName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PRODUCT_NAME,
      payload: data,
    })
  }
}

export const setMaterialName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_MATERIAL_NAME,
      payload: data,
    })
  }
}

export const setPaperName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PAPER_NAME,
      payload: data,
    })
  }
}

export const setEnamelName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ENAMEL_NAME,
      payload: data,
    })
  }
}

export const setPrinterName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PRINTER_NAME,
      payload: data,
    })
  }
}
