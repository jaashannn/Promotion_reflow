import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-slate-500">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-3 text-slate-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Faq = () => {
  const faqs = [
    {
      question: "How does the referral process work?",
      answer: "When you refer a lead, our system tracks it and notifies the relevant business. If the lead converts to a paying customer, you receive a commission based on your plan tier."
    },
    {
      question: "What industries do you currently support?",
      answer: "We support a wide range of industries including Web Development, Healthcare, Real Estate, Logistics, Insurance, Design, Finance, and Travel. We're constantly expanding to new sectors."
    },
    {
      question: "How much can I earn from referrals?",
      answer: "Earnings vary depending on your plan and the type of lead referred. Freelancers typically earn 10-15% of the initial contract value when a lead converts to a customer."
    },
    {
      question: "How do businesses verify lead quality?",
      answer: "All leads go through a qualification process where we verify contact information and interest level. Businesses can also see ratings and conversion history for referrers."
    },
    {
      question: "When and how do I get paid for successful referrals?",
      answer: "Payments are processed monthly for all successful conversions. You can receive funds via direct deposit, PayPal, or Stripe, depending on your preference."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate takes effect at your next billing cycle."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our platform."
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-slate-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              Contact our support team →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faq