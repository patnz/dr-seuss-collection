import request from 'superagent'
import * as Models from '../../common/models'

export function apiGetBooks(): Promise<Models.Book[]> {
  return request
    .get(`http://localhost:3000/api/v1`)
    .then((response) => response.body)
}

export function apiAddBook(book: Models.Book): Promise<Models.Book[]> {
  return request
    .post(`http://localhost:3000/api/v1`)
    .send(book)
    .then((response) => response.body)
}

export function apiDeleteBook(id: number): Promise<number> {
  return request
    .delete(`http://localhost:3000/api/v1/delete/${id}`)
    .then((deletedBookId) => deletedBookId.body)
}
