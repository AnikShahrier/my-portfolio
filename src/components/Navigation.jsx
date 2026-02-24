import { motion } from 'framer-motion'
import { Home, User, FolderGit2, Wrench, Mail, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home', number: '01', icon: Home },
    { id: 'about', label: 'About', number: '02', icon: User },
    { id: 'projects', label: 'Projects', number: '03', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', number: '04', icon: Wrench },
    { id: 'contact', label: 'Contact', number: '05', icon: Mail },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AnikShahrier/ ' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-anik-shahrier ' },
    { icon: Facebook, href: 'https://www.facebook.com/anikshahrieroishik ' },
    { icon: Instagram, href: 'https://www.instagram.com/shahrier_oishik/ ' },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio.
        </motion.div>
        
        <nav className="nav-links">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.span 
                  className="nav-number"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: isActive ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {item.number}
                </motion.span>
                
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    rotate: isActive ? 0 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Icon size={18} />
                </motion.div>
                
                <motion.span
                  animate={{
                    x: isActive ? 3 : 0,
                    fontWeight: isActive ? 600 : 500
                  }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {item.label}
                </motion.span>
                
                {/* Animated background pill */}
                {isActive && (
                  <motion.div
                    className="active-pill"
                    layoutId="activePill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.05) 100%)',
                      borderRadius: '12px',
                      zIndex: -1
                    }}
                  />
                )}
                
                {/* Animated left border */}
                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: '70%', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '3px',
                      background: 'linear-gradient(180deg, #dc2626, #f87171)',
                      borderRadius: '0 2px 2px 0'
                    }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        <motion.div 
          className="social-sidebar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -5, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            )
          })}
        </motion.div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="bottom-nav-items">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="bottom-nav-icon"
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    y: isActive ? -2 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 2
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </motion.span>
                
                {isActive && (
                  <motion.div
                    layoutId="bottomIndicator"
                    style={{
                      position: 'absolute',
                      top: -2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 20,
                      height: 3,
                      background: '#dc2626',
                      borderRadius: 2
                    }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Navigation