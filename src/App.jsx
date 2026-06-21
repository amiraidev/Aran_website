import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Background3D from './components/Background3D'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Courses from './components/Courses'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Background3D />
      <CustomCursor />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Courses />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
