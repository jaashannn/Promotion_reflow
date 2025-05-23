import { motion } from 'framer-motion'
import { 
  FiMonitor, FiActivity, FiHome, FiTruck, 
  FiShield, FiPenTool, FiCreditCard, FiGlobe 
} from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

const Industries = () => {
  const industries = [
    {
      name: "Web Development",
      icon: <FiMonitor size={32} />,
      color: "text-primary-500",
      bg: "bg-primary-100",
    },
    {
      name: "Healthcare",
      icon: <FiActivity size={32} />,
      color: "text-secondary-500",
      bg: "bg-secondary-100",
    },
    {
      name: "Real Estate",
      icon: <FiHome size={32} />,
      color: "text-accent-500",
      bg: "bg-accent-100",
    },
    {
      name: "Logistics",
      icon: <FiTruck size={32} />,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      name: "Insurance",
      icon: <FiShield size={32} />,
      color: "text-pink-500",
      bg: "bg-pink-100",
    },
    {
      name: "Design",
      icon: <FiPenTool size={32} />,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },
    {
      name: "Finance",
      icon: <FiCreditCard size={32} />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      name: "Travel",
      icon: <FiGlobe size={32} />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    }
  ]

  return (
    <section id="industries" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Our platform connects professionals across these thriving industries and more."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={industry.name} hover={true} delay={index}>
              <div className="p-6">
                <div className={`${industry.bg} ${industry.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-slate-600">
                  Connect with professionals in the {industry.name.toLowerCase()} industry.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries