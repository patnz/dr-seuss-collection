import { apiGetBooks } from '../apis/apiClient'
import { useState } from 'react'
import * as Models from '../../common/models'
import BookList from './BookList'
import BookForm from './BookForm'

function App() {
  const [books, displayBooks] = useState([] as Models.Book[])
  const handleClick = () => {
    apiGetBooks()
      .then((bookArray) => {
        displayBooks(bookArray)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <BookList />
      <BookForm />
    </>
  )
}

export default App
