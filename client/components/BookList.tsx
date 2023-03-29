import * as Models from '../../common/models'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Book from './Book'
import { requestSeussBooks, fetchSeussBooks } from '../actions/books'

function BookList() {
  const bookList = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  return (
    <>
      <button onClick={() => dispatch(fetchSeussBooks())}>Get Book List</button>
      {bookList.map((book, i) => (
        <Book key={i} singleBook={book} />
      ))}
    </>
  )
}

export default BookList
