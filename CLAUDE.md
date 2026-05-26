# Obelisk Platform , Project Memory

This file is loaded by Claude Code at the start of every session. It encodes the project's hard rules and context. Treat it as a behavioural contract, not documentation.

## What Obelisk is

A regulatory intelligence and matchmaking platform for European tiny living across Belgium, France, the Netherlands, Germany, and Portugal. Customers receive a tailored legal pathway report and, optionally, vetted builder matching and insurance setup. The platform monitors regulatory changes that affect customers' registered pathways.

**The Capsule (a physical tiny-home product) was dropped on 20 May 2026 after a supervisor session with Xavier Vermeiren. Do not reintroduce it. Obelisk is purely a platform.**

## Revenue model (locked)

- **B2C Pathway Report:** €175 one-time
- **B2C Premium Concierge:** €499 one-time (permit prep + builder matching + insurance setup)
- **B2C Annual Monitoring:** €49/year (optional add-on)
- **B2B Builder Subscription:** €29/month per region (no commission)
- **B2B Insurer Per-Lead:** €40/qualified lead (Year 2+, pending FSMA registration under IDD)

## Hard accuracy mandate

**Never state a decree date, square-metre figure, criteria count, or market statistic from memory.** Always verify against an authoritative European institutional source before writing it. If you can't verify, leave it out or flag it.

Verified legal anchors per country (already in `src/data/pathways.ts`):
- **Belgium / Wallonia:** Code wallon de l'Habitation durable, décret du 2 mai 2019 (in force 1 September 2019), 9 criteria with 3-of-9 threshold; décret du 13 décembre 2023 in force 1 April 2024
- **Belgium / Flanders:** Zorgunit framework, 16 August 2021, max 50 m², 6-year ceiling
- **France:** Loi n° 2014-366 (ALUR), Article R.111-51, R.421-2, L.151-13 of Code de l'urbanisme
- **Netherlands:** Omgevingswet (1 January 2024), Bbl, 89 documented projects (32 permanent)
- **Germany:** 16 Landesbauordnungen, Bavaria Art. 57 BayBO (75 m³ verfahrensfrei, no habitable rooms)
- **Portugal:** Decreto-Lei n.º 117/2024 de 30 de dezembro (in force 29 January 2025), Article 72.º-B

## Brand and style

- **Colour tokens** (defined in `src/index.css`):
  - `--navy: #1A3A5C` (primary)
  - `--amber: #C0873B` (accent)
  - `--green: #1B5E35` (B2B / builders section)
  - `--timber: #2D1F12` (footer)
  - `--offwhite: #FBF8F3` (body background)
  - `--ivory: #FDF3E7` (section background)
- **Typography:**
  - `--font-display: 'Newsreader'` (serif, headings)
  - `--font-body: 'Manrope'` (sans, body)

## Writing style rules

- **No em-dashes (,) or en-dashes (-) ever.** Use commas, colons, or full stops.
- Direct, technical, quietly confident. Avoid lifestyle marketing aesthetic.
- Don't sell a dream. Sell regulatory clarity.
- First person singular when narrative (solo founder).
- Avoid these AI tells: "genuinely", "actually" (outside quoted user voice), "simply", "navigate" (as jargon), "landscape", "leverage", "deep dive", "matters because", mechanical "First/Second/Third" enumeration.

## Stack

- **Framework:** Vite + React 19 + TypeScript + Tailwind CSS 4
- **Hosting:** Vercel (project `bp-obelisk-v2`, team `luciusveidt-6979s-projects`)
- **Domain:** bp-obelisk-v2.vercel.app
- **Deploy trigger:** push to `main` branch
- **Future backend (not yet implemented):** Supabase EU-hosted (Frankfurt), Klaviyo lifecycle email, Stripe Billing

## Repository layout

```
.
├── CLAUDE.md           ← This file
├── README.md
├── index.html          ← Minimal mount point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── logo.png
└── src/
    ├── main.tsx
    ├── App.tsx              ← Composes sections
    ├── index.css            ← Design tokens + section styles
    ├── data/
    │   └── pathways.ts      ← Pathway data + diagnostic logic, typed
    ├── hooks/
    │   └── useFadeUp.ts     ← IntersectionObserver scroll animation
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Diagnostic.tsx
        ├── HowItWorks.tsx
        ├── Pathways.tsx
        ├── Builders.tsx
        ├── Pricing.tsx
        ├── TrustStrip.tsx
        ├── Origin.tsx
        └── Footer.tsx
```

## Commands

- `npm install` , install dependencies
- `npm run dev` , local dev server at http://localhost:3000
- `npm run build` , production build to `dist/`
- `npm run preview` , preview production build
- `npm run lint` , TypeScript check

## Pivot context (for honest narrative if rewriting Origin section)

The project went through four directions:
1. **Modular table** (Sep-Oct 2025): original assignment, abandoned for lack of differentiation
2. **Modular tiny home / Capsule** (Nov 2025-Feb 2026): 20 m² CLT micro-home, fully designed
3. **Hybrid product + platform** (Mar-mid May 2026): both Capsule and platform, diluted positioning
4. **Platform only** (20 May 2026 onwards): post-Xavier, current state

## What this project does NOT do (yet)

- Accept payments (Stripe wiring deferred until FSMA registration done)
- Send actual emails (Klaviyo wiring deferred)
- Have a real database (Supabase wiring deferred)
- The diagnostic is currently in-memory pattern matching, not an LLM call

## Jury context

Bachelor thesis defence on 10 June 2026. The thesis lives separately (.docx). The site is the proof-of-concept that the platform can be built. Anything user-facing on this site must be defensible to a jury that has read the thesis.
