import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mynavbar from './assets/components/MyNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mynavbar />;
    </>
  )
}

export default App
