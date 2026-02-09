/**
 * Portfolio Application
 * Author: MD Abu Sayed Shuvo
 * GitHub: https://github.com/Shuvo-labb
 * Copyright (c) 2026
 */

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
