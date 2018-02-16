import * as R from 'ramda'
import t from './actionTypes'

const initialState = {
  player: null,
  pausedAtTime: 0,
  queue: {
    currentTrack: null,
    nextTracks: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.START_TRACK:
      const surah = action.payload
      const player = new Audio(surah.url)
      // TODO: Uncaught (in promise) DOMException: The play() request was
      // interrupted by a call to pause(). https://goo.gl/LdLk22
      // console.log(R.equals(surah, state.queue.currentTrack))
      // console.log(surah)
      // console.log(R.equals(surah, state.queue.currentTrack))
      // if (state.pausedAtTime > 0 && R.equals(surah, state.queue.currentTrack)) {
      //   const newPlayer = state.player
      //   newPlayer.currentTime = state.pausedAtTime
      //   newPlayer.play()
      //   return {
      //     ...state,
      //     pausedAtTime: 0
      //   }
      // }
      player.load()
      !!state.player && state.player.pause()
      const playPromise = player.play()
      playPromise.catch()
      return {
        ...state,
        player,
        queue: {
          ...state.queue,
          currentTrack: surah 
        }
      }

    case t.PAUSE_TRACK:
      const newPlayer = state.player
      newPlayer.pause()
      return {
        ...state,
        pausedAtTime: newPlayer.currentTime,
        player: newPlayer
      }

    case t.RESUME_TRACK:
      state.player
      state.player.currentTime = state.pausedAtTime
      state.player.play()
      return {
        ...state,
        pausedAtTime: 0
      }

    case t.START_PLAYLIST:
      return {
        ...state,
        queue: {
          ...state.queue,
          nextTracks: [
            ...state.queue.nextTracks,
            R.mapObjIndexed(
              x => ({
                ...x,
                reciterName: action.payload.name,
                reciterId: action.payload.id
              }),
              action.payload.suras
            )
          ]
        }
      }
    default:
      return state
  }
}
