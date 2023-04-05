import BookList from './BookList'
import BookForm from './BookForm'

function App() {
  return (
    <>
      <div className="app-container">
        <header className="header">
          <h1>Dr Seuss Collection</h1>
        </header>
        <BookList />
        <BookForm />
      </div>
    </>
  )
}

export default App
