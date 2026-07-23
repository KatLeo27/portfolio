import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, School } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  resultLabel: string;
  resultValue: string;
  details: string;
  icon: React.ReactNode;
}

export default function Education() {
  const educationData: EducationItem[] = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'VIT Chennai',
      timeline: 'Expected Jun 2028',
      resultLabel: 'Current CGPA',
      resultValue: '8.99 / 10.0',
      details: 'Specializing in computer science foundations, algorithms, data structures, backend engineering, and databases. Actively involved in VIT technical clubs.',
      icon: <GraduationCap size={22} style={{ color: 'var(--color-accent-1)' }} />
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: 'Base PU College, Bangalore',
      timeline: 'Completed Jun 2024',
      resultLabel: 'Performance',
      resultValue: '93.5%',
      details: 'Focused on PCMC (Physics, Chemistry, Mathematics, Computer Science). Built a strong mathematical and logical foundation.',
      icon: <BookOpen size={20} style={{ color: 'var(--color-accent-2)' }} />
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'PSBB Learning Leadership Academy, Bangalore',
      timeline: 'Completed May 2022',
      resultLabel: 'Performance',
      resultValue: '93.6%',
      details: 'General science, mathematics, and introductory coding principles.',
      icon: <School size={20} style={{ color: 'var(--color-accent-3)' }} />
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="education" className="section" style={{ borderTop: '1px solid rgba(188, 185, 216, 0.05)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <GraduationCap style={{ color: 'var(--color-accent-2)' }} /> Education
          </h2>
          <p className="section-subtitle">
            My academic journey and scholastic milestones.
          </p>
        </div>

        {/* Education Stack */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '28px',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                position: 'relative'
              }}
            >
              {/* Left Column Icon */}
              <div 
                style={{
                  background: 'rgba(188, 185, 216, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {edu.icon}
              </div>

              {/* Right Column Details */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                  className="edu-header-row"
                >
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-accent-1)', fontWeight: '500' }}>
                      {edu.institution}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }} className="edu-meta">
                    <span 
                      className="badge" 
                      style={{ 
                        fontSize: '0.8rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px' 
                      }}
                    >
                      <Calendar size={12} /> {edu.timeline}
                    </span>
                    <span 
                      className="badge badge-accent-2"
                      style={{ 
                        fontSize: '0.8rem',
                        fontWeight: '600', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px'
                      }}
                    >
                      <Award size={12} /> {edu.resultLabel}: {edu.resultValue}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
                  {edu.details}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 600px) {
          .edu-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .edu-meta {
            align-items: flex-start !important;
            margin-top: 4px;
          }
        }
      `}</style>
    </section>
  );
}
