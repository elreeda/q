import * as R from 'ramda'
import t from './actionTypes'

const initialState = {
  player: null,
  pausedAtTime: 0,
  queue: {
    currentTrack: null,
    currentPlayList: [],
    nextTracks: [],
    queuedTracks: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.START_TRACK:
      const { payload : {surah, playlist}} = action
      const surahIndex = R.findIndex(R.equals(surah))(playlist)
      const currentPlayList = playlist
      const nextTracks = R.slice(R.inc(surahIndex), Infinity, playlist)
      const player = new Audio(surah.url)
      // TODO: Uncaught (in promise) DOMException: The play() request was
      // interrupted by a call to pause(). https://goo.gl/LdLk22
      player.load()
      !!state.player && state.player.pause()
      const playPromise = player.play()
      playPromise.catch()
      return {
        ...state,
        player,
        queue: {
          ...state.queue,
          currentTrack: surah,
          nextTracks,
          currentPlayList
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
      // eslint-disable-next-line
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

    case t.ADD_TO_QUEUE:
      return {
        ...state,
        queue: {
          ...state.queue,
          queuedTracks: [
            ...state.queue.queuedTracks,
            action.payload
          ]
        }
      }

    case t.NEXT_TRACK:
      if (!state.player) {
        return state
      } else if (state.queue.queuedTracks.length > 0) {
        const currentTrack = state.queue.queuedTracks[0]
        const queuedTracks = R.slice(1, Infinity, state.queue.queuedTracks)
        const player = new Audio(currentTrack.url)
        player.load()
        !!state.player && state.player.pause()
        const playPromise = player.play()
        playPromise.catch()
        return {
          ...state,
          player,
          queue: {
            ...state.queue,
            currentTrack,
            queuedTracks
          }
        }
      } else {
        const currentTrack = state.queue.nextTracks[0]
        const nextTracks = R.slice(1, Infinity, state.queue.nextTracks)
        const player = new Audio(currentTrack.url)
        player.load()
        !!state.player && state.player.pause()
        const playPromise = player.play()
        playPromise.catch()
        return {
          ...state,
          player,
          queue: {
            ...state.queue,
            currentTrack,
            nextTracks
          }
        }
      }

    case t.PREVIOUS_TRACK:
      if (!state.player) {
        return state
      }
      const currentTrackIndex = R.findIndex(R.equals(state.queue.currentTrack))(state.queue.currentPlayList)
      const currentTrack = state.queue.currentPlayList[R.dec(currentTrackIndex)]
      const newNextTracks = R.prepend(state.queue.currentTrack, state.queue.nextTracks)

      const previousTrackPlayer = new Audio(currentTrack.url)
      previousTrackPlayer.load()
      !!state.player && state.player.pause()
      previousTrackPlayer.play().catch()
      return {
        ...state,
        player: previousTrackPlayer,
        queue: {
          ...state.queue,
          currentTrack,
          nextTracks: newNextTracks
        }
      }

    default:
      return state
  }
}
