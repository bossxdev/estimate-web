import { combineReducers } from 'redux'
import Main from '../reducers/Main'
import DocParam from '../reducers/DocParam'

export default combineReducers({
  main: Main,
  docParam: DocParam,
})
