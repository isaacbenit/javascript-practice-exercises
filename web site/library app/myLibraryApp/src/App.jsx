import Book from "./Book"
import AddBook from "./AddBook"
import FormName from "./FormName"
import { useState } from "react"
function App() {
  const [showForm, setShowForm]=useState(false)
  return (
    <>
    <div>
    {showForm ? (
        <FormName goBack={() => setShowForm(false)} />
      ) : (
        <Book openForm={() => setShowForm(true)} />
      )}
    </div>
      <Book/>
      <AddBook/>
    </>
  )
}

export default App
