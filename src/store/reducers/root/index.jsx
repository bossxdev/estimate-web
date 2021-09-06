import { combineReducers } from 'redux'
import Main from '../main.reducer'
import DocParam from '../docParam.reducer'
import Auth from '../auth.reducer'
import Boxes from '../boxes.reducer'
import Products from '../product.reducer'

export default combineReducers({
  main: Main,
  docParam: DocParam,
  auth: Auth,
  boxes: Boxes,
  products: Products,
})
