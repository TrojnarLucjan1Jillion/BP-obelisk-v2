export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container fade-up">
        <h2>How it works</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-step-number" aria-hidden="true">01</div>
            <div className="process-step-content">
              <h3>Diagnose</h3>
              <p>Free pathway diagnostic in two minutes. No signup, no obligation. Three questions about your country, land status, and intended use.</p>
            </div>
          </div>
          <div className="process-connector" aria-hidden="true" />
          <div className="process-step">
            <div className="process-step-number" aria-hidden="true">02</div>
            <div className="process-step-content">
              <h3>Verify</h3>
              <p>Your full pathway report, written for your country, region, and commune, signed off by retained legal counsel. One document replaces six months of research.</p>
            </div>
          </div>
          <div className="process-connector" aria-hidden="true" />
          <div className="process-step">
            <div className="process-step-number" aria-hidden="true">03</div>
            <div className="process-step-content">
              <h3>Deliver</h3>
              <p>Vetted European builders take it from here. We coordinate permits, insurance, and ongoing monitoring. You build, not research.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
