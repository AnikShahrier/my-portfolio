import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import cvofoishik from '../assets/Resume_of_Anik.pdf'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "I build things for the web"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-container">
      {/* Animated Background Rings */}
      <div className="orbit-rings">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'rgb(161, 59, 59)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'monospace' }}>
            As-salamu alaikum, I am
          </p>
        </motion.div>

        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="Anik Shahrier">Anik Shahrier</h1>
        </div>

        <div className="typing-container">
          <span className="typing-text">{text}</span>
          <span className="cursor"></span>
        </div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on accessible, human-centered products.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a href="#projects" className="btn-primary">
            Check out my work
          </a>
          <a href={cvofoishik} className="btn-secondary" download>
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <ArrowDown size={20} />
      </motion.div>
    </div>
  )
}

export default Hero