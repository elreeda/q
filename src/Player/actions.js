import t from './actionTypes'

export const startTrack = ({surah, suras: playlist}) => {
  return {
    type: t.START_TRACK,
    payload: {
      surah,
      playlist
    }
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

export const addToQueue = (surah) => {
  return {
    type: t.ADD_TO_QUEUE,
    payload: surah
  }
}

export const nextTrack = () => {
  return {
    type: t.NEXT_TRACK
  }
}

export const previousTrack = () => {
  return {
    type: t.PREVIOUS_TRACK
  }
}
