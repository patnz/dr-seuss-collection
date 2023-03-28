import config from './knexfile'
import knex from 'knex'
import { Book } from '../../client/apis/apiClient'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getBooks(db = connection): Promise<Book[]> {
  return db('dr_seuss_books').select()
}
