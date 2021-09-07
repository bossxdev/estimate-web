import { combineReducers } from 'redux'
import DocParam from '../DocParamReducer'
import Auth from '../AuthReducer'
import Boxes from '../BoxesReducer'
import Products from '../ProductReducer'
import Material from '../MaterialReducer'

export default combineReducers({
  docParam: DocParam,
  auth: Auth,
  boxes: Boxes,
  products: Products,
  material: Material,
})
