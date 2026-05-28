export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--navy)', color: 'var(--ivory)' }}>
      <div className="container fade-up">
        <h2 style={{ color: 'var(--ivory)' }}>Pathway services</h2>
        <p style={{ maxWidth: 600, marginBottom: 'var(--space-2)', opacity: 0.75 }}>
          One-time pathway delivery, with optional annual monitoring. No subscriptions to manage.
        </p>
        <div className="pricing-grid">
          <div className="price-card" style={{ background: 'rgba(253,243,231,0.06)', borderColor: 'rgba(253,243,231,0.15)', color: 'var(--ivory)' }}>
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

          <div className="price-card" style={{ border: '2px solid var(--amber)', background: 'rgba(192,135,59,0.08)', color: 'var(--ivory)' }}>
            <h3 style={{ color: 'var(--ivory)' }}>Pathway Report</h3>
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

          <div className="price-card" style={{ background: 'rgba(253,243,231,0.06)', borderColor: 'rgba(253,243,231,0.15)', color: 'var(--ivory)' }}>
            <h3 style={{ color: 'var(--ivory)' }}>Premium Concierge</h3>
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

        <div className="price-card" style={{ maxWidth: 600, margin: 'var(--space-3) auto 0', borderStyle: 'dashed', background: 'rgba(253,243,231,0.04)', borderColor: 'rgba(253,243,231,0.2)', color: 'var(--ivory)' }}>
          <h3 style={{ marginBottom: 8, color: 'var(--ivory)' }}>Annual monitoring</h3>
          <p style={{ marginBottom: 0 }}>
            <strong>€49 / year</strong> &middot; Optional add-on after any pathway purchase. Receive structured alerts whenever a regulation affecting your registered pathway changes (such as the Walloon decree of 13 December 2023, in force 1 April 2024).
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: 'var(--space-3)', color: 'var(--ivory)', opacity: 0.5 }}>
          14-day refund on all pathway reports. EU VAT handled automatically.
        </p>
      </div>
    </section>
  );
}
