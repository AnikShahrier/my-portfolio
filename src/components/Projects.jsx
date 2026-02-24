import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with real-time inventory, payments, and admin dashboard.',
      icon: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'AI Task Manager',
      description: 'Smart task management app with AI-powered prioritization and natural language input.',
      icon: '🤖',
      tags: ['Next.js', 'OpenAI', 'Prisma', 'Tailwind']
    },
    {
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency tracking with portfolio management and price alerts.',
      icon: '📊',
      tags: ['React', 'WebSocket', 'Chart.js', 'Firebase']
    },
    {
      title: 'Social Media App',
      description: 'Full-stack social platform with real-time messaging, stories, and content sharing.',
      icon: '💬',
      tags: ['React Native', 'GraphQL', 'AWS', 'Redis']
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
                  <a href="#" style={{ color: '#8892b0', transition: 'color 0.3s' }}>
                    <Github size={20} />
                  </a>
                  <a href="#" style={{ color: '#8892b0', transition: 'color 0.3s' }}>
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