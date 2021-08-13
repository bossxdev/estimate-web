import { combineReducers } from 'redux'
import Main from '../main.reducer'
import DocParam from '../docparam.reducer'
import Auth from '../auth.reducer'

export default combineReducers({
  main: Main,
  docParam: DocParam,
  auth: Auth,
})
