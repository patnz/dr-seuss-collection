import type { ThunkAction } from '../store'
import * as Models from '../../common/models'

import { apiGetBooks, apiAddBook } from '../apis/apiClient'

export const REQUEST_BOOKS = 'REQUEST_BOOKS'
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_BOOK = 'ADD_BOOK'

export type Action =
  | { type: typeof REQUEST_BOOKS; payload: null }
  | { type: typeof RECEIVE_BOOKS; payload: Models.Book[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof ADD_BOOK; payload: Models.Book }

export function requestSeussBooks(): Action {
  return {
    type: REQUEST_BOOKS,
    payload: null,
  }
}

export function receiveBooks(bookList: Models.Book[]): Action {
  return {
    type: RECEIVE_BOOKS,
    payload: bookList,
  }
}

export function showError(): Action {
  return {
    type: REQUEST_BOOKS,
    payload: null,
  }
}

export function fetchSeussBooks(): ThunkAction {
  return async (dispatch) => {
    apiGetBooks()
      .then((books) => {
        console.log(books)
        dispatch(receiveBooks(books))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function addSeussBook(book: Models.Book): ThunkAction {
  return async (dispatch) => {
    apiAddBook(book)
      .then((bookArray: Models.Book[]) => {
        console.log(bookArray)
        dispatch(receiveBooks(bookArray))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
