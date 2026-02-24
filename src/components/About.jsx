import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building complete applications from database to user interface with modern technologies.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning interfaces that users love to interact with.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Making applications fast, efficient, and scalable for the best user experience.'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expert in React, Node.js, TypeScript, and cutting-edge web development tools.'
    }
  ]

  return (
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I enjoy creating things that live on the internet. My interest in web development started back in 2015.
      </motion.p>

      <div className="cards-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-icon">
              <feature.icon size={24} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About