import getData from '../../../pages/api/estimate'
import * as EndPoints from '../../../pages/api/endPoints'
import { HTTP_STATUS_CODE, RESPONSE_MESSAGE } from '../../utils/constants'
import { message } from 'antd'

const FETCH_MATERIAL_LIST_REQUEST = 'Material/FETCH_MATERIAL_LIST_REQUEST'
const FETCH_MATERIAL_LIST_SUCCESS = 'Material/FETCH_MATERIAL_LIST_SUCCESS'
const FETCH_MATERIAL_LIST_FAILURE = 'Material/FETCH_MATERIAL_LIST_FAILURE'

// Initialize State
const initialState = {
  isLoading: false,
  materialList: {},
  material: {},
  error: {},
}

// Default Reducer
export default function material(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATERIAL_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_MATERIAL_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        materialList: action.payload,
      }
    case FETCH_MATERIAL_LIST_FAILURE:
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
export const getMaterialListById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_MATERIAL_LIST_REQUEST,
      })

      const response = await getData.get(
        EndPoints.MATERIAL + `/material-category` + `/${id}`
      )
      if (response.status === HTTP_STATUS_CODE.OK) {
        dispatch({
          type: FETCH_MATERIAL_LIST_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_MATERIAL_LIST_FAILURE,
      })
    }
  }
}
