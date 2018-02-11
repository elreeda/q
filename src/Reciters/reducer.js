import * as R from 'ramda'
import t from './actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.GET_RECITERS:
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      return R.zipObj(
        alphabet,
        R.map(x => R.filter(R.propEq('letter', x), action.payload), alphabet)
      )
  }
  return state
}
