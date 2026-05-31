import { Link, useLocation } from 'wouter';
import {
  EMMA_PROFILE,
  EMMA_PATHWAY,
  EMMA_DOCUMENTS,
  EMMA_BUILDERS,
  EMMA_ALERTS,
  PATHWAY_STEPS,
} from '../data/customerData';

const NAV_ITEMS = [
  { label: 'Pathway overview', path: '/app/customer' },
  { label: 'Documents', path: '/app/customer/documents' },
  { label: 'Builder shortlist', path: '/app/customer/builders' },
  { label: 'Monitoring feed', path: '/app/customer/monitoring' },
  { label: 'Insurance setup', path: '/app/customer/insurance' },
  { label: 'Profile and billing', path: '/app/customer/profile' },
];

const MOBILE_LABELS: Record<string, string> = {
  '/app/customer': 'Overview',
  '/app/customer/documents': 'Documents',
  '/app/customer/builders': 'Builders',
  '/app/customer/monitoring': 'Monitoring',
  '/app/customer/insurance': 'Insurance',
  '/app/customer/profile': 'Profile',
};

// ─── Sub-views ────────────────────────────────────────────────────────────────

function PathwayOverview() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Pathway overview
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Welcome back, Emma.</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-amber">Pathway active</span>
          <a
            href="/obelisk_pathway_report_wallonia.pdf"
            download
            className="btn btn-ghost"
            style={{ padding: '0.5rem 1rem', fontSize: 13 }}
          >
            Download report (PDF)
          </a>
        </div>
      </header>

      <section className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-label">Your pathway</div>
          <div className="dash-stat-value">{EMMA_PATHWAY.title}</div>
          <div className="dash-stat-meta">{EMMA_PATHWAY.decree}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Compliance score</div>
          <div className="dash-stat-value">{EMMA_PATHWAY.complianceScore}</div>
          <div className="dash-stat-meta">{EMMA_PATHWAY.complianceMeta}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Estimated timeline</div>
          <div className="dash-stat-value">{EMMA_PATHWAY.timeline}</div>
          <div className="dash-stat-meta">{EMMA_PATHWAY.timelineMeta}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Estimated cost</div>
          <div className="dash-stat-value">{EMMA_PATHWAY.cost}</div>
          <div className="dash-stat-meta">{EMMA_PATHWAY.costMeta}</div>
        </div>
      </section>

      <section className="dash-row">
        <div className="dash-card dash-card-wide">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Pathway progress</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>Step 3 of 6</span>
          </div>
          <div className="dash-stepper">
            {PATHWAY_STEPS.map((step) => (
              <div key={step.label} className={`dash-step ${step.state === 'done' ? 'done' : step.state === 'active' ? 'active' : ''}`}>
                <div className="dash-step-dot" />
                <div>
                  <div className="dash-step-title">{step.label}</div>
                  <div className="dash-step-meta">{step.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Recent alerts</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>2 unread</span>
          </div>
          {EMMA_ALERTS.map((alert) => (
            <div key={alert.id} className={`dash-alert${alert.unread ? ' unread' : ''}`}>
              <div className="dash-alert-tag">{alert.tag}</div>
              <div className="dash-alert-title">{alert.title}</div>
              <div className="dash-alert-meta">{alert.meta}</div>
            </div>
          ))}
          <Link href="/app/customer/monitoring" className="dash-link-row">
            View all alerts &rarr;
          </Link>
        </div>
      </section>

      <section className="dash-row">
        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Your builder shortlist</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {EMMA_BUILDERS.length} matched
            </span>
          </div>
          {EMMA_BUILDERS.map((b) => (
            <div key={b.id} className="dash-builder">
              <div className="dash-builder-avatar" style={{ background: b.avatarBg }}>
                {b.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{b.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {b.region} · {b.builds} {b.specialty}
                </div>
              </div>
              <span className={`dash-badge${b.badge === 'green' ? ' dash-badge-green' : ''}`}>
                {b.status}
              </span>
            </div>
          ))}
          <Link href="/app/customer/builders" className="dash-link-row">
            See full network &rarr;
          </Link>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Documents</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {EMMA_DOCUMENTS.length} files
            </span>
          </div>
          {EMMA_DOCUMENTS.slice(0, 3).map((doc) => (
            <div key={doc.id} className="dash-doc">
              <div className="dash-doc-icon">{doc.type}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{doc.name}</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>
                  {doc.size} · {doc.date}
                </div>
              </div>
              <a
                href={doc.href}
                {...(doc.download ? { download: true } : {})}
                aria-label={`Open ${doc.name}`}
                className="dash-link-small"
              >
                Open
              </a>
            </div>
          ))}
          <Link href="/app/customer/documents" className="dash-link-row">
            View all documents &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

function DocumentsView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Documents
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Your files</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">{EMMA_DOCUMENTS.length} files</span>
        </div>
      </header>

      <section style={{ marginBottom: 'var(--space-3)' }}>
        <div className="dash-card" style={{ maxWidth: 720 }}>
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>All documents</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {EMMA_DOCUMENTS.length} files
            </span>
          </div>
          {EMMA_DOCUMENTS.map((doc) => (
            <div key={doc.id} className="dash-doc">
              <div className="dash-doc-icon">{doc.type}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{doc.name}</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>
                  {doc.type} · {doc.size} · {doc.date}
                </div>
              </div>
              <a
                href={doc.href}
                {...(doc.download ? { download: true } : {})}
                aria-label={`Open ${doc.name}`}
                className="dash-link-small"
              >
                Open
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function BuildersView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Builder shortlist
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Matched builders</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">{EMMA_BUILDERS.length} matched</span>
        </div>
      </header>

      <div
        className="dash-stat"
        style={{
          marginBottom: 'var(--space-3)',
          maxWidth: 720,
          background: 'var(--ivory)',
          border: '1px solid rgba(26,58,92,0.08)',
        }}
      >
        <div className="dash-stat-label">How builder matching works</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.55 }}>
          Builders on the Obelisk network pay a flat regional membership fee. Obelisk takes no
          commission and adds no markup to quotes. Every price you receive from a matched builder
          reflects their costs directly.
        </div>
      </div>

      <section style={{ marginBottom: 'var(--space-3)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-2)',
            maxWidth: 960,
          }}
        >
          {EMMA_BUILDERS.map((b) => (
            <div key={b.id} className="dash-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'var(--space-2)' }}>
                <div className="dash-builder-avatar" style={{ background: b.avatarBg, width: 44, height: 44, fontSize: '0.85rem' }}>
                  {b.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{b.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{b.region}</div>
                </div>
                <span className={`dash-badge${b.badge === 'green' ? ' dash-badge-green' : ''}`}>
                  {b.status}
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--navy)',
                  opacity: 0.8,
                  lineHeight: 1.5,
                  marginBottom: 'var(--space-2)',
                }}
              >
                {b.about}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: 'var(--navy)',
                  opacity: 0.6,
                  paddingTop: 'var(--space-1)',
                  borderTop: '1px solid rgba(26,58,92,0.08)',
                }}
              >
                <span>{b.builds} builds</span>
                <span>{b.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ fontSize: '0.85rem', color: 'var(--navy)', opacity: 0.6, maxWidth: 720 }}>
        The full Obelisk builder network covers Belgium (Wallonia and Flanders), France, the
        Netherlands, Germany, and Portugal. Additional builders can be requested via your report
        contact.
      </div>
    </>
  );
}

function MonitoringView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Monitoring feed
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Regulatory alerts</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-amber">
            {EMMA_ALERTS.filter((a) => a.unread).length} unread
          </span>
        </div>
      </header>

      <section style={{ marginBottom: 'var(--space-3)' }}>
        <div className="dash-card" style={{ maxWidth: 720 }}>
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>All alerts</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              Wallonia · {EMMA_PATHWAY.decree}
            </span>
          </div>
          {EMMA_ALERTS.map((alert) => (
            <div key={alert.id} className={`dash-alert${alert.unread ? ' unread' : ''}`} style={{ paddingBottom: 'var(--space-2)' }}>
              <div className="dash-alert-tag">{alert.tag}</div>
              <div className="dash-alert-title">{alert.title}</div>
              <div className="dash-alert-meta" style={{ marginBottom: 8 }}>{alert.meta}</div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--navy)',
                  opacity: 0.75,
                  lineHeight: 1.55,
                  paddingLeft: alert.unread ? 14 : 0,
                }}
              >
                {alert.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ fontSize: '0.85rem', color: 'var(--navy)', opacity: 0.6, maxWidth: 720 }}>
        Obelisk monitors official Wallonian and Belgian legislative sources monthly. You are
        subscribed to the Annual Monitoring add-on (€49/year). Email digests are sent on the first
        of each month.
      </div>
    </>
  );
}

function InsuranceView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Insurance setup
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Ancillary insurance</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">Pending activation</span>
        </div>
      </header>

      <section style={{ marginBottom: 'var(--space-3)', maxWidth: 640 }}>
        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>What this section will contain</h3>
          </div>
          <div style={{ fontSize: '0.92rem', color: 'var(--navy)', lineHeight: 1.65 }}>
            <p style={{ marginBottom: 'var(--space-2)' }}>
              Once your permit dossier is submitted, Obelisk will match you with insurers who cover
              habitation légère structures in Wallonia: home content, civil liability, and structural
              cover.
            </p>
            <p style={{ marginBottom: 'var(--space-2)' }}>
              Insurer integration is pending Obelisk completing FSMA registration under the
              Insurance Distribution Directive (IDD). This is a Year 2 milestone.
            </p>
            <p style={{ marginBottom: 0 }}>
              Until that registration is complete, your pathway report contains a manual referral
              list of brokers familiar with the habitation légère category. That list is in your
              Documents section.
            </p>
          </div>
        </div>

        <div
          className="dash-stat"
          style={{
            marginTop: 'var(--space-2)',
            background: 'var(--ivory)',
            border: '1px solid rgba(26,58,92,0.08)',
          }}
        >
          <div className="dash-stat-label">When insurance setup activates</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.8, lineHeight: 1.5 }}>
            After permit decision · Subject to FSMA IDD registration · Insurers pay a per-qualified-lead fee; you are never charged for referrals
          </div>
        </div>
      </section>
    </>
  );
}

function ProfileView() {
  const plan = EMMA_PROFILE;
  const pathway = EMMA_PATHWAY;

  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Profile and billing
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>{plan.name}</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-amber">{plan.planLabel}</span>
        </div>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-2)',
          maxWidth: 720,
          marginBottom: 'var(--space-3)',
        }}
      >
        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Account</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row label="Name" value={plan.name} />
            <Row label="Country" value={plan.country} />
            <Row label="Use case" value={plan.useCase} />
            <Row label="Customer since" value={plan.joinedDate} />
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Plan details</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row label="Plan" value={`${plan.planName} — ${plan.planPrice} ${plan.planPriceNote}`} />
            <Row label="Includes" value="Permit prep, builder matching, pathway report" />
            <Row
              label="Add-on"
              value={`${plan.monitoringLabel} — ${plan.monitoringPrice} ${plan.monitoringPriceNote}`}
            />
            <Row label="Active pathway" value={pathway.title} />
          </div>
        </div>
      </section>

      <div style={{ fontSize: '0.85rem', color: 'var(--navy)', opacity: 0.6, maxWidth: 640 }}>
        Payment processing will be handled via Stripe once FSMA registration is complete. Billing
        history and invoice downloads will appear here in a later release.
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          opacity: 0.5,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: '0.92rem' }}>{value}</div>
    </div>
  );
}

// ─── Shell ────────────────────────────────────────────────────────────────────

export default function CustomerDashboard() {
  const [location, setLocation] = useLocation();

  function renderContent() {
    switch (location) {
      case '/app/customer/documents':
        return <DocumentsView />;
      case '/app/customer/builders':
        return <BuildersView />;
      case '/app/customer/monitoring':
        return <MonitoringView />;
      case '/app/customer/insurance':
        return <InsuranceView />;
      case '/app/customer/profile':
        return <ProfileView />;
      default:
        return <PathwayOverview />;
    }
  }

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <Link href="/" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 32 }} />
        </Link>

        <div className="dash-nav-section">
          <div className="dash-section-label small-caps">Customer</div>
          <nav className="dash-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`dash-nav-item${location === item.path ? ' active' : ''}`}
              >
                <span className="dot" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="dash-sidebar-foot">
          <div className="dash-userblock">
            <div className="dash-avatar">EM</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{EMMA_PROFILE.name}</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>{EMMA_PROFILE.planLabel}</div>
            </div>
          </div>
          <button onClick={() => setLocation('/')} className="dash-signout">
            Sign out
          </button>
        </div>

        <nav className="dash-mobile-nav" aria-label="Customer navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`dash-mobile-nav-item${location === item.path ? ' active' : ''}`}
            >
              {MOBILE_LABELS[item.path]}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="dash-main">{renderContent()}</main>
    </div>
  );
}
