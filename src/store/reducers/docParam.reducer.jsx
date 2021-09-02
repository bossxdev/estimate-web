const SET_DOC_OFFER = 'Doc_Param/SET_DOC_OFFER'
const SET_DOC_CALL_PAGE = 'Doc_Param/SET_DOC_CALL_PAGE'
const SET_PAPER = 'Doc_Param/SET_PAPER'
const SET_PRINTER = 'Doc_Param/SET_PRINTER'
const SET_ORDER_GROUP = 'Doc_Param/SET_ORDER_GROUP'

const initialState = {
  docOffer: [
    {
      วันที่: null,
      รหัสเอกสาร: null,
      รายละเอียด: null,
      ลูกค้า: null,
      สถานะลูกค้า: null,
      จำนวนงาน: null,
      ผู้ออกเอกสาร: null,
      Action: null,
    },
  ],
  docCallPage: [
    {
      วันที่: null,
      รหัสเอกสาร: null,
      รายละเอียด: null,
      ลูกค้า: null,
      สถานะลูกค้า: null,
      จำนวนงาน: null,
      ผู้ออกเอกสาร: null,
      Action: null,
    },
  ],
  paper: '',
  printer: '',
  orderGroup: [
    {
      amount1: 0,
      amount2: 0,
      amount3: 0,
      amount4: 0,
      amount5: 0,
      amount6: 0,
      amount7: 0,
      amount8: 0,
    },
  ],
}

export default function DocParam(state = initialState, action) {
  switch (action.type) {
    case SET_DOC_OFFER:
      return {
        ...state,
        docOffer: action.payload,
      }
    case SET_DOC_CALL_PAGE:
      return {
        ...state,
        docCallPage: action.payload,
      }
    case SET_PAPER:
      return {
        ...state,
        paper: action.payload,
      }
    case SET_PRINTER:
      return {
        ...state,
        printer: action.payload,
      }
    case SET_ORDER_GROUP:
      return {
        ...state,
        orderGroup: action.payload,
      }
    default:
      return state
  }
}

export const setDocOffer = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_DOC_OFFER,
      payload: data,
    })
  }
}

export const setDocCallPage = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_DOC_CALL_PAGE,
      payload: data,
    })
  }
}

export const setPaper = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PAPER,
      payload: data,
    })
  }
}

export const setPrinter = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_PRINTER,
      payload: data,
    })
  }
}

export const setOrderGroup = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ORDER_GROUP,
      payload: data,
    })
  }
}
