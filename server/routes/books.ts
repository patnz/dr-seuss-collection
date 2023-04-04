import express from 'express'
import { getBooks, addBook, deleteBook } from '../db/dbUtils'
import * as Models from '../../common/models'

const router = express.Router()

router.get('/', (req, res) => {
  getBooks()
    .then((bookArray) => {
      res.json(bookArray)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/', (req, res) => {
  addBook(req.body)
    .then((bookArray) => {
      res.json(bookArray)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.delete('/delete/:id/', (req, res) => {
  deleteBook(+req.params.id)
    .then((deletedBookId) => {
      res.json(deletedBookId)
    })
    .catch((err) => {
      console.log(err)
    })
})

export default router
