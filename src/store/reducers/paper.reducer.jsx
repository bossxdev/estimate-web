import getData from '../../../pages/api/estimate'
import * as EndPoints from '../../../pages/api/endPoints'
import { HTTP_STATUS_CODE, RESPONSE_MESSAGE } from '../../utils/constants'
import { message } from 'antd'

const FETCH_PAPER_LIST_REQUEST = 'Paper/FETCH_PAPER_LIST_REQUEST'
const FETCH_PAPER_LIST_SUCCESS = 'Paper/FETCH_PAPER_LIST_SUCCESS'
const FETCH_PAPER_LIST_FAILURE = 'Paper/FETCH_PAPER_LIST_FAILURE'

// const FETCH_PAPER_REQUEST = 'Paper/FETCH_PAPER_REQUEST'
// const FETCH_PAPER_SUCCESS = 'Paper/FETCH_PAPER_SUCCESS'
// const FETCH_PAPER_FAILURE = 'Paper/FETCH_PAPER_FAILURE'

// const CREATE_PAPER_REQUEST = 'Paper/CREATE_PAPER_REQUEST'
// const CREATE_PAPER_SUCCESS = 'Paper/CREATE_PAPER_SUCCESS'
// const CREATE_PAPER_FAILURE = 'Paper/CREATE_PAPER_FAILURE'

// const DELETE_PAPER_REQUEST = 'Paper/DELETE_PAPER_REQUEST'
// const DELETE_PAPER_SUCCESS = 'Paper/DELETE_PAPER_SUCCESS'
// const DELETE_PAPER_FAILURE = 'Paper/DELETE_PAPER_FAILURE'

// const UPDATE_PAPER_REQUEST = 'Paper/UPDATE_PAPER_REQUEST'
// const UPDATE_PAPER_SUCCESS = 'Paper/UPDATE_PAPER_SUCCESS'
// const UPDATE_PAPER_FAILURE = 'Paper/UPDATE_PAPER_FAILURE'

// Initialize State
const initialState = {
  isLoading: false,
  paperList: [],
  paper: {},
  error: {},
}

// Default Reducer
export default function paper(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAPER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PAPER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paperList: action.payload,
      }
    case FETCH_PAPER_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    // case FETCH_PAPER_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case FETCH_PAPER_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     paper: action.payload
    //   }
    // case FETCH_PAPER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case CREATE_PAPER_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case CREATE_PAPER_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case CREATE_PAPER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case UPDATE_PAPER_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case UPDATE_PAPER_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case UPDATE_PAPER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case DELETE_PAPER_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case DELETE_PAPER_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case DELETE_PAPER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    default:
      return state
  }
}

// Action Creators
export const getPaperList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PAPER_LIST_REQUEST,
      })

      const response = await getData.get(EndPoints.PAPER)
      if (response.status === HTTP_STATUS_CODE.OK) {
        dispatch({
          type: FETCH_PAPER_LIST_SUCCESS,
          payload: response.data.data,
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_PAPER_LIST_FAILURE,
      })
    }
  }
}

// export const getPaperListById = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: FETCH_PAPER_REQUEST,
//       })

//       const response = await getData.get(EndPoints.PAPER + `/${id}`)
//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: FETCH_PAPER_SUCCESS,
//           payload: response.data.data,
//         })
//       }
//     } catch (err) {
//       dispatch({
//         type: FETCH_PAPER_FAILURE,
//       })
//     }
//   }
// }

// export const createPaper = (data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: CREATE_PAPER_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.post(EndPoints.PAPER, data, config)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: CREATE_PAPER_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: CREATE_PAPER_FAILURE,
//       })
//     }
//   }
// }

// export const updatePaper = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_PAPER_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.put(
//         EndPoints.PAPER + `/${id}`,
//         data,
//         config
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_PAPER_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_PAPER_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const updateActivePaper = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_PAPER_REQUEST,
//       })
//       let formData = { is_active: data }

//       const response = await getData.put(
//         EndPoints.PAPER + '/active/' + id,
//         formData
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_PAPER_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_PAPER_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const deletePaper = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: DELETE_PAPER_REQUEST,
//       })

//       const response = await getData.delete(EndPoints.PAPER + `/${id}`)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: DELETE_PAPER_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: DELETE_PAPER_FAILURE,
//       })
//     }
//   }
// }
