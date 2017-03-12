import { FETCH_RECITERS, SEARCH_QUERY } from '../actions/action-types'

export default function fetchReciters (state = [], action) {
  switch (action.type) {
    case FETCH_RECITERS:
      return action.payload
    case SEARCH_QUERY:
      return action.payload
    default:
      return state
  }
}
