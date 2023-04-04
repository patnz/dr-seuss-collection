import { UserAction } from '../actions/users'
import * as Models from '../../common/models'

const initialState = NaN

function userRatingReducer(
  state = initialState,
  { type, payload }: UserAction
): number {
  switch (type) {
    case 'RATE_BOOK':
      return payload
    default:
      return state
  }
}

export default userRatingReducer
