import getData from '../../../pages/api/estimate'
import * as EndPoints from '../../../pages/api/endPoints'
import { HTTP_STATUS_CODE, RESPONSE_MESSAGE } from '../../utils/constants'
import { message } from 'antd'

const FETCH_MATERIAL_REQUEST = 'Material/FETCH_MATERIAL_REQUEST'
const FETCH_MATERIAL_SUCCESS = 'Material/FETCH_MATERIAL_SUCCESS'
const FETCH_MATERIAL_FAILURE = 'Material/FETCH_MATERIAL_FAILURE'

// const CREATE_MATERIAL_REQUEST = 'Material/CREATE_MATERIAL_REQUEST'
// const CREATE_MATERIAL_SUCCESS = 'Material/CREATE_MATERIAL_SUCCESS'
// const CREATE_MATERIAL_FAILURE = 'Material/CREATE_MATERIAL_FAILURE'

// const DELETE_MATERIAL_REQUEST = 'Material/DELETE_MATERIAL_REQUEST'
// const DELETE_MATERIAL_SUCCESS = 'Material/DELETE_MATERIAL_SUCCESS'
// const DELETE_MATERIAL_FAILURE = 'Material/DELETE_MATERIAL_FAILURE'

// const UPDATE_MATERIAL_REQUEST = 'Material/UPDATE_MATERIAL_REQUEST'
// const UPDATE_MATERIAL_SUCCESS = 'Material/UPDATE_MATERIAL_SUCCESS'
// const UPDATE_MATERIAL_FAILURE = 'Material/UPDATE_MATERIAL_FAILURE'

// Initialize State
const initialState = {
  isLoading: false,
  materialList: [],
  error: {},
}

// Default Reducer
export default function material(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATERIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_MATERIAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        materialList: action.payload,
      }
    case FETCH_MATERIAL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    // case CREATE_MATERIAL_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case CREATE_MATERIAL_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case CREATE_MATERIAL_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case UPDATE_MATERIAL_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case UPDATE_MATERIAL_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case UPDATE_MATERIAL_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case DELETE_MATERIAL_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case DELETE_MATERIAL_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case DELETE_MATERIAL_FAILURE:
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
export const getMaterialListById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_MATERIAL_REQUEST,
      })

      const response = await getData.get(
        EndPoints.MATERIAL + `/material-category` + `/${id}`
      )
      if (response.status === HTTP_STATUS_CODE.OK) {
        dispatch({
          type: FETCH_MATERIAL_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_MATERIAL_FAILURE,
      })
    }
  }
}

// export const getMaterialListById = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: FETCH_MATERIAL_REQUEST,
//       })

//       const response = await getData.get(EndPoints.MATERIAL + `/${id}`)
//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: FETCH_MATERIAL_SUCCESS,
//           payload: response.data.data,
//         })
//       }
//     } catch (err) {
//       dispatch({
//         type: FETCH_MATERIAL_FAILURE,
//       })
//     }
//   }
// }

// export const createMaterial = (data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: CREATE_MATERIAL_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.post(EndPoints.MATERIAL, data, config)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: CREATE_MATERIAL_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: CREATE_MATERIAL_FAILURE,
//       })
//     }
//   }
// }

// export const updateMaterial = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_MATERIAL_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.put(
//         EndPoints.MATERIAL + `/${id}`,
//         data,
//         config
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_MATERIAL_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_MATERIAL_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const updateActiveMaterial = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_MATERIAL_REQUEST,
//       })
//       let formData = { is_active: data }

//       const response = await getData.put(
//         EndPoints.MATERIAL + '/active/' + id,
//         formData
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_MATERIAL_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_MATERIAL_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const deleteMaterial = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: DELETE_MATERIAL_REQUEST,
//       })

//       const response = await getData.delete(EndPoints.MATERIAL + `/${id}`)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: DELETE_MATERIAL_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: DELETE_MATERIAL_FAILURE,
//       })
//     }
//   }
// }
