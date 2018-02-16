import * as R from 'ramda'
import t from './actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.GET_RECITER:
      const { reciter, surahs } = action.payload
      if (R.equals(reciter, 404)) return 404
      const reciterSuras = R.split(',', R.prop('suras', reciter))
      return R.assoc(
        'suras',
        R.map(
          x => ({
            ...surahs[R.dec(parseInt(x, 10))],
            url: `${reciter.Server}/${(`000` + x).slice(-3)}.mp3`,
            reciterName: reciter.name,
            reciterId: reciter.id
          }),
          reciterSuras
        ),
        reciter
      )
    default:
      return state
  }
}
