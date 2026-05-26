import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" style={{ display: 'block' }}>
        <img src="/logo.png" alt="Obelisk" className="nav-logo" />
      </a>
      <div className="nav-links">
        <a href="#how-it-works">How it works</a>
        <a href="#pathways">Pathways</a>
        <a href="#builders">For builders</a>
        <a href="#pricing">Pricing</a>
      </div>
      <a href="#diagnostic" className="btn btn-main" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
        Check my pathway
      </a>
    </nav>
  );
}
