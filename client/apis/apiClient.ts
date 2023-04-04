import request from 'superagent'
import * as Models from '../../common/models'

export function apiGetBooks(): Promise<Models.Book[]> {
  return request.get(`/api/v1`).then((response) => response.body)
}

export function apiAddBook(book: Models.Book): Promise<Models.Book[]> {
  return request
    .post(`/api/v1`)
    .send(book)
    .then((response) => response.body)
}

export function apiDeleteBook(id: number): Promise<number> {
  return request
    .delete(`/api/v1/delete/${id}`)
    .then((deletedBookId) => deletedBookId.body)
}

export function apiEditBook(book: Models.Book): Promise<Models.Book[]> {
  return request
    .patch(`/api/v1/edit/`)
    .send(book)
    .then((res) => res.body)
}
