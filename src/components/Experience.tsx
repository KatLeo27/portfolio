import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      role: 'Technical Specialist Intern',
      company: 'WarpDrive Tech Works',
      duration: 'May 2026 - Jul 2026',
      location: 'Bangalore, India (Onsite)',
      highlights: [
        'Backend development & AI solutions utilizing Python, Node.js, Express.js, Flask, and Django.',
        'Explored and implemented advanced AI systems including RAG (Retrieval-Augmented Generation), vector databases, document embeddings, and Model Context Protocol (MCP) integrations.',
        'Automated enterprise workflows and gained hand-on experience with Salesforce CRM environments.',
        'Contributed to business analysis, client requirement gathering, process documentation, and technical solution designs.'
      ],
      tags: ['Python', 'Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs', 'RAG', 'Vector Databases', 'Salesforce']
    },
    {
      type: 'campus',
      role: 'Technical Member (Backend Development)',
      company: 'Nexus VITC',
      duration: '2024 - Present',
      location: 'Chennai, India',
      highlights: [
        'Collaborating with backend teams on developing campus utility tools and managing server-side API systems.',
        'Mentoring peers on web development technologies and database architectures.'
      ],
      tags: ['Backend', 'API Development', 'Databases', 'Collaboration']
    },
    {
      type: 'campus',
      role: 'Event Management Member',
      company: 'Hackclub VITC',
      duration: '2025 - 2026',
      location: 'Chennai, India',
      highlights: [
        'Organized and coordinated club events, managing logistics, scheduling, and participant outreach for workshops and hackathons.',
        'Collaborated with cross-functional teams to design promotional campaigns and ensure smooth operations of club activities.'
      ],
      tags: ['Event Management', 'Coordination', 'Public Relations', 'Logistics']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid rgba(188, 185, 216, 0.05)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Briefcase style={{ color: 'var(--color-accent-1)' }} /> Technical Experience
          </h2>
          <p className="section-subtitle">
            Professional internships and active technical roles on campus.
          </p>
        </div>

        {/* Timeline Container */}
        <div 
          style={{
            position: 'relative',
            maxWidth: '850px',
            margin: '0 auto',
            paddingLeft: '32px'
          }}
        >
          {/* Timeline Line */}
          <div 
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--color-accent-1) 0%, var(--color-border) 50%, var(--color-accent-2) 100%)',
              opacity: 0.3
            }}
          />

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                
                {/* Timeline node */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '8px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: exp.type === 'work' ? 'var(--color-accent-1)' : 'var(--color-accent-2)',
                    boxShadow: exp.type === 'work' 
                      ? '0 0 10px var(--color-accent-1)' 
                      : '0 0 10px var(--color-accent-2)',
                    border: '3px solid var(--color-bg)',
                    zIndex: 2,
                    marginLeft: '-1px'
                  }}
                />

                {/* Glass Card */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass-panel glass-panel-hover"
                  style={{
                    padding: '28px',
                    position: 'relative',
                  }}
                >
                  {/* Card Header */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '16px'
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {exp.role}
                      </h3>
                      <span 
                        style={{ 
                          fontSize: '1rem', 
                          fontWeight: '600', 
                          color: exp.type === 'work' ? 'var(--color-accent-1)' : 'var(--color-accent-2)' 
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <span 
                        className="badge"
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px',
                          color: 'var(--color-text-secondary)'
                        }}
                      >
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <span 
                        style={{ 
                          fontSize: '0.8rem', 
                          color: 'var(--color-text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul 
                    style={{ 
                      listStyle: 'none', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '12px',
                      marginBottom: '20px'
                    }}
                  >
                    {exp.highlights.map((item, key) => (
                      <li key={key} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-accent-2)', marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
