import { GET_SURAH, PLAY, PAUSE, NEXT, BACK } from '../actions/action-types'

const initialState = {
  isPlaying: false,
  surah: null,
  file: null,
  reciter: null,
  progress: 0
}

export default function surah (state = initialState, action) {
  switch (action.type) {
    case GET_SURAH:
      if (!state.reciter) {
        state.reciter = action.reciter
      }
      if (state.isPlaying) {
        state.file.pause()
        state.file.currentTime = 0
        state.file = new Audio(`${state.reciter.Server}/${(`000` + action.surah.id).slice(-3)}.mp3`)
        state.file.play()
      } else {
        state.file = new Audio(`${state.reciter.Server}/${(`000` + action.surah.id).slice(-3)}.mp3`)
        state.file.play()
      }
      return {
        ...state,
        isPlaying: true,
        surah: action.surah
      }
    case PAUSE:
      state.file.pause()
      return {
        ...state,
        isPlaying: false
      }
    case PLAY:
      state.file.play()
      return {
        ...state,
        isPlaying: true
      }
    case NEXT:
      if (!action.surah) {
        return state
      }
      state.file.pause()
      state.file.currentTime = 0
      state.file = new Audio(`${state.reciter.Server}/${(`000` + action.surah.id).slice(-3)}.mp3`)
      state.file.play()
      return {
        ...state,
        surah: action.surah
      }
    case BACK:
      if (!action.surah) {
        return state
      }
      state.file.pause()
      state.file.currentTime = 0
      state.file = new Audio(`${state.reciter.Server}/${(`000` + action.surah.id).slice(-3)}.mp3`)
      state.file.play()
      return {
        ...state,
        surah: action.surah
      }
    default:
      return state
  }
}
