import * as Models from '../../common/models'
import { delSeussBook } from '../actions/books'
import { useAppDispatch } from '../hooks/redux'
interface Props {
  singleBook: Models.Book
}

function Book({ singleBook }: Props) {
  const dispatch = useAppDispatch()
  const deleteFunction = () => dispatch(delSeussBook(singleBook.id))
  // const testing = () => console.log(singleBook)

  return (
    <div>
      <img alt={singleBook.title} src={singleBook.cover}></img>
      <h3>{singleBook.title}</h3>
      <h4>Published: {singleBook.year_published}</h4>
      <h4>Have you read it? {singleBook.read_status ? 'Yes' : 'No'}</h4>
      <button onClick={deleteFunction}>DELETE</button>
    </div>
  )
}

export default Book
