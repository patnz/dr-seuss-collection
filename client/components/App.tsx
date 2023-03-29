import BookList from './BookList'
import BookForm from './BookForm'

function App() {
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
