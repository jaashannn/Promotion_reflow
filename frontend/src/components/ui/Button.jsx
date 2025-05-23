import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Define style variants
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-300',
    outline: 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-300',
    ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-300',
  }

  // Define size variants
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-8 py-3 text-lg',
  }

  const baseClasses = `
    inline-flex items-center justify-center 
    rounded-md font-medium transition-colors 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${variants[variant]} 
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  const buttonContent = (
    <span className="flex items-center">
      {children}
    </span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button