import { motion } from 'framer-motion'
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ]

  const socialLinks = [
    { icon: <FiTwitter size={20} />, href: '#' },
    { icon: <FiLinkedin size={20} />, href: '#' },
    { icon: <FiFacebook size={20} />, href: '#' },
    { icon: <FiInstagram size={20} />, href: '#' },
  ]

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-2xl font-bold text-primary-600 mb-4 inline-block">
               Reflow
              </a>
              <p className="text-slate-600 mb-6 max-w-md">
                Empowering freelancers and businesses to grow together through our innovative lead-sharing platform.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-600 hover:text-primary-500 transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-600 hover:text-primary-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Reflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer