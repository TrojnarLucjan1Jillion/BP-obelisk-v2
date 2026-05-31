// Single source of truth for Emma's demo account data.
// All dashboard views read from here; do not duplicate.

export const EMMA_PROFILE = {
  name: 'Emma M.',
  initials: 'EM',
  planLabel: 'Premium plan',
  planName: 'Premium Concierge',
  planPrice: '€499',
  planPriceNote: 'one-time',
  monitoringLabel: 'Annual Monitoring',
  monitoringPrice: '€49',
  monitoringPriceNote: 'per year',
  joinedDate: '14 May 2026',
  country: 'Belgium (Wallonia)',
  useCase: 'Permanent residence',
};

export const EMMA_PATHWAY = {
  title: 'Wallonia habitation légère',
  decree: 'Décret du 2 mai 2019, in force 1 September 2019',
  complianceScore: '8 / 9',
  complianceMeta: 'Criteria met (3 required, 8 confirmed)',
  timeline: '4 to 9 months',
  timelineMeta: 'From application to legal occupation',
  cost: '€2,500 to €6,500',
  costMeta: 'Regulatory cost, excluding construction',
};

export const EMMA_DOCUMENTS = [
  {
    id: 'pathway-report',
    name: 'Pathway report - Emma M.pdf',
    type: 'PDF',
    size: '1.4 MB',
    date: '19 May 2026',
    href: '/pathway-report-emma.pdf',
    download: true,
  },
  {
    id: 'site-plan',
    name: 'Site plan draft v2.pdf',
    type: 'PDF',
    size: '820 KB',
    date: '20 May 2026',
    href: '#',
    download: false,
  },
  {
    id: 'permit-checklist',
    name: 'Permit checklist - Wallonia.docx',
    type: 'DOC',
    size: '34 KB',
    date: '19 May 2026',
    href: '#',
    download: false,
  },
  {
    id: 'commune-guidance',
    name: 'Commune guidance note - Namur.pdf',
    type: 'PDF',
    size: '210 KB',
    date: '19 May 2026',
    href: '#',
    download: false,
  },
  {
    id: 'criteria-grid',
    name: 'Habitation légère criteria grid.pdf',
    type: 'PDF',
    size: '156 KB',
    date: '19 May 2026',
    href: '#',
    download: false,
  },
];

export const EMMA_BUILDERS = [
  {
    id: 'bois-construct',
    initials: 'BC',
    name: 'Bois Construct Namur',
    region: 'Namur, Wallonia',
    builds: 14,
    specialty: 'habitation légère builds completed',
    avatarBg: '#3a7050',
    status: 'Recommended',
    badge: 'green' as const,
    about:
      'Specialist in Walloon habitation légère permitting. 14 completed builds across Namur and Dinant. All quotes are direct; Obelisk charges no commission.',
  },
  {
    id: 'atelier-tiny',
    initials: 'AT',
    name: 'Atelier Tiny Liège',
    region: 'Liège, Wallonia',
    builds: 9,
    specialty: 'CLT specialist',
    avatarBg: '#7a5a3a',
    status: 'Available',
    badge: 'default' as const,
    about:
      'Cross-laminated timber specialist. 9 builds in the Liège province. Flat Obelisk membership; no markup on quotes.',
  },
  {
    id: 'maison-petite',
    initials: 'MP',
    name: 'Maison Petite Brabant',
    region: 'Wavre, Brabant Wallon',
    builds: 11,
    specialty: 'mobile units',
    avatarBg: '#4a5a8a',
    status: 'Available',
    badge: 'default' as const,
    about:
      'Mobile and semi-permanent units. 11 builds across Brabant Wallon. Builders on Obelisk pay a flat regional fee; your quote reflects their costs only.',
  },
];

export const EMMA_ALERTS = [
  {
    id: 'decree-dec-2023',
    tag: 'Regulatory change',
    title:
      'Walloon decree of 13 December 2023 still applies to mobile installations',
    meta: '22 May 2026 · Wallonia · No action required',
    unread: true,
    detail:
      'The décret du 13 décembre 2023, in force since 1 April 2024, introduced duration limits on permits for mobile habitations légères. Your pathway report already accounts for this. No change to your dossier is required.',
  },
  {
    id: 'doc-request',
    tag: 'Document request',
    title: 'Architect needs your site plan signed before 12 June',
    meta: '20 May 2026 · From your builder match',
    unread: true,
    detail:
      'Bois Construct Namur has forwarded a request from the appointed architect. The signed site plan must be received by 12 June 2026 to keep the commune submission on schedule.',
  },
  {
    id: 'monthly-digest',
    tag: 'Monitoring digest',
    title: 'Monthly digest: no rule changes affecting your pathway',
    meta: '1 May 2026 · Wallonia · Auto-generated',
    unread: false,
    detail:
      'Obelisk scanned Wallonian regulatory sources for the month of April 2026. No changes to the habitation légère framework were published. Your pathway remains valid.',
  },
];

export const PATHWAY_STEPS = [
  {
    label: 'Diagnostic complete',
    meta: 'Completed 14 May 2026',
    state: 'done' as const,
  },
  {
    label: 'Pathway report delivered',
    meta: 'Premium Concierge package · 19 May 2026',
    state: 'done' as const,
  },
  {
    label: 'Permit dossier in preparation',
    meta: 'Architect documentation due 12 June 2026',
    state: 'active' as const,
  },
  {
    label: 'Commune submission',
    meta: 'Target: end of June 2026',
    state: 'pending' as const,
  },
  {
    label: 'Builder finalised, contract signed',
    meta: 'Pending permit decision',
    state: 'pending' as const,
  },
  {
    label: 'Placement and occupation',
    meta: 'Target: Q1 2027',
    state: 'pending' as const,
  },
];
