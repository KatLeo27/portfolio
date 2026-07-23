import { motion } from 'framer-motion';
import { Code2, Globe, Brain, Wrench, Database, Cloud } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={20} style={{ color: 'var(--color-accent-1)' }} />,
      skills: ['Python', 'Java', 'C++', 'C']
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={20} style={{ color: 'var(--color-accent-2)' }} />,
      skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs', 'HTML & CSS']
    },
    {
      title: 'AI & Data Science',
      icon: <Brain size={20} style={{ color: 'var(--color-accent-1)' }} />,
      skills: ['RAG Frameworks', 'Vector Databases', 'Embeddings', 'Machine Learning', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenAI API']
    },
    {
      title: 'Salesforce & CRM',
      icon: <Cloud size={20} style={{ color: 'var(--color-accent-2)' }} />,
      skills: ['Salesforce Platform', 'Sales Cloud', 'Service Cloud']
    },
    {
      title: 'Database Management',
      icon: <Database size={20} style={{ color: 'var(--color-accent-3)' }} />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={20} style={{ color: 'var(--color-accent-3)' }} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'Docker', 'Postman']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid rgba(188, 185, 216, 0.05)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Code2 style={{ color: 'var(--color-accent-1)' }} /> Technical Skills
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my programming languages, frameworks, and engineering tools.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Category Title */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '12px'
                }}
              >
                {category.icon}
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List - Wrapped Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="badge"
                    style={{ 
                      fontSize: '0.85rem', 
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(132, 136, 181, 0.04)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                      transition: 'all var(--transition-fast)',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-1)';
                      e.currentTarget.style.color = 'var(--color-accent-1)';
                      e.currentTarget.style.background = 'rgba(200, 125, 135, 0.05)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(200, 125, 135, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.background = 'rgba(132, 136, 181, 0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
