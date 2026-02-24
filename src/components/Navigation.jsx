import { motion } from 'framer-motion'
import { Home, User, FolderGit2, Wrench, Mail, Github, Linkedin, Facebook, Instagram, Sun, Moon } from 'lucide-react'
import profileImage from '../assets/profilepic.jpg'

const Navigation = ({ activeSection, scrollToSection, theme, toggleTheme }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AnikShahrier/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-anik-shahrier/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/anikshahrieroishik/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/shahrier_oishik/', label: 'Instagram' },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="geo-circle geo-circle-1"></div>
          <div className="geo-circle geo-circle-2"></div>
          <div className="geo-line"></div>
          
          <motion.div 
            className="profile-image-wrapper"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            <div className="orbit-ring orbit-ring-1"></div>
            <div className="orbit-ring orbit-ring-2"></div>
            <div className="image-container">
              <img src={profileImage} alt="Anik Shahrier" className="profile-img" />
              <div className="status-dot"></div>
            </div>
          </motion.div>

          <motion.h2 
            className="profile-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Anik Shahrier
          </motion.h2>
          
          <motion.p 
            className="profile-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Software Engineer
          </motion.p>

          <motion.div 
            className="social-links-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + (index * 0.1), type: "spring" }}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        <nav className="nav-container">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-pill ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (index * 0.08), duration: 0.4 }}
                
                whileTap={{ scale: 0.95 }}
              >
                <div className="pill-icon">
                  <Icon size={18} />
                </div>
                <span className="pill-text">{item.label}</span>
                {isActive && <div className="active-dot"></div>}
              </motion.button>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-profile">
            <img src={profileImage} alt="Anik" className="mobile-avatar" />
            <div className="mobile-info">
              <h3>Anik Shahrier</h3>
              <p>Software Engineer</p>
            </div>
          </div>
          
          <div className="mobile-header-actions">
            {/* Social links */}
            <div className="mobile-socials">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="mobile-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
            
            {/* FIXED: Theme toggle with proper onClick */}
            <button 
              className="mobile-theme-btn" 
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - ONLY SHOWS ON MOBILE VIA CSS */}
      <nav className="mobile-bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              type="button"
            >
              <div className="mobile-nav-icon">
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="mobile-nav-label">{item.label}</span>
              {isActive && <div className="mobile-nav-indicator"></div>}
            </button>
          )
        })}
      </nav>
    </>
  )
}

export default Navigation