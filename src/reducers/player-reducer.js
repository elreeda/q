import { PLAY, PAUSE } from '../actions/action-types'

const initialState = {
  isPlaying: false,
  file: null
}

export default function getReciter (state = initialState, action) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        isPlaying: true
      }
    case PAUSE:
      return {
        ...state,
        isPlaying: false
      }
    default:
      return state
  }
}
