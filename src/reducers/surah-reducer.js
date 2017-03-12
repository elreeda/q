import { GET_SURAH } from '../actions/action-types'

export default function getReciter (state = null, action) {
  switch (action.type) {
    case GET_SURAH:
      return action.payload
    default:
      return state
  }
}
