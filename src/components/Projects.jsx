import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: '3D Dress Customizer',
      description: 'A powerful, interactive 3D Fashion Configuration Tool that allows users to design, customize, and visualize dresses in real-time directly from their browser.',
      icon: '🧊',
      tags: ['React', 'Three.js', 'OpenAI API', 'Node.js'],
      github: 'https://github.com/AnikShahrier/3D-dress-designer',
      demo: 'https://github.com/AnikShahrier/3D-dress-designer'
    },
    {
      title: 'RBAC Inventory System',
      description: 'A robust, scalable, and user-friendly Inventory Management System designed to streamline stock tracking, order management, and sales reporting.',
      icon: '🤖',
      tags: ['Angular', 'Node.js', 'Express', 'Dbaevier', 'Tailwind'],
      github: 'https://github.com/AnikShahrier/InventorySystem-v2',
      demo: 'https://github.com/AnikShahrier/InventorySystem-v2'
    },
    {
      title: 'Booking API',
      description: 'A RESTful API for managing bookings and reservations with real-time availability checks.',
      icon: '📊',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/AnikShahrier/Booking-api',
      demo: 'https://github.com/AnikShahrier/Booking-api'
    },
    {
      title: 'MovieHub',
      description: 'MovieHUB is a modern, responsive web application that serves as your ultimate guide to the world of cinema.',
      icon: '🎬',
      tags: ['React.js', 'TMDB API', 'Node.js', 'Express'],
      github: 'https://github.com/AnikShahrier/MovieHUB',
      demo: 'https://github.com/AnikShahrier/MovieHUB'
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
        Featured Projects
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Some things I've built along the way
      </motion.p>

      <div className="cards-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-image">
              {project.icon}
            </div>
            <div className="project-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h3>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#8892b0', transition: 'color 0.3s' }}>
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#8892b0', transition: 'color 0.3s' }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p style={{ color: '#8892b0', fontSize: '0.95rem', marginBottom: '1rem' }}>
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects