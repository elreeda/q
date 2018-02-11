import t from './actionTypes'
import * as R from 'ramda'
import { reciters } from '../data/reciters'
import { surahs } from '../data/surahs'

export const getReciter = (id) => {
  // since we are just mocking data, the payload needs to be the exact reciter
  // so we will the logic here rather doing it inside the reducer
  return {
    type: t.GET_RECITER,
    payload: {
      reciter: R.head(R.filter(R.propEq('id', id), reciters)) || 404,
      surahs
    }
  }
}
