import { BookAction } from '../actions/books'
import * as Models from '../../common/models'

const initialState = [] as Models.Book[]

function seussBooksReducer(
  state = initialState,
  { type, payload }: BookAction
): Models.Book[] {
  switch (type) {
    case 'RECEIVE_BOOKS':
      return payload
    case 'ADD_BOOK':
      return [...state, payload]
    case 'DEL_BOOK': {
      return state.filter((book) => book.id !== payload)
    }
    case 'EDIT_BOOK':
      return state.map((book) => {
        if (book.id === payload.id) {
          return { ...book, ...payload }
        }
        return book
      })
    default:
      return state
  }
}

export default seussBooksReducer
