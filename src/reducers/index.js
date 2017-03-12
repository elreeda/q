import { combineReducers } from 'redux'
import reciters from './reciters-reducer'
import surahs from './surahs-reducer'
import reciter from './reciter-reducer'
import surah from './surah-reducer'

const rootReducer = combineReducers({
  reciters,
  surahs,
  reciter,
  surah
})

export default rootReducer
