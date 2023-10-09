import { useState } from 'react'
import './App.css'
import ContactList from './components/contact-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList />
    </>
  )
}

export default App
