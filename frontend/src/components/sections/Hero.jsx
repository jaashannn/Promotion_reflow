import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import Button from '../ui/Button'
import networkAnimation from '../../assets/animations/network-connections.json'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Empowering Freelancers & Businesses to 
              <span className="text-primary-500"> Grow Together</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Connect, Refer, and Earn — The ultimate platform for lead sharing across industries.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                href="#contact"
              >
                Join as Freelancer
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="#contact"
              >
                Join as Business
              </Button>
            </motion.div>

            <motion.div 
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(id => (
                  <img 
                    key={id}
                    src={`https://randomuser.me/api/portraits/men/${id + 30}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold">Trusted by 10,000+</div>
                <div className="text-sm text-slate-500">Freelancers & Businesses</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-full max-w-lg mx-auto">
              <Lottie 
                animationData={networkAnimation} 
                loop={true}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero