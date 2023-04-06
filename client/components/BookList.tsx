import * as Models from '../../common/models'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useState } from 'react'
import Book from './Book'
import { fetchSeussBooks } from '../actions/books'

function BookList() {
  const bookList = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()
  const [visible, changeVisibility] = useState(false)
  let bookListGenerated = false

  const clickHandler = () => {
    if (!bookListGenerated) {
      dispatch(fetchSeussBooks())
      changeVisibility(!visible)
      bookListGenerated = true
    } else changeVisibility(!visible)
  }

  return (
    <>
      {visible ? (
        <>
          <button className="seuss-button" onClick={clickHandler}>
            Hide Book List
          </button>
          <div className="book-list-section">
            {bookList.map((book, i) => (
              <Book key={i} singleBook={book} />
            ))}
          </div>
        </>
      ) : (
        <button className="seuss-button" onClick={clickHandler}>
          Get Book List
        </button>
      )}
    </>
  )
}

export default BookList
