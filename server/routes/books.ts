import express from 'express'
import { getBooks } from '../db/dbUtils'

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

export default router
