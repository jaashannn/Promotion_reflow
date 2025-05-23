import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  delay = 0
}) => {
  return (
    <motion.div 
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default Card