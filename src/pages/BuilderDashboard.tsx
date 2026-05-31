import { Link, useLocation } from 'wouter';
import {
  BUILDER_PROFILE,
  BUILDER_STATS,
  BUILDER_LEADS,
  BUILDER_PROJECTS,
  BUILDER_PATHWAYS,
  BUILDER_TRAINING,
} from '../data/builderData';

const NAV_ITEMS = [
  { label: 'Leads inbox', path: '/app/builder' },
  { label: 'Active projects', path: '/app/builder/projects' },
  { label: 'Network profile', path: '/app/builder/profile' },
  { label: 'Pathway library', path: '/app/builder/pathways' },
  { label: 'Training and certification', path: '/app/builder/training' },
  { label: 'Billing', path: '/app/builder/billing' },
];

const MOBILE_LABELS: Record<string, string> = {
  '/app/builder': 'Leads',
  '/app/builder/projects': 'Projects',
  '/app/builder/profile': 'Profile',
  '/app/builder/pathways': 'Pathways',
  '/app/builder/training': 'Training',
  '/app/builder/billing': 'Billing',
};

// ─── Sub-views ────────────────────────────────────────────────────────────────

function LeadsInbox() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Builder dashboard
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>
            {BUILDER_STATS.openLeads} new leads this week.
          </h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-green">{BUILDER_PROFILE.membershipTier}</span>
          <button className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: 13 }}>
            Update availability
          </button>
        </div>
      </header>

      <section className="dash-stat-grid">
        <div className="dash-stat">
          <div className="dash-stat-label">Open leads</div>
          <div className="dash-stat-value">{BUILDER_STATS.openLeads}</div>
          <div className="dash-stat-meta">{BUILDER_STATS.openLeadsMeta}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Active projects</div>
          <div className="dash-stat-value">{BUILDER_STATS.activeProjects}</div>
          <div className="dash-stat-meta">{BUILDER_STATS.activeProjectsMeta}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Acceptance rate</div>
          <div className="dash-stat-value">{BUILDER_STATS.acceptanceRate}</div>
          <div className="dash-stat-meta">{BUILDER_STATS.acceptanceRateMeta}</div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-label">Average build value</div>
          <div className="dash-stat-value">{BUILDER_STATS.avgBuildValue}</div>
          <div className="dash-stat-meta">{BUILDER_STATS.avgBuildValueMeta}</div>
        </div>
      </section>

      <section className="dash-row">
        <div className="dash-card dash-card-wide">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Leads inbox</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {BUILDER_LEADS.filter((l) => l.unread).length} unread
            </span>
          </div>
          {BUILDER_LEADS.map((lead) => (
            <div key={lead.id} className={`dash-lead${lead.unread ? ' unread' : ''}`}>
              <div className="dash-lead-head">
                <div>
                  <div className="dash-lead-name">{lead.name}</div>
                  <div className="dash-lead-meta">{lead.meta}</div>
                </div>
                <span
                  className={`dash-badge${lead.badgeVariant === 'amber' ? ' dash-badge-amber' : ''}`}
                >
                  {lead.badge}
                </span>
              </div>
              <div className="dash-lead-body">{lead.body}</div>
              <div className="dash-lead-actions">
                {lead.actions.includes('accept') && (
                  <button
                    className="btn btn-main"
                    style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}
                  >
                    Accept lead
                  </button>
                )}
                {lead.actions.includes('view') && (
                  <button
                    className="btn btn-ghost"
                    style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}
                  >
                    View full profile
                  </button>
                )}
                {lead.actions.includes('interest') && (
                  <button
                    className="btn btn-ghost"
                    style={{ fontSize: 13, padding: '0.4rem 0.9rem' }}
                  >
                    Express interest
                  </button>
                )}
                <span className="dash-lead-fresh">{lead.freshness}</span>
              </div>
            </div>
          ))}
          <Link href="/app/builder/projects" className="dash-link-row">
            Lead history &rarr;
          </Link>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Active projects</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {BUILDER_STATS.activeProjects} in flight
            </span>
          </div>
          {BUILDER_PROJECTS.map((p) => (
            <div key={p.id} className="dash-project">
              <div className="dash-project-name">{p.name}</div>
              <div className="dash-project-stage">
                {p.stage} · {p.handover}
              </div>
              <div
                className="dash-project-bar"
                role="progressbar"
                aria-valuenow={p.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${p.name} progress: ${p.progress}%`}
              >
                <div style={{ width: `${p.progress}%` }} />
              </div>
            </div>
          ))}
          <Link href="/app/builder/projects" className="dash-link-row">
            All projects &rarr;
          </Link>
        </div>
      </section>

      <section className="dash-row">
        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Pathway library</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {BUILDER_PATHWAYS.length} pathways unlocked
            </span>
          </div>
          {BUILDER_PATHWAYS.slice(0, 3).map((pw) => (
            <div key={pw.id} className="dash-pathway-tile">
              <strong>
                {pw.country} , {pw.name}
              </strong>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{pw.note}</div>
            </div>
          ))}
          <Link href="/app/builder/pathways" className="dash-link-row">
            Browse all pathways &rarr;
          </Link>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Network profile</h3>
            <span className="small-caps" style={{ opacity: 0.55, fontSize: 11 }}>
              {BUILDER_PROFILE.status}
            </span>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6 }}>
            <p style={{ marginBottom: 8, fontWeight: 600, fontSize: '0.95rem' }}>
              {BUILDER_PROFILE.name}
            </p>
            <p style={{ marginBottom: 8, opacity: 0.85 }}>{BUILDER_PROFILE.bio}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              {BUILDER_PROFILE.tags.map((tag) => (
                <span key={tag} className="dash-badge">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/app/builder/profile">
              <button
                className="btn btn-ghost"
                style={{ fontSize: 13, padding: '0.4rem 0.9rem', width: '100%' }}
              >
                Edit network profile
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ActiveProjectsView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Active projects
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Projects in flight</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">{BUILDER_PROJECTS.length} active</span>
        </div>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-2)',
          maxWidth: 960,
          marginBottom: 'var(--space-3)',
        }}
      >
        {BUILDER_PROJECTS.map((p) => (
          <div key={p.id} className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{p.name}</h3>
              <span
                className="dash-badge"
                style={{ fontSize: '0.68rem' }}
              >
                {p.progress}%
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <BRow label="Stage" value={p.stage} />
              <BRow label="Handover" value={p.handover} />
              <BRow label="Pathway" value={p.pathway} />
              <BRow label="Location" value={p.location} />
            </div>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  opacity: 0.55,
                  marginBottom: 6,
                }}
              >
                <span>Progress</span>
                <span>{p.progress}%</span>
              </div>
              <div
                className="dash-project-bar"
                style={{ height: 6 }}
                role="progressbar"
                aria-valuenow={p.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${p.name} progress: ${p.progress}%`}
              >
                <div style={{ width: `${p.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function NetworkProfileView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Network profile
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>{BUILDER_PROFILE.name}</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-green">Live</span>
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
            <h3 style={{ margin: 0 }}>Company details</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <BRow label="Name" value={BUILDER_PROFILE.name} />
            <BRow label="Location" value={BUILDER_PROFILE.locationFull} />
            <BRow label="Member since" value={BUILDER_PROFILE.memberSince} />
            <BRow label="Completed builds" value={String(BUILDER_PROFILE.completedBuilds)} />
            <BRow label="Primary region" value={BUILDER_PROFILE.region} />
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>Specialisms</h3>
          </div>
          <div style={{ marginBottom: 'var(--space-2)' }}>
            <div
              className="small-caps"
              style={{ opacity: 0.5, fontSize: '0.7rem', marginBottom: 8 }}
            >
              Active tags
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {BUILDER_PROFILE.tags.map((tag) => (
                <span key={tag} className="dash-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div
              className="small-caps"
              style={{ opacity: 0.5, fontSize: '0.7rem', marginBottom: 8 }}
            >
              Bio (visible to customers)
            </div>
            <div style={{ fontSize: '0.88rem', lineHeight: 1.55, opacity: 0.85 }}>
              {BUILDER_PROFILE.bio}
            </div>
          </div>
        </div>
      </section>

      <div style={{ fontSize: '0.85rem', color: 'var(--navy)', opacity: 0.6, maxWidth: 640 }}>
        Your profile is visible to customers whose pathway matches your active regions. Obelisk does
        not share your contact details until you accept a lead. Profile edits go live within 24
        hours.
      </div>
    </>
  );
}

function PathwayLibraryView() {
  const statusLabel: Record<string, string> = {
    active: 'Active',
    eligible: 'Eligible',
    unlocked: 'Unlocked',
  };

  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Pathway library
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Your pathways</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">{BUILDER_PATHWAYS.length} unlocked</span>
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
        <div className="dash-stat-label">How pathway access works</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.55 }}>
          Your regional membership (€29/month) covers leads across all pathways active in your
          registered region. Pathways in other countries are unlocked for reference. Obelisk takes no
          commission on any quote you send.
        </div>
      </div>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-2)',
          maxWidth: 960,
          marginBottom: 'var(--space-3)',
        }}
      >
        {BUILDER_PATHWAYS.map((pw) => (
          <div key={pw.id} className="dash-card">
            <div className="dash-card-head">
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>
                {pw.country} , {pw.name}
              </h3>
              <span
                className={`dash-badge${pw.status === 'active' ? ' dash-badge-green' : ''}`}
                style={{ fontSize: '0.68rem' }}
              >
                {statusLabel[pw.status]}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <BRow label="Legal anchor" value={pw.decree} />
              <BRow label="Your builds" value={pw.builds > 0 ? String(pw.builds) : 'None yet'} />
              <BRow label="Status" value={pw.note} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function TrainingView() {
  const statusIcon: Record<string, string> = {
    complete: 'Done',
    available: 'Start',
    locked: 'Locked',
  };

  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Training and certification
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Your modules</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge">
            {BUILDER_TRAINING.filter((t) => t.status === 'complete').length} of{' '}
            {BUILDER_TRAINING.length} complete
          </span>
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
        <div className="dash-stat-label">Why this matters</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--navy)', opacity: 0.85, lineHeight: 1.55 }}>
          Completed modules are shown on your network profile and improve your match ranking for
          leads in the relevant pathway. Training is included in your regional membership.
        </div>
      </div>

      <section style={{ maxWidth: 720, marginBottom: 'var(--space-3)' }}>
        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>All modules</h3>
          </div>
          {BUILDER_TRAINING.map((module) => (
            <div
              key={module.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 0',
                borderTop: '1px solid rgba(26,58,92,0.08)',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 4,
                  background:
                    module.status === 'complete'
                      ? 'var(--green)'
                      : module.status === 'available'
                      ? 'var(--ivory)'
                      : 'rgba(26,58,92,0.06)',
                  color:
                    module.status === 'complete'
                      ? 'var(--ivory)'
                      : 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  flexShrink: 0,
                  letterSpacing: '0.04em',
                  opacity: module.status === 'locked' ? 0.4 : 1,
                }}
              >
                {statusIcon[module.status]}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: '0.92rem',
                    opacity: module.status === 'locked' ? 0.45 : 1,
                  }}
                >
                  {module.title}
                </div>
                <div style={{ fontSize: '0.78rem', opacity: 0.6 }}>
                  {module.type} · {module.duration}
                  {module.completedDate ? ` · Completed ${module.completedDate}` : ''}
                </div>
              </div>
              {module.status === 'available' && (
                <button
                  className="btn btn-ghost"
                  style={{ fontSize: 12, padding: '0.3rem 0.75rem' }}
                >
                  Start
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function BillingView() {
  return (
    <>
      <header className="dash-topbar">
        <div>
          <div className="small-caps" style={{ opacity: 0.55, fontSize: 11, marginBottom: 4 }}>
            Billing
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>Membership and billing</h1>
        </div>
        <div className="dash-topbar-actions">
          <span className="dash-badge dash-badge-green">Active</span>
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
            <h3 style={{ margin: 0 }}>Current plan</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <BRow label="Plan" value={`Builder Network, ${BUILDER_PROFILE.membershipFee} ${BUILDER_PROFILE.membershipPeriod}`} />
            <BRow label="Active region" value={BUILDER_PROFILE.region} />
            <BRow label="Member since" value={BUILDER_PROFILE.memberSince} />
            <BRow label="Commission model" value="Flat fee only. No commission on quotes." />
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-head">
            <h3 style={{ margin: 0 }}>What you pay for</h3>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--navy)', lineHeight: 1.65, opacity: 0.85 }}>
            <p style={{ marginBottom: 10 }}>
              Your membership gives you access to verified customer leads in your region, the pathway
              library, and training modules.
            </p>
            <p style={{ marginBottom: 0 }}>
              Obelisk takes no commission on any build. Every quote you send goes directly to the
              customer without markup. Customers are not aware of, and do not pay, your membership
              fee.
            </p>
          </div>
        </div>
      </section>

      <div
        className="dash-stat"
        style={{
          maxWidth: 720,
          background: 'var(--ivory)',
          border: '1px solid rgba(26,58,92,0.08)',
          marginBottom: 'var(--space-3)',
        }}
      >
        <div className="dash-stat-label">Invoice history</div>
        <div style={{ fontSize: '0.88rem', color: 'var(--navy)', opacity: 0.75, lineHeight: 1.5 }}>
          Invoice downloads and payment history will appear here once Stripe billing is wired. This
          is a later-phase feature.
        </div>
      </div>
    </>
  );
}

function BRow({ label, value }: { label: string; value: string }) {
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

export default function BuilderDashboard() {
  const [location, setLocation] = useLocation();

  function renderContent() {
    switch (location) {
      case '/app/builder/projects':
        return <ActiveProjectsView />;
      case '/app/builder/profile':
        return <NetworkProfileView />;
      case '/app/builder/pathways':
        return <PathwayLibraryView />;
      case '/app/builder/training':
        return <TrainingView />;
      case '/app/builder/billing':
        return <BillingView />;
      default:
        return <LeadsInbox />;
    }
  }

  return (
    <div className="dash-shell dash-builder-theme">
      <aside className="dash-sidebar">
        <Link href="/" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 32 }} />
        </Link>

        <div className="dash-nav-section">
          <div className="dash-section-label small-caps">Builder</div>
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
            <div className="dash-avatar" style={{ background: BUILDER_PROFILE.avatarBg }}>
              {BUILDER_PROFILE.initials}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{BUILDER_PROFILE.shortName}</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>{BUILDER_PROFILE.location}</div>
            </div>
          </div>
          <button onClick={() => setLocation('/')} className="dash-signout">
            Sign out
          </button>
        </div>

        <nav className="dash-mobile-nav" aria-label="Builder navigation">
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
