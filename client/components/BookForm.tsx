import * as Models from '../../common/models'
import { useState, ChangeEvent, FormEvent } from 'react'
import { addSeussBook } from '../actions/books'
import { useAppDispatch } from '../hooks/redux'

function BookForm() {
  const [formState, setFormState] = useState({} as Models.Book)
  const dispatch = useAppDispatch()
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState)
  }

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addSeussBook(formState))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Another Book</h1>
      <label htmlFor="title">Title: </label>
      <input name="title" id="title" onChange={inputHandler} required />
      <br></br>
      <label htmlFor="year_published">Year Published: </label>
      <input
        name="year_published"
        id="year_published"
        onChange={inputHandler}
        required
      />
      <br></br>
      <label htmlFor="cover">Cover Image URL: </label>
      <input name="cover" id="cover" onChange={inputHandler} required />
      <br></br>
      <label htmlFor="read_status">Have you read it? </label>
      <select
        name="read_status"
        id="read_status"
        onChange={selectHandler}
        required
      >
        <option value="true">Yes</option>
        <option value="false" selected>
          No
        </option>
      </select>
      <br></br>
      <br></br>
      <button className="mini-generate-button" type="submit">
        ADD BOOK
      </button>
    </form>
  )
}

export default BookForm
