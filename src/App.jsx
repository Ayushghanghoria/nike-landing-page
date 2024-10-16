import { useState } from 'react'

import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import HeroSection from './components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  )
}

export default App
