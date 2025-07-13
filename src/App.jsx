import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoesStore from './shopping-shoes/shoes-store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ShoesStore/>
      </div>
    </>
  )
}

export default App
