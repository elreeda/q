import t from './actionTypes'
import { reciters } from '../data/reciters'

export const getReciters = () => {
  return {
    type: t.GET_RECITERS,
    payload: reciters
  }
}
