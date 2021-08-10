const SET_RES_PAPER_NAME = 'SET_RES_PAPER_NAME'
const SET_RES_ENAMEL_NAME = 'SET_RES_ENAMEL_NAME'

const initialState = {
  resPaperName: [],
  resEnamelName: [],
}

export default function Main(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state
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
