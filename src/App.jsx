import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Hero02 from './components/hero_02'
import Hero03 from './components/hero_03'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Hero02 />
      <Hero03 />
      <Footer />
    </div>
  )
}

export default App
