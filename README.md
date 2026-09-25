# youssef labtaimi

Personal site. Single page, statically prerendered, no client-side data fetching.

**Live:** https://youssef-labtaimi.vercel.app

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Server Components by default |
| Styling | Tailwind CSS v4, CSS-first `@theme`, no config file |
| Fonts | `next/font` self-hosting Bricolage Grotesque + Instrument Sans + Geist Mono |
| Language | TypeScript, `strict` |

## How it is put together

**Content is data, not markup.** Everything the page says lives in typed modules
under `src/content/`: roles, projects, the full 42 transcript, awards and skills.
Components take that data and render it. Adding a project is one object in an
array; nothing in the JSX changes.

**The headline numbers are derived.** `src/lib/stats.ts` computes level, project
count, total XP and total workload from the transcript data, so the figures at
the top of the page cannot drift out of sync with the table at the bottom. The
CPP modules collapse into one table row but still count as nine projects, and
in-progress work is excluded from completed workload.

**Client components are the exception.** Only the interactive pieces need the
browser, and only those carry `"use client"`:

- `SiteNav` for scroll position, the active section and the sliding marker
- `ProjectFilters` for domain filtering
- `motion.tsx`: the pointer spotlight, magnetic buttons, count-up stats, the
  timeline rail and the copy-email button
- `Reveal`, `PeekReveal` and `Year`

**The page works without JavaScript.** Every section is server-rendered, the
scroll reveal starts from its visible resting state, and `Reveal` only hides an
element after confirming it is below the fold.

**Dark only.** The palette lives as tokens on `:root` in `globals.css`, mirrored
in `lib/theme.ts` for the Open Graph card and the browser chrome colour. All
motion is switched off under `prefers-reduced-motion`.

## Layout

```
src/
  app/        layout (fonts, metadata), page, global theme tokens
  components/ presentation, server-first
  content/    typed source of truth for everything on the page
  lib/        stats derived from content
public/       résumé PDF
```

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```
