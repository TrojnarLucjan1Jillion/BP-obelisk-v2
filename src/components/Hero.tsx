import { useEffect, useRef } from 'react';

export default function Hero() {
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (graphicRef.current && window.scrollY < 800) {
        graphicRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-grid">
          <div className="fade-up">
            <h1>A tiny home you can legally call yours, anywhere in Europe.</h1>
            <p>
              Obelisk reads the regulation, builds your compliant pathway report, and connects you
              with a vetted builder. Skip the six-month research phase.
            </p>
            <div className="hero-actions">
              <a href="#diagnostic" className="btn btn-main">Check my pathway, free</a>
              <a href="#how-it-works" className="btn btn-ghost">How it works</a>
            </div>
          </div>
          <div className="hero-graphic fade-up" ref={graphicRef}>
            <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="120" width="80" height="5" fill="currentColor" opacity="0.8" />
              <rect x="25" y="125" width="2" height="5" fill="currentColor" />
              <rect x="73" y="125" width="2" height="5" fill="currentColor" />
              <path d="M20 120 L35 15 L65 15 L80 120 Z" stroke="currentColor" fill="none" strokeWidth="1.5" />
              <line x1="23" y1="99" x2="77" y2="99" stroke="currentColor" strokeWidth="0.5" />
              <line x1="26" y1="78" x2="74" y2="78" stroke="currentColor" strokeWidth="0.5" />
              <line x1="29" y1="57" x2="71" y2="57" stroke="currentColor" strokeWidth="0.5" />
              <line x1="32" y1="36" x2="68" y2="36" stroke="currentColor" strokeWidth="0.5" />
              <path d="M40 120 L70 36 M30 99 L60 15" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ticker small-caps">
        Belgium &nbsp;&middot;&nbsp; France &nbsp;&middot;&nbsp; Netherlands &nbsp;&middot;&nbsp; Germany &nbsp;&middot;&nbsp; Portugal
      </div>
    </header>
  );
}
