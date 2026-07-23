import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X, ShieldCheck } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  badgeClass: string;
}

export default function Certificates() {
  const [activePreview, setActivePreview] = useState<Certificate | null>(null);

  const courseraCertificates: Certificate[] = [
    { title: 'Full Stack Software Developer', issuer: 'Coursera', image: '/certificates/Fullstack-software-developer-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Node.js & Express Development', issuer: 'Coursera', image: '/certificates/Node.js-and-express-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Frontend Development with React', issuer: 'Coursera', image: '/certificates/Frontend-with-react-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'HTML, CSS & JS for Web Dev', issuer: 'Coursera', image: '/certificates/HTML-CSS-JS-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Introduction to Cloud Computing', issuer: 'Coursera', image: '/certificates/Cloud-computing-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Intro to Software Engineering', issuer: 'Coursera', image: '/certificates/Intro-to-software-engineering-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Git & GitHub Version Control', issuer: 'Coursera', image: '/certificates/Git-and-github-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'Career Guide & Interview Prep', issuer: 'Coursera', image: '/certificates/Career-guide-and-interview-preparation-certificate.png', badgeClass: 'badge-accent-1' },
    { title: 'NPTEL Technical Certification', issuer: 'NPTEL', image: '/certificates/NPTEL Certificate.png', badgeClass: 'badge-accent-3' }
  ];

  const claudeCertificates: Certificate[] = [
    { title: 'Claude Code in Action', issuer: 'Anthropic', image: '/certificates/Claude-code-in-action-certificate.png', badgeClass: 'badge-accent-2' },
    { title: 'Claude Code 101', issuer: 'Anthropic', image: '/certificates/Claude-code-101-certificate.png', badgeClass: 'badge-accent-2' },
    { title: 'Networking Basics', issuer: 'Cisco', image: '/certificates/cisco-networking-basics.png', badgeClass: 'badge-accent-2' },
    { title: 'Claude Platform 101', issuer: 'Anthropic', image: '/certificates/Claude-platform-101-certificate.png', badgeClass: 'badge-accent-2' },
    { title: 'Introduction to IoT & Digital Transformation', issuer: 'Cisco', image: '/certificates/cisco-iot-digital-transformation.png', badgeClass: 'badge-accent-2' },
    { title: 'Claude 101 Core Foundations', issuer: 'Anthropic', image: '/certificates/Claude-101-certificate.png', badgeClass: 'badge-accent-2' },
    { title: 'Introduction to Claude Co-working', issuer: 'Anthropic', image: '/certificates/Introduction-to-claude-cowork-certificate.png', badgeClass: 'badge-accent-2' }
  ];

  // Duplicate items for seamless infinite scrolling loop
  const track1Items = [...courseraCertificates, ...courseraCertificates];
  const track2Items = [...claudeCertificates, ...claudeCertificates, ...claudeCertificates];

  return (
    <section id="certificates" className="section" style={{ borderTop: '1px solid rgba(188, 185, 216, 0.05)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Award style={{ color: 'var(--color-accent-1)' }} /> Certifications &amp; Focus
          </h2>
          <p className="section-subtitle">
            Professional credentials in software engineering, cloud computing, and AI architectures.
          </p>
        </div>
      </div>

      {/* Marquee Track 1 (Right to Left) */}
      <div style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginBottom: '24px' }}>
        <div className="marquee-container">
          <div className="marquee-track scroll-left">
            {track1Items.map((cert, idx) => (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover cert-card"
                onClick={() => setActivePreview(cert)}
              >
                <div className="cert-img-container">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay">
                    <Eye size={20} />
                    <span>Preview Document</span>
                  </div>
                </div>
                <div className="cert-details">
                  <span className={`badge ${cert.badgeClass}`} style={{ alignSelf: 'flex-start', fontSize: '0.7rem' }}>
                    {cert.issuer}
                  </span>
                  <h4>{cert.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Track 2 (Left to Right) */}
      <div style={{ position: 'relative', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div className="marquee-container">
          <div className="marquee-track scroll-right">
            {track2Items.map((cert, idx) => (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover cert-card"
                onClick={() => setActivePreview(cert)}
              >
                <div className="cert-img-container">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay">
                    <Eye size={20} />
                    <span>Preview Document</span>
                  </div>
                </div>
                <div className="cert-details">
                  <span className={`badge ${cert.badgeClass}`} style={{ alignSelf: 'flex-start', fontSize: '0.7rem' }}>
                    {cert.issuer}
                  </span>
                  <h4>{cert.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal */}
      <AnimatePresence>
        {activePreview && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePreview(null)}
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(5, 5, 8, 0.85)',
                backdropFilter: 'blur(10px)'
              }}
            />

            {/* Modal Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-panel"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                zIndex: 121,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePreview(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(132, 136, 181, 0.1)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  zIndex: 3
                }}
              >
                <X size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-accent-2)' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                  Verified Certificate: {activePreview.title}
                </h3>
              </div>

              {/* Render Image */}
              <div 
                style={{ 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--color-border)',
                  background: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={activePreview.image} 
                  alt={activePreview.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          display: flex;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 20px;
          padding: 10px 0;
        }

        .marquee-track:hover {
          animation-play-state: paused !important;
        }

        .scroll-left {
          animation: marquee-scroll-left 45s linear infinite;
        }

        .scroll-right {
          animation: marquee-scroll-right 35s linear infinite;
        }

        .cert-card {
          width: 280px;
          flex-shrink: 0;
          padding: 12px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cert-img-container {
          position: relative;
          width: 100%;
          height: 160px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
        }

        .cert-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .cert-card:hover .cert-img-container img {
          transform: scale(1.05);
        }

        .cert-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(28, 26, 46, 0.45);
          display: flex;
          flex-direction: column;
          alignItems: center;
          justifyContent: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.3s;
          color: #FFFFFF;
        }

        .cert-card:hover .cert-overlay {
          opacity: 1;
        }

        .cert-overlay span {
          font-size: 0.8rem;
          font-weight: 550;
        }

        .cert-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cert-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-primary);
          line-height: 1.3;
          margin: 0;
          height: 38px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
