import { useState } from 'react'
import './App.css'
import Heading from './Heading/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading/>
    </>
  )
}

export default App
