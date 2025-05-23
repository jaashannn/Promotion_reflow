import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null)

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Freelance Web Developer",
      content: "Reflow has completely changed how I find clients. I've been able to earn an additional $2,500 per month just from referring leads to businesses outside my specialty.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Dental Office Manager",
      content: "Our dental practice has seen a 30% increase in new patients since joining Reflow. The leads are pre-qualified and much more likely to convert than those from traditional advertising.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Insurance Agent",
      content: "The platform made it easy to connect with complementary businesses. I now receive consistent referrals from real estate agents, mortgage brokers, and financial advisors.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from freelancers and businesses who've grown with Reflow."
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="px-6 py-12 md:px-12">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg md:text-xl italic text-slate-700 mb-6">
                      "{testimonials[current].content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="font-bold text-slate-900">
                          {testimonials[current].name}
                        </div>
                        <div className="text-primary-500">
                          {testimonials[current].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-slate-700 hover:text-primary-500 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? 'bg-primary-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-slate-700 hover:text-primary-500 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials