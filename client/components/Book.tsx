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
  const [formState, setFormState] = useState(singleBook)
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState)
  }

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState)
  }

  const handleEditSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(formState)
    dispatch(editSeussBook(formState))
    changeEditState()
  }
  //

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            defaultValue={singleBook.title}
            name="title"
            id="title"
            onChange={inputHandler}
            required
          />
          <label htmlFor="year_published">Year Published: </label>
          <input
            defaultValue={singleBook.year_published}
            name="year_published"
            id="year_published"
            onChange={inputHandler}
            required
          />
          <label htmlFor="cover">Cover Image URL: </label>
          <input
            defaultValue={singleBook.cover}
            name="cover"
            id="cover"
            onChange={inputHandler}
            required
          />
          <label htmlFor="read_status">Have you read it? </label>
          <select
            name="read_status"
            id="read_status"
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
      ) : (
        <>
          <img alt={singleBook.title} src={singleBook.cover}></img>
          <h3>{singleBook.title}</h3>
          <h4>Published: {singleBook.year_published}</h4>
          <h4>Have you read it? {singleBook.read_status ? 'Yes' : 'No'}</h4>
          <button onClick={deleteFunction}>DELETE</button>
          <button onClick={changeEditState}>EDIT</button>
        </>
      )}
    </div>
  )
}

export default Book
