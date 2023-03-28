import { getBooks } from '../apis/apiClient'
import { useState } from 'react'
import * as Models from '../../common/models'
import { Book } from '../apis/apiClient'

function App() {
  const [books, displayBooks] = useState([] as Models.Book[])
  const handleClick = () => {
    getBooks()
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
      <section className="main">
        {books.map((el) => (
          <>
            <img alt={el.title} src={el.cover}></img>
            <p key={el.id}>{el.title}</p>
          </>
        ))}
      </section>
      <button onClick={handleClick}>WHERE DA BOOKS AT</button>
    </>
  )
}

export default App
