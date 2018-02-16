import t from './actionTypes'

export const startTrack = (surah) => {
  return {
    type: t.START_TRACK,
    payload: surah
  }
}

export const pauseTrack = () => {
  return {
    type: t.PAUSE_TRACK
  }
}

export const resumeTrack = () => {
  return {
    type: t.RESUME_TRACK
  }
}

export const startPlaylist = (playlist) => {
  return {
    type: t.START_PLAYLIST,
    payload: playlist
  }
}
