import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
      style={{
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a 
          href="#home" 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: '800', 
            textDecoration: 'none',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>Kathy Jane Leo</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-only">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '28px', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: activeSection === item.href.slice(1) 
                      ? 'var(--color-accent-1)' 
                      : 'var(--color-text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '4px 0'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.currentTarget.style.color = 'var(--color-text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                    }
                  }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-accent-1)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className="btn btn-secondary" 
            style={{ 
              padding: '8px 16px', 
              fontSize: '0.85rem', 
              borderRadius: 'var(--radius-sm)' 
            }}
          >
            Contact <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-primary)',
            cursor: 'pointer',
            padding: '4px',
            display: 'none', /* Toggled via CSS media query */
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          className="glass-panel"
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: '16px',
            right: '16px',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 49,
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: '500',
                    color: activeSection === item.href.slice(1) 
                      ? 'var(--color-accent-1)' 
                      : 'var(--color-text-primary)',
                    display: 'block',
                    padding: '8px 0'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            Contact <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* CSS overrides for desktop/mobile nav display */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
