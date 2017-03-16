import {
  FETCH_RECITERS,
  SEARCH_QUERY,
  FETCH_SURAHS,
  GET_RECITER,
  GET_SURAH,
  PLAY,
  PAUSE,
  NEXT,
  BACK
} from './action-types'
import _ from 'lodash'
import { reciters } from '../config/reciters'
import { surahs } from '../config/surahs'

export function fetchReciters () {
  return {
    type: FETCH_RECITERS,
    payload: reciters
  }
}

export function searchReciters (q) {
  return {
    type: SEARCH_QUERY,
    payload: _.filter(reciters, v => _.includes(v.name, q))
  }
}

export function fetchSurahs (id) {
  return {
    type: FETCH_SURAHS,
    payload: _.filter(surahs, v => _.includes(_.filter(reciters, { id })[0].suras.split(','), v.id))
  }
}

export function getReciter (id) {
  return {
    type: GET_RECITER,
    payload: _.filter(reciters, {id})[0]
  }
}

export function getSurah (id, reciterId) {
  return {
    type: GET_SURAH,
    surah: id ? _.filter(surahs, { id })[0] : fetchSurahs(reciterId).payload[0],
    reciter: getReciter(reciterId).payload
  }
}

export function play() {
  return {
    type: PLAY
  }
}

export function pause() {
  return {
    type: PAUSE
  }
}

export function next(id, reciterId) {
  const reciterSurahs = fetchSurahs(reciterId).payload
  return {
    type: NEXT,
    surah: reciterSurahs[_.findLastIndex(reciterSurahs, { id }) + 1]
  }
}

export function back(id, reciterId) {
  const reciterSurahs = fetchSurahs(reciterId).payload
  return {
    type: BACK,
    surah: reciterSurahs[_.findLastIndex(reciterSurahs, { id }) - 1]
  }
}
