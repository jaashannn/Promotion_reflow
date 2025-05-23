import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const Pricing = () => {
  const [annual, setAnnual] = useState(false)
  
  const togglePricing = () => setAnnual(!annual)

  const plans = [
    {
      name: "Freelancer",
      description: "Perfect for independent professionals",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Up to 5 referrals per month",
        "Basic lead tracking",
        "Email support",
        "Personal profile",
        "10% referral commission"
      ],
      buttonText: "Get Started Free",
      variant: "outline",
      popular: false
    },
    {
      name: "Pro",
      description: "Best for active networkers",
      monthlyPrice: 29,
      annualPrice: 249,
      features: [
        "Unlimited referrals",
        "Advanced lead tracking",
        "Priority support",
        "Enhanced profile",
        "15% referral commission",
        "Industry insights"
      ],
      buttonText: "Get Started",
      variant: "primary",
      popular: true
    },
    {
      name: "Business",
      description: "For companies seeking quality leads",
      monthlyPrice: 99,
      annualPrice: 899,
      features: [
        "Lead matching algorithm",
        "Detailed analytics dashboard",
        "Dedicated account manager",
        "Team collaboration tools",
        "Marketing toolkit",
        "API access"
      ],
      buttonText: "Contact Sales",
      variant: "secondary",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that works for your needs."
        />
        
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-full flex items-center">
            <button
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-white shadow-md text-slate-900' : 'text-slate-600'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-white shadow-md text-slate-900' : 'text-slate-600'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-primary-500 font-semibold">-20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'border-2 border-primary-500 transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-4 text-xs font-bold uppercase rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-600">
                    {annual ? '/year' : '/month'}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="flex-shrink-0 text-primary-500 mr-2">
                        <FiCheck size={18} />
                      </span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.variant} 
                  href="#contact"
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing