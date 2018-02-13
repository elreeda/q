import * as R from 'ramda'
import t from './actionTypes'

const initialState = {
  player: null,
  queue: {
    currentTrack: null,
    nextTracks: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.START_TRACK:
      const player = new Audio(action.payload)
      // TODO: Uncaught (in promise) DOMException: The play() request was
      // interrupted by a call to pause(). https://goo.gl/LdLk22
      player.load()
      !!state.player && state.player.pause()
      const playPromise = player.play()
      playPromise.catch()
      return {
        ...state,
        player
      }
    case t.PAUSE_TRACK:
      return state
    default:
      return state
  }
}
