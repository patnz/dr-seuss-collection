import { getBooks } from '../apis/apiClient'
import { useState } from 'react'

function App() {
  const [books, displayBooks] = useState('')

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
