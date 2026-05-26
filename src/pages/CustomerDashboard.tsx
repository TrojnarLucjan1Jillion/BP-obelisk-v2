import { Link, useLocation } from 'wouter';

export default function CustomerDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <Link href="/" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 32 }} />
        </Link>

        <div className="dash-nav-section">
          <div className="dash-section-label small-caps">Customer</div>
          <nav className="dash-nav">
            <a href="#" className="dash-nav-item active">
              <span className="dot" /> Pathway overview
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Documents
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Builder shortlist
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Monitoring feed
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Insurance setup
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Profile and billing
            </a>
          </nav>
        </div>

        <div className="dash-sidebar-foot">
          <div className="dash-userblock">
            <div className="dash-avatar">EM</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Emma M.</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>Premium plan</div>
            </div>
          </div>
          <button onClick={() => setLocation('/')} className="dash-signout">Sign out</button>
        </div>
      </aside>

      <main className="dash-main">
        <header className="dash-topbar">
          <div>
            <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>Pathway overview</div>
            <h1 style={{ margin: 0, fontSize: 28 }}>Welcome back, Emma.</h1>
          </div>
          <div className="dash-topbar-actions">
            <span className="dash-badge dash-badge-amber">Pathway active</span>
            <button className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: 13 }}>
              Download report (PDF)
            </button>
          </div>
        </header>

        <section className="dash-stat-grid">
          <div className="dash-stat">
            <div className="dash-stat-label">Your pathway</div>
            <div className="dash-stat-value">Wallonia habitation légère</div>
            <div className="dash-stat-meta">Décret du 2 mai 2019, in force 1 September 2019</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Compliance score</div>
            <div className="dash-stat-value">8 / 9</div>
            <div className="dash-stat-meta">Criteria met (3 required, 8 confirmed)</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Estimated timeline</div>
            <div className="dash-stat-value">6 to 8 months</div>
            <div className="dash-stat-meta">From application to legal occupation</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Estimated cost</div>
            <div className="dash-stat-value">€3,200 to €5,800</div>
            <div className="dash-stat-meta">Regulatory cost, excluding construction</div>
          </div>
        </section>

        <section className="dash-row">
          <div className="dash-card dash-card-wide">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Pathway progress</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>Step 3 of 6</span>
            </div>
            <div className="dash-stepper">
              <div className="dash-step done">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Diagnostic complete</div>
                  <div className="dash-step-meta">Completed 14 May 2026</div>
                </div>
              </div>
              <div className="dash-step done">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Pathway report delivered</div>
                  <div className="dash-step-meta">Premium concierge package · 19 May 2026</div>
                </div>
              </div>
              <div className="dash-step active">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Permit dossier in preparation</div>
                  <div className="dash-step-meta">Architect documentation due 12 June 2026</div>
                </div>
              </div>
              <div className="dash-step">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Commune submission</div>
                  <div className="dash-step-meta">Target: end of June 2026</div>
                </div>
              </div>
              <div className="dash-step">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Builder finalised, contract signed</div>
                  <div className="dash-step-meta">Pending permit decision</div>
                </div>
              </div>
              <div className="dash-step">
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">Placement and occupation</div>
                  <div className="dash-step-meta">Target: Q1 2027</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Recent alerts</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>2 unread</span>
            </div>
            <div className="dash-alert unread">
              <div className="dash-alert-tag">Regulatory change</div>
              <div className="dash-alert-title">Walloon decree of 13 December 2023 still applies to mobile installations</div>
              <div className="dash-alert-meta">22 May 2026 · Wallonia · No action required</div>
            </div>
            <div className="dash-alert unread">
              <div className="dash-alert-tag">Document request</div>
              <div className="dash-alert-title">Architect needs your site plan signed before 12 June</div>
              <div className="dash-alert-meta">20 May 2026 · From your builder match</div>
            </div>
            <div className="dash-alert">
              <div className="dash-alert-tag">Monitoring digest</div>
              <div className="dash-alert-title">Monthly digest: no rule changes affecting your pathway</div>
              <div className="dash-alert-meta">1 May 2026 · Wallonia · Auto-generated</div>
            </div>
            <a href="#" className="dash-link-row">View all alerts &rarr;</a>
          </div>
        </section>

        <section className="dash-row">
          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Your builder shortlist</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>3 matched</span>
            </div>
            <div className="dash-builder">
              <div className="dash-builder-avatar" style={{ background: '#3a7050' }}>BC</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Bois Construct Namur</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>Namur, Wallonia · 14 habitation légère builds completed</div>
              </div>
              <span className="dash-badge dash-badge-green">Recommended</span>
            </div>
            <div className="dash-builder">
              <div className="dash-builder-avatar" style={{ background: '#7a5a3a' }}>AT</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Atelier Tiny Liège</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>Liège, Wallonia · 9 builds, CLT specialist</div>
              </div>
              <span className="dash-badge">Available</span>
            </div>
            <div className="dash-builder">
              <div className="dash-builder-avatar" style={{ background: '#4a5a8a' }}>MP</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Maison Petite Brabant</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>Wavre, Brabant Wallon · 11 builds, mobile units</div>
              </div>
              <span className="dash-badge">Available</span>
            </div>
            <a href="#" className="dash-link-row">See full network &rarr;</a>
          </div>

          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Documents</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>5 files</span>
            </div>
            <div className="dash-doc">
              <div className="dash-doc-icon">PDF</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>Pathway report - Emma M.pdf</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>1.4 MB · 19 May 2026</div>
              </div>
              <a href="#" className="dash-link-small">Open</a>
            </div>
            <div className="dash-doc">
              <div className="dash-doc-icon">PDF</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>Site plan draft v2.pdf</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>820 KB · 20 May 2026</div>
              </div>
              <a href="#" className="dash-link-small">Open</a>
            </div>
            <div className="dash-doc">
              <div className="dash-doc-icon">DOC</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>Permit checklist - Wallonia.docx</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>34 KB · 19 May 2026</div>
              </div>
              <a href="#" className="dash-link-small">Open</a>
            </div>
            <a href="#" className="dash-link-row">View all documents &rarr;</a>
          </div>
        </section>
      </main>
    </div>
  );
}
