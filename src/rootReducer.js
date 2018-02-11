import { combineReducers } from 'redux'
import reciters from './Reciters/reducer'
import reciter from './Reciter/reducer'

export default combineReducers({
  reciters,
  reciter
})
