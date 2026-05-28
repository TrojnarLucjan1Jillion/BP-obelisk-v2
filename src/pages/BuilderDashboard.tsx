import { Link, useLocation } from 'wouter';

export default function BuilderDashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="dash-shell dash-builder-theme">
      <aside className="dash-sidebar">
        <Link href="/" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 32 }} />
        </Link>

        <div className="dash-nav-section">
          <div className="dash-section-label small-caps">Builder</div>
          <nav className="dash-nav">
            <a href="#" className="dash-nav-item active">
              <span className="dot" /> Leads inbox
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Active projects
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Network profile
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Pathway library
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Training and certification
            </a>
            <a href="#" className="dash-nav-item">
              <span className="dot" /> Billing
            </a>
          </nav>
        </div>

        <div className="dash-sidebar-foot">
          <div className="dash-userblock">
            <div className="dash-avatar" style={{ background: '#3a7050' }}>BC</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Bois Construct</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>Namur, BE</div>
            </div>
          </div>
          <button onClick={() => setLocation('/')} className="dash-signout">Sign out</button>
        </div>

        <nav className="dash-mobile-nav" aria-label="Builder navigation">
          <a href="#" className="dash-mobile-nav-item active">Leads</a>
          <a href="#" className="dash-mobile-nav-item">Projects</a>
          <a href="#" className="dash-mobile-nav-item">Profile</a>
          <a href="#" className="dash-mobile-nav-item">Pathways</a>
          <a href="#" className="dash-mobile-nav-item">Training</a>
          <a href="#" className="dash-mobile-nav-item">Billing</a>
        </nav>
      </aside>

      <main className="dash-main">
        <header className="dash-topbar">
          <div>
            <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>Builder dashboard</div>
            <h1 style={{ margin: 0, fontSize: 28 }}>3 new leads this week.</h1>
          </div>
          <div className="dash-topbar-actions">
            <span className="dash-badge dash-badge-green">Network member</span>
            <button className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: 13 }}>
              Update availability
            </button>
          </div>
        </header>

        <section className="dash-stat-grid">
          <div className="dash-stat">
            <div className="dash-stat-label">Open leads</div>
            <div className="dash-stat-value">3</div>
            <div className="dash-stat-meta">2 awaiting your response</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Active projects</div>
            <div className="dash-stat-value">5</div>
            <div className="dash-stat-meta">Across Wallonia and Brabant</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Acceptance rate</div>
            <div className="dash-stat-value">82%</div>
            <div className="dash-stat-meta">14 of 17 leads converted in 2026</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Average build value</div>
            <div className="dash-stat-value">€42,800</div>
            <div className="dash-stat-meta">Last 12 months</div>
          </div>
        </section>

        <section className="dash-row">
          <div className="dash-card dash-card-wide">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Leads inbox</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>3 unread</span>
            </div>

            <div className="dash-lead unread">
              <div className="dash-lead-head">
                <div>
                  <div className="dash-lead-name">Emma M. and partner</div>
                  <div className="dash-lead-meta">Namur · Habitation légère · Permanent residence</div>
                </div>
                <span className="dash-badge dash-badge-amber">Verified pathway</span>
              </div>
              <div className="dash-lead-body">
                Couple, two-year-old child, budget €40k to €55k for the unit. Plot identified near Namur, zone d'habitat à caractère rural. Permit dossier 60% ready. Premium concierge customer.
              </div>
              <div className="dash-lead-actions">
                <button className="btn btn-main" style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}>Accept lead</button>
                <button className="btn btn-ghost" style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}>View full profile</button>
                <span className="dash-lead-fresh">Fresh, 4h ago</span>
              </div>
            </div>

            <div className="dash-lead unread">
              <div className="dash-lead-head">
                <div>
                  <div className="dash-lead-name">Pieter V.</div>
                  <div className="dash-lead-meta">Wavre · Habitation légère · Permanent residence</div>
                </div>
                <span className="dash-badge dash-badge-amber">Verified pathway</span>
              </div>
              <div className="dash-lead-body">
                Single buyer, remote tech worker, budget €35k to €45k. Looking for CLT or hybrid timber. Land owned. Pathway report only, no concierge.
              </div>
              <div className="dash-lead-actions">
                <button className="btn btn-main" style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}>Accept lead</button>
                <button className="btn btn-ghost" style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}>View full profile</button>
                <span className="dash-lead-fresh">1 day ago</span>
              </div>
            </div>

            <div className="dash-lead unread">
              <div className="dash-lead-head">
                <div>
                  <div className="dash-lead-name">Atelier Hesbaye (B2B)</div>
                  <div className="dash-lead-meta">Hannut · HLL recreational · Glamping operator, 6 units</div>
                </div>
                <span className="dash-badge">Awaiting verification</span>
              </div>
              <div className="dash-lead-body">
                Glamping operator looking for 6 prefab units, HLL category, on existing PRL site. Budget €25k per unit. Verification in progress.
              </div>
              <div className="dash-lead-actions">
                <button className="btn btn-ghost" style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}>Express interest</button>
                <span className="dash-lead-fresh">2 days ago</span>
              </div>
            </div>

            <a href="#" className="dash-link-row">Lead history &rarr;</a>
          </div>

          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Active projects</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>5 in flight</span>
            </div>
            <div className="dash-project">
              <div className="dash-project-name">Dubois family</div>
              <div className="dash-project-stage">Foundation stage · Estimated handover Q3 2026</div>
              <div className="dash-project-bar"><div style={{ width: '40%' }} /></div>
            </div>
            <div className="dash-project">
              <div className="dash-project-name">Maes residence</div>
              <div className="dash-project-stage">Walls and roof · Estimated handover Q3 2026</div>
              <div className="dash-project-bar"><div style={{ width: '65%' }} /></div>
            </div>
            <div className="dash-project">
              <div className="dash-project-name">Lemaire couple</div>
              <div className="dash-project-stage">Finishing · Estimated handover June 2026</div>
              <div className="dash-project-bar"><div style={{ width: '88%' }} /></div>
            </div>
            <div className="dash-project">
              <div className="dash-project-name">Antoine T.</div>
              <div className="dash-project-stage">Design phase · Permit submitted</div>
              <div className="dash-project-bar"><div style={{ width: '15%' }} /></div>
            </div>
            <div className="dash-project">
              <div className="dash-project-name">Glamping Hesbaye</div>
              <div className="dash-project-stage">Production · 4 of 6 units complete</div>
              <div className="dash-project-bar"><div style={{ width: '70%' }} /></div>
            </div>
            <a href="#" className="dash-link-row">All projects &rarr;</a>
          </div>
        </section>

        <section className="dash-row">
          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Pathway library</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>5 pathways unlocked</span>
            </div>
            <div className="dash-pathway-tile">
              <strong>BE , Wallonia habitation légère</strong>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>14 completed builds in this pathway</div>
            </div>
            <div className="dash-pathway-tile">
              <strong>BE , Flemish zorgunit</strong>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>3 completed builds</div>
            </div>
            <div className="dash-pathway-tile">
              <strong>FR , HLL in authorised leisure zone</strong>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>Eligible, no completed builds yet</div>
            </div>
            <a href="#" className="dash-link-row">Browse all pathways &rarr;</a>
          </div>

          <div className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0 }}>Network profile</h3>
              <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>Live</span>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>
              <p style={{ marginBottom: 8 }}><strong>Bois Construct Namur</strong></p>
              <p style={{ marginBottom: 8, opacity: 0.85 }}>14 habitation légère builds completed. CLT and hybrid timber specialists. Member since March 2026.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                <span className="dash-badge">CLT</span>
                <span className="dash-badge">Hybrid timber</span>
                <span className="dash-badge">Mobile units</span>
                <span className="dash-badge">Off-grid systems</span>
              </div>
              <button className="btn btn-ghost" style={{ fontSize: 13, padding: '0.4rem 0.9rem', width: '100%' }}>
                Edit network profile
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
