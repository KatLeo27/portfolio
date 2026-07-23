import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';

const Github = ({ size = 20, ...props }: { size?: number; [key: string]: any }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }: { size?: number; [key: string]: any }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const contactLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/KatLeo27', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kathy-jane-leo-014648322', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:kathyjane.leo@gmail.com', label: 'Email' }
  ];

  return (
    <section 
      id="home" 
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 15px)',
        paddingBottom: '30px',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '48px', alignItems: 'center', width: '100%' }} className="hero-layout">
          
          {/* Left Column: Bio Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '650px',
              flexGrow: 1
            }}
          >
            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'var(--color-text-primary)'
              }}
            >
              Kathy Jane Leo
              <span 
                style={{ 
                  display: 'block', 
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  marginTop: '8px'
                }}
              >
                Building the Future with <span className="text-gradient">Backend & AI</span>
              </span>
            </motion.h1>

            {/* Subtitle / Pitch */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                maxWidth: '620px',
              }}
            >
              I'm a Computer Science undergraduate with a passion for building practical, user-focused software. I enjoy working across full-stack development, AI/ML, and data science, turning ideas into scalable and impactful applications while continuously learning new technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '8px',
                alignItems: 'center'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              <a href="#experience" className="btn btn-secondary">
                View Experience
              </a>
              
              {/* Social Icons */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px'
                }}
                className="social-icons-row"
              >
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(132, 136, 181, 0.25)',
                      background: 'rgba(132, 136, 181, 0.06)',
                      color: 'var(--color-text-secondary)',
                      transition: 'all var(--transition-fast)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-1)';
                      e.currentTarget.style.color = 'var(--color-accent-1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(200, 125, 135, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(132, 136, 181, 0.25)';
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Avatar Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            style={{
              flexShrink: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Glowing Backdrop Circle */}
            <div 
              style={{
                position: 'absolute',
                width: '105%',
                height: '105%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-accent-1) 0%, var(--color-accent-2) 100%)',
                opacity: 0.2,
                filter: 'blur(20px)',
                zIndex: 1
              }}
            />
            {/* Avatar image container */}
            <div
              style={{
                width: 'clamp(210px, 28vw, 290px)',
                height: 'clamp(210px, 28vw, 290px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #FFFFFF',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                zIndex: 2,
                background: '#FFFFFF'
              }}
            >
              <img 
                src="/avatar.jpeg" 
                alt="Kathy Jane Leo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Interactive Background (Visual Node grid or SVG) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.12,
          zIndex: 1,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="hero-background-art"
      >
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" style={{ filter: 'blur(1px)' }}>
          <circle cx="50" cy="50" r="30" stroke="var(--color-accent-1)" strokeWidth="0.2" strokeDasharray="2, 2" />
          <circle cx="50" cy="50" r="20" stroke="var(--color-accent-2)" strokeWidth="0.3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="var(--color-accent-3)" strokeWidth="0.1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="var(--color-accent-3)" strokeWidth="0.1" />
          {/* Animated node points */}
          <circle cx="50" cy="20" r="1.5" fill="var(--color-accent-1)" />
          <circle cx="20" cy="50" r="1.5" fill="var(--color-accent-2)" />
          <circle cx="80" cy="50" r="1.5" fill="var(--color-accent-2)" />
          <circle cx="50" cy="80" r="1.5" fill="var(--color-accent-1)" />
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-text-muted)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          zIndex: 2,
        }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} style={{ color: 'var(--color-accent-1)' }} />
        </motion.div>
      </div>

      <style>{`
        .hero-layout {
          flex-direction: column-reverse;
        }
        @media (min-width: 769px) {
          .hero-layout {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
        @media (max-width: 768px) {
          .hero-background-art {
            width: 100% !important;
            opacity: 0.05 !important;
          }
          .social-icons-row {
            margin-top: 8px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
