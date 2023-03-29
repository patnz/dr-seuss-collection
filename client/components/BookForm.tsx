import * as Models from '../../common/models'
import { useState, ChangeEvent, FormEvent } from 'react'

function BookForm() {
  const [formState, setFormState] = useState(Models.Book as null)
  const changeHandler = (event: ChangeEvent<HTMLFormElement>) => {
    setFormState(event.target.value)
    console.log(formState)
  }

  return (
    <form onChange={changeHandler}>
      <h1>Add Another Book</h1>
      <label htmlFor="title">Title: </label>
      <input name="title" id="title" />
      <br></br>
      <br></br>

      <button className="mini-generate-button" type="submit">
        ADD BOOK
      </button>
    </form>
  )
}

export default BookForm
