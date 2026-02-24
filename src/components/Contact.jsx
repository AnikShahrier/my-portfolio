import { motion } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
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
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="youremail@example.com" required />
        </div>
        
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your message here..." required />
        </div>
        
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send size={18} style={{ marginRight: '0.5rem' }} />
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8892b0' }}>
          <Mail size={18} color="#00d9ff" />
          <span>mdanikshahrier@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8892b0' }}>
          <MapPin size={18} color="#00d9ff" />
          <span>Mirpur-1, Dhaka</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact