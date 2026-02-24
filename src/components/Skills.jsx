import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  GitBranch, 
  Figma, 
  Terminal, 
  Cloud,
  Layers,
  Box,
  Cpu,
  Globe
} from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js', level: 90 },
    { name: 'Node.js / Express', level: 85 },
    { name: 'Python / Django', level: 30 },
    { name: 'Database Design', level: 85 },
    { name: 'UI/UX Design', level: 75 },
  ]

  const tools = [
    { name: 'VS Code', icon: Code2 },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Figma },
    { name: 'Terminal', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Docker', icon: Box },
    { name: 'Redux', icon: Layers },
    { name: 'GraphQL', icon: Globe },
    { name: 'Linux', icon: Cpu },
    { name: 'Postman', icon: Server },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
      Tools & Technologies I work with daily
      </motion.p>

      {/* Skills Progress Bars */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <motion.div
        className="tools-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="tools-title">Tools</h3>
        
        <motion.div
          className="tools-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                className="tool-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="tool-icon-wrapper">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills