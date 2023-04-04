import type { ThunkAction } from '../store'
import * as Models from '../../common/models'

import {
  apiGetBooks,
  apiAddBook,
  apiDeleteBook,
  apiEditBook,
} from '../apis/apiClient'

export const REQUEST_BOOKS = 'REQUEST_BOOKS'
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_BOOK = 'ADD_BOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

export type BookAction =
  | { type: typeof REQUEST_BOOKS; payload: null }
  | { type: typeof RECEIVE_BOOKS; payload: Models.Book[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof ADD_BOOK; payload: Models.Book }
  | { type: typeof DEL_BOOK; payload: number }
  | { type: typeof EDIT_BOOK; payload: Models.Book }

export function requestSeussBooks(): BookAction {
  return {
    type: REQUEST_BOOKS,
    payload: null,
  }
}

export function receiveBooks(bookList: Models.Book[]): BookAction {
  return {
    type: RECEIVE_BOOKS,
    payload: bookList,
  }
}

export function showError(): BookAction {
  return {
    type: REQUEST_BOOKS,
    payload: null,
  }
}

export function addBook(book: Models.Book): BookAction {
  return { type: ADD_BOOK, payload: book }
}

export function deleteBook(id: number): BookAction {
  return { type: DEL_BOOK, payload: id }
}

export function editBook(book: Models.Book): BookAction {
  return { type: EDIT_BOOK, payload: book }
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
        dispatch(addBook(book))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function editSeussBook(book: Models.Book): ThunkAction {
  return async (dispatch) => {
    apiEditBook(book)
      .then(() => {
        console.log(book)
        dispatch(editBook(book))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function delSeussBook(id: number): ThunkAction {
  return async (dispatch) => {
    apiDeleteBook(id)
      .then(() => {
        console.log(id)
        dispatch(deleteBook(id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
