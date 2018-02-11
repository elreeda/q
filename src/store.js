import { createStore } from 'redux'
import rootReducer from './rootReducer'

// console.log(rootReducer)

const store = createStore(rootReducer)

export default store
