import { combineReducers } from 'redux'
import reciters from './Reciters/reducer'
import reciter from './Reciter/reducer'
import playback from './Player/reducer'

export default combineReducers({
  reciters,
  reciter,
  playback
})
