import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presence from './components/Precense'
import Subcription from './components/Subcription'
import Cards from './components/Cards'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        
        <Presence/>
        <Subcription />
        <Cards />
        <Footer />
    </>
  )
}

export default App
