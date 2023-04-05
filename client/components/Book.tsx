import * as Models from '../../common/models'
import { delSeussBook, editSeussBook } from '../actions/books'
import { useAppDispatch } from '../hooks/redux'
import { useState, ChangeEvent, FormEvent } from 'react'
interface Props {
  singleBook: Models.Book
}

function Book({ singleBook }: Props) {
  //
  const dispatch = useAppDispatch()
  const deleteFunction = () => dispatch(delSeussBook(singleBook.id))
  //
  const [isEditing, setEditing] = useState(false)
  const changeEditState = () => {
    isEditing ? setEditing(false) : setEditing(true)
  }
  //
  const [editFormState, setEditFormState] = useState(singleBook)
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditFormState({
      ...editFormState,
      [event.target.name]: event.target.value,
    })
    console.log(editFormState)
  }

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setEditFormState({
      ...editFormState,
      [event.target.name]: event.target.value,
    })
    console.log(editFormState)
  }

  const handleEditSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(editFormState)
    dispatch(editSeussBook(editFormState))
    changeEditState()
  }
  //

  return (
    <div className="book-section">
      {isEditing ? (
        <>
          <img
            className="book-image"
            alt={singleBook.title}
            src={singleBook.cover}
          ></img>
          <form onSubmit={handleEditSubmit}>
            <label htmlFor={'edit-title-' + singleBook.id}>Title: </label>
            <input
              defaultValue={singleBook.title}
              name="title"
              id={'edit-title-' + singleBook.id}
              onChange={inputHandler}
              required
            />
            <br></br>
            <label htmlFor={'edit-year_published-' + singleBook.id}>
              Year Published:{' '}
            </label>
            <input
              defaultValue={singleBook.year_published}
              name="year_published"
              id={'edit-year_published-' + singleBook.id}
              onChange={inputHandler}
              required
            />
            <br></br>
            <label htmlFor={'edit-cover-' + singleBook.id}>
              Cover Image URL:{' '}
            </label>
            <input
              defaultValue={singleBook.cover}
              name="cover"
              id={'edit-cover-' + singleBook.id}
              onChange={inputHandler}
              required
            />
            <br></br>
            <label htmlFor={'edit-read_status-' + singleBook.id}>
              Have you read it?{' '}
            </label>
            <select
              name="read_status"
              id={'edit-read_status-' + singleBook.id}
              onChange={selectHandler}
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br></br>
            <br></br>
            <button className="mini-generate-button" type="submit">
              CONFIRM CHANGES
            </button>
            <button className="mini-generate-button" onClick={changeEditState}>
              CANCEL
            </button>
          </form>
        </>
      ) : (
        <>
          <img
            className="book-image"
            alt={singleBook.title}
            src={singleBook.cover}
          ></img>
          <h1>{singleBook.title}</h1>
          <h2>Published: {singleBook.year_published}</h2>
          <h3>Have you read it? {singleBook.read_status ? 'Yes' : 'No'}</h3>
          <button onClick={deleteFunction}>DELETE</button>
          <button onClick={changeEditState}>EDIT</button>
        </>
      )}
    </div>
  )
}

export default Book
