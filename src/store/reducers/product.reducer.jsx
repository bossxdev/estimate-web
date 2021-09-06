import getData from '../../../pages/api/estimate'
import * as EndPoints from '../../../pages/api/endPoints'
import { HTTP_STATUS_CODE, RESPONSE_MESSAGE } from '../../utils/constants'
import { message } from 'antd'

const FETCH_PRODUCTS_LIST_REQUEST = 'Products/FETCH_PRODUCTS_LIST_REQUEST'
const FETCH_PRODUCTS_LIST_SUCCESS = 'Products/FETCH_PRODUCTS_LIST_SUCCESS'
const FETCH_PRODUCTS_LIST_FAILURE = 'Products/FETCH_PRODUCTS_LIST_FAILURE'

// const FETCH_PRODUCTS_REQUEST = 'Products/FETCH_PRODUCTS_REQUEST'
// const FETCH_PRODUCTS_SUCCESS = 'Products/FETCH_PRODUCTS_SUCCESS'
// const FETCH_PRODUCTS_FAILURE = 'Products/FETCH_PRODUCTS_FAILURE'

// const CREATE_PRODUCTS_REQUEST = 'Products/CREATE_PRODUCTS_REQUEST'
// const CREATE_PRODUCTS_SUCCESS = 'Products/CREATE_PRODUCTS_SUCCESS'
// const CREATE_PRODUCTS_FAILURE = 'Products/CREATE_PRODUCTS_FAILURE'

// const DELETE_PRODUCTS_REQUEST = 'Products/DELETE_PRODUCTS_REQUEST'
// const DELETE_PRODUCTS_SUCCESS = 'Products/DELETE_PRODUCTS_SUCCESS'
// const DELETE_PRODUCTS_FAILURE = 'Products/DELETE_PRODUCTS_FAILURE'

// const UPDATE_PRODUCTS_REQUEST = 'Products/UPDATE_PRODUCTS_REQUEST'
// const UPDATE_PRODUCTS_SUCCESS = 'Products/UPDATE_PRODUCTS_SUCCESS'
// const UPDATE_PRODUCTS_FAILURE = 'Products/UPDATE_PRODUCTS_FAILURE'

// Initialize State
const initialState = {
  isLoading: false,
  productsList: [],
  products: {},
  error: {},
}

// Default Reducer
export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsList: action.payload,
      }
    case FETCH_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    // case FETCH_PRODUCTS_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case FETCH_PRODUCTS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     products: action.payload
    //   }
    // case FETCH_PRODUCTS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case CREATE_PRODUCTS_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case CREATE_PRODUCTS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case CREATE_PRODUCTS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case UPDATE_PRODUCTS_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case UPDATE_PRODUCTS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case UPDATE_PRODUCTS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isLoading: false
    //   }
    // case DELETE_PRODUCTS_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case DELETE_PRODUCTS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    // case DELETE_PRODUCTS_FAILURE:
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
export const getProductsList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCTS_LIST_REQUEST,
      })

      const response = await getData.get(EndPoints.PRODUCTS + `/category`)
      if (response.status === HTTP_STATUS_CODE.OK) {
        dispatch({
          type: FETCH_PRODUCTS_LIST_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCTS_LIST_FAILURE,
      })
    }
  }
}

// export const getProductsListById = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: FETCH_PRODUCTS_REQUEST,
//       })

//       const response = await getData.get(EndPoints.PRODUCTS + `/${id}`)
//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: FETCH_PRODUCTS_SUCCESS,
//           payload: response.data.data,
//         })
//       }
//     } catch (err) {
//       dispatch({
//         type: FETCH_PRODUCTS_FAILURE,
//       })
//     }
//   }
// }

// export const createPRODUCTS = (data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: CREATE_PRODUCTS_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.post(EndPoints.PRODUCTS, data, config)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: CREATE_PRODUCTS_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: CREATE_PRODUCTS_FAILURE,
//       })
//     }
//   }
// }

// export const updateProducts = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_PRODUCTS_REQUEST,
//       })

//       const config = {
//         headers: { 'content-type': 'application/json' },
//       }

//       const response = await getData.put(
//         EndPoints.PRODUCTS + `/${id}`,
//         data,
//         config
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_PRODUCTS_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_PRODUCTS_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const updateActiveProducts = (id, data) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: UPDATE_PRODUCTS_REQUEST,
//       })
//       let formData = { is_active: data }

//       const response = await getData.put(
//         EndPoints.PRODUCTS + '/active/' + id,
//         formData
//       )

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: UPDATE_PRODUCTS_SUCCESS,
//           payload: response.data.data,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       dispatch({
//         type: UPDATE_PRODUCTS_FAILURE,
//       })
//       message.success(RESPONSE_MESSAGE.FAILURE)
//     }
//   }
// }

// export const deleteProducts = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: DELETE_PRODUCTS_REQUEST,
//       })

//       const response = await getData.delete(EndPoints.PRODUCTS + `/${id}`)

//       if (response.status === HTTP_STATUS_CODE.OK) {
//         dispatch({
//           type: DELETE_PRODUCTS_SUCCESS,
//         })
//         message.success(RESPONSE_MESSAGE.SUCCESS)
//       }
//     } catch (err) {
//       message.error(RESPONSE_MESSAGE.FAILURE)
//       dispatch({
//         type: DELETE_PRODUCTS_FAILURE,
//       })
//     }
//   }
// }
