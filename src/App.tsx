import { useState } from 'react'
import Portfolio from './pages/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
