import getData from '../../../pages/api/Estimate'
import * as EndPoints from '../../../pages/api/EndPoints'
import { HTTP_STATUS_CODE, RESPONSE_MESSAGE } from '../../utils/Constants'
import { message } from 'antd'

const FETCH_PRODUCTS_LIST_REQUEST = 'Products/FETCH_PRODUCTS_LIST_REQUEST'
const FETCH_PRODUCTS_LIST_SUCCESS = 'Products/FETCH_PRODUCTS_LIST_SUCCESS'
const FETCH_PRODUCTS_LIST_FAILURE = 'Products/FETCH_PRODUCTS_LIST_FAILURE'

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
