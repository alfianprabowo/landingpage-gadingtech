import Opening from './components/Opening'
import { useState, useEffect } from 'react'
import Home from './components/Home'

function App() {
  const [showOpening, setShowOpening] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowOpening(false)
    }, 4000)
  }, [showOpening])
  return <div className='relative overflow-x-hidden h-screen w-screen bg-[#2C2C2C] '>{showOpening ? <Opening /> : <Home />}</div>
}

export default App
