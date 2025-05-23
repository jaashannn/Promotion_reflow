import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Industries', href: '#industries' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#" className="text-2xl font-bold text-primary-600">
           Reflow
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a 
                  href={link.href} 
                  className={`font-medium hover:text-primary-500 transition-colors ${
                    scrolled ? 'text-slate-800' : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex space-x-3">
            <Button 
              variant="secondary"
              href="#contact"
            >
              Join as Business
            </Button>
            <Button 
              variant="primary"
              href="#contact"
            >
              Join as Freelancer
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block font-medium text-slate-800 hover:text-primary-500 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col space-y-3">
              <Button 
                variant="secondary"
                href="#contact"
                onClick={() => setIsOpen(false)}
                fullWidth
              >
                Join as Business
              </Button>
              <Button 
                variant="primary"
                href="#contact"
                onClick={() => setIsOpen(false)}
                fullWidth
              >
                Join as Freelancer
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar