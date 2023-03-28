import config from './knexfile'
import knex from 'knex'
import * as Models from '../../common/models'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getBooks(db = connection): Promise<Models.Book[]> {
  return db('dr_seuss_books').select()
}
