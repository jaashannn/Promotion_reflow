import { motion } from 'framer-motion'
import { 
  FiUsers, FiBarChart2, FiShield, FiMessageCircle,
  FiClock, FiDollarSign
} from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const Features = () => {
  const features = [
    {
      icon: <FiUsers size={24} />,
      title: "Network Growth",
      description: "Expand your professional network across multiple industries and regions."
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: "Lead Tracking",
      description: "Track your referrals and leads with detailed analytics and insights."
    },
    {
      icon: <FiShield size={24} />,
      title: "Verification Process",
      description: "All businesses undergo verification to ensure quality and trust."
    },
    {
      icon: <FiMessageCircle size={24} />,
      title: "Secure Messaging",
      description: "Communicate directly with potential clients through encrypted channels."
    },
    {
      icon: <FiClock size={24} />,
      title: "Fast Payouts",
      description: "Receive payments quickly when your referrals convert to customers."
    },
    {
      icon: <FiDollarSign size={24} />,
      title: "Flexible Pricing",
      description: "Choose plans that match your needs, from freelancers to enterprises."
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Powerful Features"
          subtitle="Our platform provides everything you need to grow your network and generate more business."
        />
        
        <div className="relative mt-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Platform Dashboard" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-16">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={item}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary-100 text-primary-500">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features