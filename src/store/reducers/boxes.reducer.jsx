const SET_A = 'Boxes/SET_A'
const SET_B = 'Boxes/SET_B'
const SET_C = 'Boxes/SET_C'
const SET_F = 'Boxes/SET_F'
const SET_P = 'Boxes/SET_P'
const SET_G = 'Boxes/SET_G'
const SET_G_SLOPE = 'Boxes/SET_G_SLOPE'
const SET_UNIT = 'Boxes/SET_UNIT'
const SET_LAYOUT = 'Boxes/SET_LAYOUT'

const initialState = {
  A: null,
  B: null,
  C: null,
  F: null,
  P: null,
  G: null,
  GSlope: null,
  unit: 'mm',
  layout: false,
}

export default function Boxes(state = initialState, action) {
  switch (action.type) {
    case SET_A:
      return {
        ...state,
        A: action.payload,
      }
    case SET_B:
      return {
        ...state,
        B: action.payload,
      }
    case SET_C:
      return {
        ...state,
        C: action.payload,
      }
    case SET_F:
      return {
        ...state,
        F: action.payload,
      }
    case SET_P:
      return {
        ...state,
        P: action.payload,
      }
    case SET_G:
      return {
        ...state,
        G: action.payload,
      }
    case SET_G_SLOPE:
      return {
        ...state,
        GSlope: action.payload,
      }
    case SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      }
    case SET_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      }
    default:
      return state
  }
}

export const setA = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_A,
      payload: data,
    })
  }
}

export const setB = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_B,
      payload: data,
    })
  }
}

export const setC = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_C,
      payload: data,
    })
  }
}

export const setF = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_F,
      payload: data,
    })
  }
}

export const setP = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_P,
      payload: data,
    })
  }
}

export const setG = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G,
      payload: data,
    })
  }
}

export const setGSlope = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_G_SLOPE,
      payload: data,
    })
  }
}

export const setUnit = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_UNIT,
      payload: data,
    })
  }
}

export const setLayout = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_LAYOUT,
      payload: data,
    })
  }
}
