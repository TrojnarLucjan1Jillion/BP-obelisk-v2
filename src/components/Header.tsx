import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" style={{ display: 'block' }}>
        <img src="/logo.png" alt="Obelisk" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <a href="/#how-it-works">How it works</a>
        <a href="/#pathways">Pathways</a>
        <a href="/#builders">For builders</a>
        <a href="/#pricing">Pricing</a>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Link href="/login" className="nav-link" style={{ fontSize: '0.85rem', opacity: 0.85 }}>
          Sign in
        </Link>
        <a href="/#diagnostic" className="btn btn-main" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
          Check my pathway
        </a>
      </div>
    </nav>
  );
}
