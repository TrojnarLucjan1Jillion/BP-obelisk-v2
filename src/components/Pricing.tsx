export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container fade-up">
        <h2 style={{ textAlign: 'center' }}>Pathway services</h2>
        <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto var(--space-2)' }}>
          One-time pathway delivery, with optional annual monitoring. No subscriptions to manage.
        </p>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Free diagnostic</h3>
            <p style={{ flex: 1 }}>
              <strong>€0</strong>
              <br />
              Two-minute diagnostic
              <br />
              Headline pathway summary
              <br />
              No signup required
            </p>
            <a href="#diagnostic" className="btn btn-ghost" style={{ width: '100%', marginTop: 'auto' }}>
              Try the diagnostic
            </a>
          </div>

          <div className="price-card" style={{ border: '2px solid var(--amber)' }}>
            <h3>Pathway Report</h3>
            <p style={{ flex: 1 }}>
              <strong>€175 one-time</strong>
              <br />
              Full pathway report tailored to your country, region, and commune
              <br />
              Documentary checklist
              <br />
              Recommended builder shortlist
              <br />
              Persistent customer profile
            </p>
            <a href="#" className="btn btn-main" style={{ width: '100%', marginTop: 'auto' }}>
              Buy the report
            </a>
          </div>

          <div className="price-card">
            <h3>Premium Concierge</h3>
            <p style={{ flex: 1 }}>
              <strong>€499 one-time</strong>
              <br />
              Everything in the report
              <br />
              Permit submission preparation
              <br />
              Builder matching from the network
              <br />
              Insurance setup (post FSMA registration)
            </p>
            <a href="#" className="btn btn-ghost" style={{ width: '100%', marginTop: 'auto' }}>
              Book the concierge
            </a>
          </div>
        </div>

        <div className="price-card" style={{ maxWidth: 600, margin: 'var(--space-3) auto 0', borderStyle: 'dashed' }}>
          <h3 style={{ marginBottom: 8 }}>Annual monitoring</h3>
          <p style={{ marginBottom: 0 }}>
            <strong>€49 / year</strong> &middot; Optional add-on after any pathway purchase. Receive structured alerts whenever a regulation affecting your registered pathway changes (such as the Walloon decree of 13 December 2023, in force 1 April 2024).
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: 'var(--space-3)', opacity: 0.7 }}>
          14-day refund on all pathway reports. EU VAT handled automatically.
        </p>
      </div>
    </section>
  );
}
