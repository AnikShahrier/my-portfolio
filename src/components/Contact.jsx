import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Loader2, Heart } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('https://formspree.io/f/mlgwanqn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.target.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="Your Name" 
            required 
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            placeholder="youremail@example.com" 
            required 
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message"
            placeholder="Your message here..." 
            required 
            disabled={isSubmitting}
          />
        </div>
        
        {/* Hidden field for your email */}
        <input type="hidden" name="_replyto" value="mdanikshahrier@gmail.com" />

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} style={{ marginRight: '0.5rem' }} className="spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} style={{ marginRight: '0.5rem' }} />
              Send Message
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.p 
            className="form-status success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ Message sent successfully! I'll get back to you soon.
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p 
            className="form-status error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.form>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      > 

     <div className="footer-contact">
          <a href="mailto:mdanikshahrier@gmail.com" className="footer-email">
            <Mail size={16} />
            mdanikshahrier@gmail.com
          </a>
          <span className="footer-location">
            <MapPin size={16} />
            Mirpur-1, Dhaka, Bangladesh
          </span>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Anik Shahrier. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} className="heart-icon" /> and lots of coffee
          </p>
        </div>
        
       
      </motion.div>
    </div>
  )
}

export default Contact