import getData from '../../../pages/api/Estimate'
import * as EndPoints from '../../../pages/api/EndPoints'
import { HTTP_STATUS_CODE } from '../../utils/Constants'

const FETCH_MATERIAL_LIST_REQUEST = 'Material/FETCH_MATERIAL_LIST_REQUEST'
const FETCH_MATERIAL_LIST_SUCCESS = 'Material/FETCH_MATERIAL_LIST_SUCCESS'
const FETCH_MATERIAL_LIST_FAILURE = 'Material/FETCH_MATERIAL_LIST_FAILURE'

const FETCH_PAPER_CATEGORY_LIST_REQUEST =
  'Paper_Category/FETCH_PAPER_CATEGORY_LIST_REQUEST'
const FETCH_PAPER_CATEGORY_LIST_SUCCESS =
  'Paper_Category/FETCH_PAPER_CATEGORY_LIST_SUCCESS'
const FETCH_PAPER_CATEGORY_LIST_FAILURE =
  'Paper_Category/FETCH_PAPER_CATEGORY_LIST_FAILURE'

// Initialize State
const initialState = {
  isLoading: false,
  materialList: [],
  material: {},
  error: {},

  isLoading: false,
  paperCategoryList: [],
  paperCategory: {},
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
        material: action.payload,
      }
    case FETCH_MATERIAL_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    case FETCH_PAPER_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PAPER_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paperCategoryList: action.payload,
      }
    case FETCH_PAPER_CATEGORY_LIST_FAILURE:
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

export const getPaperCategoryList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PAPER_CATEGORY_LIST_REQUEST,
      })

      const response = await getData.get(EndPoints.MATERIAL + `/paper-category`)
      if (response.status === HTTP_STATUS_CODE.OK) {
        dispatch({
          type: FETCH_PAPER_CATEGORY_LIST_SUCCESS,
          payload: response.data,
        })
      }
    } catch (err) {
      dispatch({
        type: FETCH_PAPER_CATEGORY_LIST_FAILURE,
      })
    }
  }
}
