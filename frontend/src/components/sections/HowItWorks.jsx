import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import SectionHeading from '../ui/SectionHeading'
import stepOneAnimation from '../../assets/animations/sign-up.json'
import stepTwoAnimation from '../../assets/animations/connect.json'
import stepThreeAnimation from '../../assets/animations/refer.json'
import stepFourAnimation from '../../assets/animations/earn.json'

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your profile as a freelancer or business and set up your preferences.",
      animation: stepOneAnimation,
    },
    {
      title: "Connect",
      description: "Join our network and connect with professionals across multiple industries.",
      animation: stepTwoAnimation,
    },
    {
      title: "Refer Leads",
      description: "Share potential client leads with businesses in our network.",
      animation: stepThreeAnimation,
    },
    {
      title: "Earn Rewards",
      description: "Get compensated when your referrals convert into paying customers.",
      animation: stepFourAnimation,
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="How It Works"
          subtitle="Our simple four-step process connects freelancers with businesses for mutual growth."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="h-40 mb-6 flex items-center justify-center">
                <Lottie 
                  animationData={step.animation} 
                  loop={true}
                  className="w-32 h-32"
                />
              </div>
              
              <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-600 mb-4">
                Step {index + 1}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks