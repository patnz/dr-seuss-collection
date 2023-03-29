import { Action, RECEIVE_BOOKS } from '../actions/books'
import * as Models from '../../common/models'

const initialState = [] as Models.Book[]

function seussBooksReducer(
  state = initialState,
  action: Action
): Models.Book[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_BOOKS:
      return payload
    default:
      return state
  }
}

export default seussBooksReducer
