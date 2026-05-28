import { useState } from 'react';
import { Link } from 'wouter';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    if (email.trim()) {
      console.log('Footer email captured:', email);
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/logo.png" alt="Obelisk" className="nav-logo" style={{ marginBottom: 8 }} />
            <p style={{ opacity: 0.7 }}>
              European tiny living,
              <br />
              compliant by default.
            </p>
          </div>
          <div className="footer-links">
            <strong className="small-caps">Platform</strong>
            <a href="/#diagnostic">Diagnostic</a>
            <a href="/#pathways">Pathways</a>
            <a href="/#pricing">Pricing</a>
            <Link href="/login">Customer login</Link>
          </div>
          <div className="footer-links">
            <strong className="small-caps">For Builders</strong>
            <a href="/#builders">Apply</a>
            <a href="#">Network agreement</a>
            <a href="#">Pathway training</a>
            <Link href="/login">Builder login</Link>
          </div>
          <div className="footer-links">
            <strong className="small-caps">Stay updated</strong>
            <p style={{ marginBottom: 8, fontSize: '0.85rem' }}>
              Quarterly regulatory digest, no spam.
            </p>
            {!submitted ? (
              <div className="email-capture" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address for regulatory digest"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  style={{ background: 'transparent', color: '#fff' }}
                />
                <button onClick={submit}>&rarr;</button>
              </div>
            ) : (
              <p style={{ color: 'var(--amber)', fontSize: '0.85rem', marginTop: 4 }}>
                Got it, we'll be in touch.
              </p>
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-2)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.8rem', opacity: 0.6 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#">Company</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
          <div>&copy; 2026 Obelisk. Built in Antwerp.</div>
        </div>
      </div>
    </footer>
  );
}
