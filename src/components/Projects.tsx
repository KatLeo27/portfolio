import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, X, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  diagram: React.ReactNode;
  features: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered GRC Platform',
      category: 'Enterprise AI & Automation',
      description: 'An AI-driven Governance, Risk & Compliance (GRC) platform that automates vendor security assessments by analyzing compliance documents and generating risk insights.',
      longDescription: 'This enterprise-grade GRC platform streamlines vendor risk assessments by parsing unstructured PDFs/documents, matching policies against standards, and scoring risk variables. Integrated directly with Salesforce, it offers security and compliance teams automated triggers, visual review pipelines, and custom AI insights generation.',
      role: 'Backend & AI Integration Developer',
      technologies: ['Node.js', 'Express.js', 'Salesforce API', 'OpenAI API', 'React.js', 'REST APIs', 'AI/LLMs'],
      features: [
        'Automated PDF parsing and semantic checking using LLMs',
        'Direct Salesforce Platform integration syncing vendor records and statuses',
        'Polished dashboard displaying security scorecards and compliance health metrics',
        'Compliance risk mitigation advisor engine'
      ],
      diagram: (
        <svg viewBox="0 0 400 160" width="100%" height="100%" style={{ background: '#111019', borderRadius: '8px', padding: '12px' }}>
          {/* Doc Upload */}
          <rect x="15" y="55" width="70" height="50" rx="6" fill="rgba(120, 172, 193, 0.08)" stroke="var(--color-accent-2)" strokeWidth="1" />
          <text x="50" y="80" fill="var(--color-text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Compliance Doc</text>
          <text x="50" y="92" fill="var(--color-text-secondary)" fontSize="7" textAnchor="middle">(PDF/TXT)</text>
          
          <path d="M 90 80 L 125 80" stroke="var(--color-border-hover)" strokeWidth="1.5" strokeDasharray="3, 3" markerEnd="url(#arrow)" />
          
          {/* AI Core */}
          <rect x="135" y="45" width="110" height="70" rx="8" fill="rgba(200, 125, 135, 0.08)" stroke="var(--color-accent-1)" strokeWidth="1.5" />
          <text x="190" y="70" fill="var(--color-accent-1)" fontSize="10" fontWeight="700" textAnchor="middle">OpenAI Analyzer</text>
          <text x="190" y="85" fill="var(--color-text-primary)" fontSize="8" textAnchor="middle">Semantic Audit</text>
          <text x="190" y="98" fill="var(--color-text-secondary)" fontSize="7" textAnchor="middle">&amp; Risk Grading</text>
          
          <path d="M 250 80 L 285 80" stroke="var(--color-border-hover)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Salesforce / Output */}
          <rect x="295" y="55" width="90" height="50" rx="6" fill="rgba(107, 117, 86, 0.08)" stroke="var(--color-accent-3)" strokeWidth="1" />
          <text x="340" y="80" fill="var(--color-text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Salesforce</text>
          <text x="340" y="92" fill="var(--color-text-secondary)" fontSize="7" textAnchor="middle">Workflow Synced</text>

          {/* Markers */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-1)" />
            </marker>
          </defs>
        </svg>
      )
    },
    {
      id: 2,
      title: 'RAG-Based Study Assistant',
      category: 'AI Research & Education',
      description: 'A context-aware study assistant that accepts multi-format document uploads and answers queries precisely using semantic search and retrieval.',
      longDescription: 'Built using modern AI engineering practices, this tool parses study materials, chunks and computes embeddings, saves them in a local vector database, and uses a retrieval loop to answer student questions. It guarantees hallucination-reduced replies by grounding responses strictly in user sources.',
      role: 'Lead AI Engineer',
      technologies: ['Python', 'RAG Framework', 'Vector Databases', 'Embeddings', 'OpenAI LLMs', 'Git/GitHub'],
      features: [
        'Document parsing and overlapping chunking strategy',
        'Vector store indexing for sub-second semantic search',
        'Augmented LLM prompt constructing reference citations',
        'Interactive CLI/UI query terminal'
      ],
      diagram: (
        <svg viewBox="0 0 400 160" width="100%" height="100%" style={{ background: '#111019', borderRadius: '8px', padding: '12px' }}>
          {/* Files */}
          <rect x="15" y="55" width="70" height="50" rx="6" fill="rgba(107, 117, 86, 0.08)" stroke="var(--color-accent-3)" strokeWidth="1" />
          <text x="50" y="80" fill="var(--color-text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Study Materials</text>
          <text x="50" y="92" fill="var(--color-text-secondary)" fontSize="7" textAnchor="middle">(Chunks &amp; Embed)</text>
          
          <path d="M 90 80 L 125 80" stroke="var(--color-border-hover)" strokeWidth="1.5" markerEnd="url(#arrow2)" />

          {/* Vector DB */}
          <rect x="135" y="45" width="110" height="70" rx="8" fill="rgba(120, 172, 193, 0.08)" stroke="var(--color-accent-2)" strokeWidth="1.5" />
          <text x="190" y="72" fill="var(--color-accent-2)" fontSize="10" fontWeight="700" textAnchor="middle">Vector DB Store</text>
          <text x="190" y="87" fill="var(--color-text-primary)" fontSize="8" textAnchor="middle">Similarity Search</text>
          
          <path d="M 250 80 L 285 80" stroke="var(--color-border-hover)" strokeWidth="1.5" strokeDasharray="3, 3" markerEnd="url(#arrow2)" />

          {/* Answer Engine */}
          <rect x="295" y="55" width="90" height="50" rx="6" fill="rgba(200, 125, 135, 0.08)" stroke="var(--color-accent-1)" strokeWidth="1" />
          <text x="340" y="80" fill="var(--color-text-primary)" fontSize="9" fontWeight="600" textAnchor="middle">Context LLM</text>
          <text x="340" y="92" fill="var(--color-text-secondary)" fontSize="7" textAnchor="middle">Grounded Answer</text>

          <defs>
            <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-2)" />
            </marker>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Cpu style={{ color: 'var(--color-accent-2)' }} /> Highlighted Projects
          </h2>
          <p className="section-subtitle">
            Engineered systems highlighting AI applications and robust backend architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-panel glass-panel-hover"
              onClick={() => setSelectedProject(project)}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Accent line */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: '3px',
                  background: project.id === 1 
                    ? 'linear-gradient(to right, var(--color-accent-1), var(--color-accent-2))'
                    : 'linear-gradient(to right, var(--color-accent-2), var(--color-accent-3))'
                }} 
              />

              <span 
                style={{ 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-muted)',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}
              >
                {project.category}
              </span>

              <h3 
                style={{ 
                  fontSize: '1.4rem', 
                  marginBottom: '16px', 
                  color: 'var(--color-text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {project.title}
              </h3>

              {/* Architecture Diagram preview */}
              <div style={{ marginBottom: '20px' }}>
                {project.diagram}
              </div>

              <p 
                style={{ 
                  fontSize: '0.95rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  flexGrow: 1
                }}
              >
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '6px', 
                  marginBottom: '20px' 
                }}
              >
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="badge" style={{ fontSize: '0.7rem' }}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="badge" style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  color: 'var(--color-accent-1)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  marginTop: 'auto'
                }}
              >
                View System Architecture &amp; Workflow <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
              }}
            >
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(5, 5, 8, 0.85)',
                  backdropFilter: 'blur(10px)',
                }}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="glass-panel"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '750px',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  padding: '32px',
                  zIndex: 101,
                  border: '1px solid rgba(188, 185, 216, 0.15)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(188, 185, 216, 0.05)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-primary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent-1)';
                    e.currentTarget.style.color = 'var(--color-accent-1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                >
                  <X size={18} />
                </button>

                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent-1)',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  {selectedProject.category}
                </span>

                <h3 
                  style={{ 
                    fontSize: '1.8rem', 
                    color: 'var(--color-text-primary)',
                    marginBottom: '24px',
                    paddingRight: '40px'
                  }}
                >
                  {selectedProject.title}
                </h3>

                {/* Full Architecture Diagram */}
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    System Flow Diagram:
                  </span>
                  {selectedProject.diagram}
                </div>

                {/* Role / Tech */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '16px',
                    marginBottom: '24px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--color-border)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block', textTransform: 'uppercase' }}>My Role</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>{selectedProject.role}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block', textTransform: 'uppercase' }}>Technologies</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="badge" style={{ fontSize: '0.7rem' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deep-dive description */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Project Overview</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '12px' }}>Core Engineering Features</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                        <Sparkles size={14} style={{ color: 'var(--color-accent-1)', flexShrink: 0, marginTop: '4px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
