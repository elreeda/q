import { FETCH_SURAHS } from '../actions/action-types'

export default function fetchReciters (state = null, action) {
  switch (action.type) {
    case FETCH_SURAHS:
      return action.payload
    default:
      return state
  }
}
