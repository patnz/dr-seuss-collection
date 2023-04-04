import { Action, RECEIVE_BOOKS } from '../actions/books'
import * as Models from '../../common/models'

const initialState = [] as Models.Book[]

function seussBooksReducer(
  state = initialState,
  { type, payload }: Action
): Models.Book[] {
  switch (type) {
    case 'RECEIVE_BOOKS':
      return payload
    case 'ADD_BOOK':
      return [...state, payload]
    default:
      return state
  }
}

export default seussBooksReducer
