import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="loading-page">
        <img src={viteLogo} alt="Vite logo" className="logo" />
        <img src={reactLogo} alt="React logo" className="logo react" />
        <h1>Loading...</h1>
      </div>
    </>
  )
}

export default App
