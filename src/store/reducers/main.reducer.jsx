const SET_RES_PRODUCT_NAME = 'Main/SET_RES_PRODUCT_NAME'
const SET_RES_MATERIAL_NAME = 'Main/SET_RES_MATERIAL_NAME'
const SET_RES_PAPER_NAME = 'Main/SET_RES_PAPER_NAME'
const SET_RES_ENAMEL_NAME = 'Main/SET_RES_ENAMEL_NAME'
const SET_RES_PRINTER_NAME = 'Main/SET_RES_PRINTER_NAME'

const initialState = {
  resProductName: [],
  resMaterialName: [],
  resPaperName: [],
  resEnamelName: [],
  resPrinterName: [],
}

export default function Main(state = initialState, action) {
  switch (action.type) {
    case SET_RES_PRODUCT_NAME:
      return {
        ...state,
        resProductName: action.payload,
      }
    case SET_RES_MATERIAL_NAME:
      return {
        ...state,
        resMaterialName: action.payload,
      }
    case SET_RES_PAPER_NAME:
      return {
        ...state,
        resPaperName: action.payload,
      }
    case SET_RES_ENAMEL_NAME:
      return {
        ...state,
        resEnamelName: action.payload,
      }
    case SET_RES_PRINTER_NAME:
      return {
        ...state,
        resPrinterName: action.payload,
      }
    default:
      return state
  }
}

export const setResProductName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RES_PRODUCT_NAME,
      payload: data,
    })
  }
}

export const setResMaterialName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RES_MATERIAL_NAME,
      payload: data,
    })
  }
}

export const setResPaperName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RES_PAPER_NAME,
      payload: data,
    })
  }
}

export const setResEnamelName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RES_ENAMEL_NAME,
      payload: data,
    })
  }
}

export const setResPrinterName = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_RES_PRINTER_NAME,
      payload: data,
    })
  }
}
