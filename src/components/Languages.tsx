import { motion } from 'framer-motion';
import { Languages as LangIcon, Globe } from 'lucide-react';

interface LanguageItem {
  name: string;
  proficiency: string;
  rating: number; // 1 to 5
}

export default function Languages() {
  const languages: LanguageItem[] = [
    { name: 'English', proficiency: 'Bilingual / Native', rating: 5 },
    { name: 'Tamil', proficiency: 'Bilingual / Native', rating: 5 },
    { name: 'Hindi', proficiency: 'Professional Working', rating: 4 },
    { name: 'Kannada', proficiency: 'Limited Working', rating: 3 },
    { name: 'French', proficiency: 'Elementary', rating: 1 },
    { name: 'German', proficiency: 'Elementary', rating: 1 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="languages" className="section" style={{ borderTop: '1px solid rgba(188, 185, 216, 0.05)', paddingBottom: '60px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <LangIcon style={{ color: 'var(--color-accent-1)' }} /> Languages
          </h2>
          <p className="section-subtitle">
            Multilingual skills and proficiency levels.
          </p>
        </div>

        {/* Languages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              variants={itemVariants}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {/* Globe Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(188, 185, 216, 0.05)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Globe size={18} style={{ color: 'var(--color-accent-2)' }} />
              </div>

              {/* Language Name & Rating */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                    {lang.name}
                  </span>
                  
                  {/* Rating Dots */}
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: i < lang.rating 
                            ? 'var(--color-accent-2)' 
                            : 'rgba(188, 185, 216, 0.15)',
                          boxShadow: i < lang.rating 
                            ? '0 0 5px var(--color-accent-2)' 
                            : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {lang.proficiency}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
