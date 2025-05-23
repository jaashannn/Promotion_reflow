import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Industries from './components/sections/Industries'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Faq from './components/sections/Faq'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <HowItWorks />
            <Industries />
            <Features />
            <Benefits />
            <Testimonials />
            <Pricing />
            <Faq />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App