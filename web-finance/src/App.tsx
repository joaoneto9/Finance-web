import { useState } from 'react'
import HomePage from './pages/HomePage'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HomePage name='João'></HomePage>
    </>
  )
}

export default App
