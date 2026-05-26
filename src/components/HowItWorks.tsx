export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container fade-up">
        <div className="three-col">
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 21v-2a4 4 0 0 0-4-4H8M22 10l-6-6-6 6M16 4v16" />
            </svg>
            <h3>1. Diagnose</h3>
            <p>Free pathway diagnostic in two minutes. No signup, no obligation.</p>
          </div>
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <h3>2. Verify</h3>
            <p>Your full pathway report, written for your country, region, and commune, signed off by retained legal counsel.</p>
          </div>
          <div className="icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <h3>3. Deliver</h3>
            <p>Vetted European builders take it from here. We coordinate permits, insurance, and ongoing monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
