<div align="center">
<img width="1200" height="475" alt="Obelisk" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Obelisk Platform

A regulatory intelligence and matchmaking platform for European tiny living across Belgium, France, the Netherlands, Germany, and Portugal.

Live: **[bp-obelisk-v2.vercel.app](https://bp-obelisk-v2.vercel.app)**

This is the bachelor project of Lucjan Trojnar, Karel de Grote Hogeschool, Multimedia and Creative Technologies, Digital Nomads track, 2025 to 2026.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS 4
- Hosted on Vercel (auto-deploy from `main`)

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The site runs on http://localhost:3000.

## Build

```bash
npm run build
```

Output goes to `dist/`. Vercel handles this automatically on push to `main`.

## Repository layout

- `src/App.tsx` composes all sections in order.
- `src/components/` holds one file per section.
- `src/data/pathways.ts` holds the typed pathway data and diagnostic logic.
- `src/index.css` holds design tokens and section styles.
- `CLAUDE.md` is the project memory file for [Claude Code](https://docs.claude.com/en/docs/claude-code/overview).

## Editing with Claude Code

This project is set up to be edited via Claude Code. Run `claude` in the repo root and Claude will read `CLAUDE.md` at session start to load the project conventions (brand tokens, pricing, accuracy mandate, voice rules, stack details).

## License

Bachelor project. Educational use. The regulatory analysis cites authoritative European institutional sources throughout, listed in the accompanying thesis.
