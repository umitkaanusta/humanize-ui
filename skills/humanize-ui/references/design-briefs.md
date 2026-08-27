# Design Briefs

A starting catalog of product-design directions. Each brief is a
coherent set of the four commitments from SKILL.md step 3 (reference
direction, color, type, layout intent) plus density and motion.

How to use:

- Pick the one archetype closest to the product's audience and real
  workflow.
- Adapt it. Pull the actual palette, numbers, and type from the
  product's brand and content. The brief sets direction and
  constraints, not final values.
- Do not paste a brief on as a theme. Swapping one default for another
  is still a default. If the product already has tokens, those win.
- Commit to one. Do not blend two briefs.

---

## Operational console

For monitoring, incident response, infra, ops tooling. The user is
scanning, triaging, and acting under time pressure.

- Color: muted neutral canvas; one functional accent reserved for
  status and severity, not decoration. Semantic colors (ok / warn /
  error) carry meaning and appear nowhere else.
- Type: clean sans for UI; monospace for identifiers, timestamps,
  values, and logs. Tabular figures.
- Layout: high density, tight spacing scale. Foreground tables,
  timelines, alert routing, ownership, and live status. Minimal chrome
  and padding.
- Motion: near none. State changes are instant; a brief row highlight
  is the ceiling.
- Trap: don't soften it with large cards, generous whitespace, or a
  marketing hero. Density is the feature.

## Developer platform

For APIs, SDKs, CLIs, infra products. The user reads code and expects
the UI to respect keyboard and terminal habits.

- Color: dark-capable from the start; low-chrome neutrals. Accent
  borrowed from the syntax theme, used sparingly outside code.
- Type: sans and monospace pairing. Code samples are first-class UI,
  not afterthoughts: copy buttons, language tabs, real snippets.
- Layout: docs-adjacent. Left nav, content column, right rail for
  on-page nav or context. Command surface and keyboard shortcuts.
- Motion: functional only such as disclosure and copy confirmation.
- Trap: no illustrated blobs, no gradient heroes, no emoji bullets.
  Restraint reads as competence here.

## Editorial commerce

For brand-led retail, catalogs, and content-driven product sites.

- Color: pulled from photography; small palette, mostly neutral so
  imagery leads.
- Type: confident display type (high-contrast sans or a real serif)
  with a small set of sizes. Body type set for comfortable reading.
- Layout: generous whitespace, large imagery, asymmetric grids. Vary
  section composition; resist the uniform three-card row.
- Motion: restrained scroll-driven reveals; image and type
  transitions, nothing bouncy.
- Trap: whitespace is not emptiness. Every section needs a job tied to
  browsing or buying.

## Data and analytics product

For dashboards, BI, and reporting.

- Color: neutral canvas so data color carries the meaning. Restrained
  categorical palette, colorblind-safe, identical across every chart.
- Type: number-forward. Tabular figures everywhere; labels quiet,
  values loud.
- Layout: chart-first. Filters, time range, and segment controls
  foregrounded and sticky. Offer a density toggle.
- Charts: pick the form from what the reader must do (compare, see
  part-to-whole, follow a trend, locate). Do the arithmetic
  explicitly: bar length, arc angle, and area proportional to value;
  bars start at zero; label the values that matter directly; no
  dual-axis charts; small multiples share one scale.
- Motion: transitions on data change only, fast. No entrance animation
  on every tile.
- Trap: don't decorate. A chart that is eyeballed instead of computed,
  or a KPI with invented precision, fails here. Defer to the `dataviz`
  skill for palette and detail if available.

## Consumer utility app

For everyday personal tools: money, health, scheduling, habits.

- Color: one warm brand hue plus neutrals. Friendly, not childish;
  avoid candy gradients.
- Type: one humanist sans, larger base size, clear hierarchy.
  Plain-language copy.
- Layout: one primary action per screen, large targets,
  thumb-reachable. Empty and first-run states give guidance, not just
  art.
- Motion: confirms actions and orients the user between screens;
  respects reduced-motion.
- Trap: pick one radius and one elevation step and hold them.
  Consistent and moderate beats varied and heavy.

## Local service business

For repair shops, clinics, trades, salons: a real place a customer
will call or visit.

- Color: high-contrast and readable over trendy. Two colors plus
  neutrals is plenty.
- Type: large, legible, no thin weights. Readability on cheap phones
  in daylight is the priority.
- Layout: foreground phone number, booking, hours, location and map,
  services, turnaround, and reviews. Real photos of the place and team
  over stock or illustration.
- Motion: minimal. The site should feel fast and load light.
- Trap: no dark mode by default, no parallax, no animated hero. Trust
  and clarity win the job.

## B2B SaaS marketing site

For the hero-and-sections page shape, done without collapsing into the
template.

- Color: the product's brand; one accent, applied with discipline.
- Type: one strong display face, one body face. Three or four sizes
  total.
- Layout: order sections by the buyer's real questions, not a stock
  skeleton. Product screenshots over illustration. Proof (logos,
  numbers, quotes) sits next to the claims it supports. One visual
  motif carried throughout.
- Motion: one signature transition, reused. Not a different animation
  per section.
- Trap: the centered hero plus three feature cards plus pricing plus
  CTA rut. Vary composition around what the product actually does.
