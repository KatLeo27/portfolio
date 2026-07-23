import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';

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


export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('kathyjane.leo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus('error');
      return;
    }
    setSubmitStatus('submitting');
    
    // Simulate submission delay
    setTimeout(() => {
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--color-border)', background: 'rgba(228, 226, 236, 0.5)', padding: '80px 0 40px 0', backdropFilter: 'blur(10px)' }}>
      <div className="container">
        
        {/* Contact Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            marginBottom: '60px'
          }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h2 className="section-title">Let's Connect</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '400px' }}>
                I'm currently seeking internship opportunities and technical projects. If you have any inquiries or just want to chat, feel free to reach out!
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Email item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(132, 136, 181, 0.1)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-1)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Email Me</span>
                  <a 
                    href="mailto:kathyjane.leo@gmail.com" 
                    style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-1)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                  >
                    kathyjane.leo@gmail.com
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copied ? 'var(--color-accent-3)' : 'var(--color-text-muted)',
                    cursor: 'pointer',
                    padding: '8px',
                    marginLeft: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Copy Email"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(132, 136, 181, 0.1)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-2)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Call Me</span>
                  <a 
                    href="tel:+919972013941" 
                    style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                  >
                    +91 9972013941
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(132, 136, 181, 0.1)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-3)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Location</span>
                  <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text-primary)' }}>
                    Bangalore, India
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--color-text-primary)' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(132, 136, 181, 0.35)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-1)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com" 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(132, 136, 181, 0.35)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-2)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>Message</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="Hey, let's work together..." 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(132, 136, 181, 0.35)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    resize: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-1)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>

              <button 
                type="submit" 
                disabled={submitStatus === 'submitting'}
                className="btn btn-primary"
                style={{ width: '100%', gap: '10px' }}
              >
                {submitStatus === 'submitting' ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                <Send size={16} />
              </button>

              {submitStatus === 'error' && (
                <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-1)', textAlign: 'center' }}>
                  Please fill out all fields.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div 
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
              &copy; {new Date().getFullYear()} Kathy Jane Leo. All rights reserved.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px', margin: 0, fontFamily: 'var(--font-mono)' }}>
              Built with React, TypeScript &amp; Framer Motion.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://github.com/KatLeo27" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kathy-jane-leo-014648322" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-2)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
