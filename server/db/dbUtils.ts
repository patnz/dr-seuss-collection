import config from './knexfile'
import knex from 'knex'
import * as Models from '../../common/models'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getBooks(db = connection): Promise<Models.Book[]> {
  return db('dr_seuss_books').select()
}

export function addBook(
  bookData: Models.Book,
  db = connection
): Promise<Models.Book> {
  return db('dr_seuss_books').insert(bookData)
}
export function deleteBook(id: number, db = connection): Promise<number> {
  return db('dr_seuss_books').del().where('id', id)
}

export function editBook(
  editedBook: Models.Book,
  db = connection
): Promise<number> {
  return db('dr_seuss_books').update(editedBook).where('id', editedBook.id)
}
