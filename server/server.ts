import express from 'express'
import path from 'path'

import books from './routes/books'
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// ROUTES GO HERE

server.use('/api/v1', books)

export default server
