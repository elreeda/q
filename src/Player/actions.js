import t from './actionTypes'

export const startTrack = (url) => {
  return {
    type: t.START_TRACK,
    payload: url
  }
}
