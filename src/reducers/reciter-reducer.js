import { GET_RECITER } from '../actions/action-types'

export default function getReciter (state = null, action) {
  switch (action.type) {
    case GET_RECITER:
      return action.payload
    default:
      return state
  }
}
