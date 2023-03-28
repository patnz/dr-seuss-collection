import request from 'superagent'

export interface Book {
  id: number
  title: string
  year_published: number
  read_status: boolean
  cover: string
}

export function getBooks(): Promise<Book[]> {
  return request
    .get(`http://localhost:3000/api/v1`)
    .then((response) => response.body)
}