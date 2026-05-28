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
    <header role="banner" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <nav id="nav" className={scrolled ? 'scrolled' : ''} style={{ position: 'static' }}>
        <Link href="/" style={{ display: 'block' }}>
          <img src="/logo.png" alt="Obelisk" className="nav-logo" />
        </Link>
        <div className="nav-links">
          <a href="/#how-it-works">How it works</a>
          <a href="/#pathways">Pathways</a>
          <a href="/#builders">For builders</a>
          <a href="/#pricing">Pricing</a>
        </div>
        <Link href="/login" className="nav-link" style={{ fontSize: '0.85rem', opacity: 0.85 }}>
          Sign in
        </Link>
      </nav>
    </header>
  );
}
