---
name: humanize-ui
description:
  Give your coding agent some design taste. Humanize your UI with proven 
  components.
license: MIT
---

# humanize-ui

Use this skill when improving or building frontend UI where the result
should feel more polished than a generic AI-generated interface.

The operating model is: inspect the product first, make deliberate
project-specific design choices second, scout strong human-designed
references third, then adapt the best-fitting pieces into the existing
frontend foundation. Treat component libraries like LEGO, not like a
theme you paste over the app.

The skill should feel seamless in use. Do not stop the task to ask for
design direction unless the missing choice would materially change the
result. When the brief is underspecified, state the concrete decisions
you are making and proceed.

## Workflow

1. Inspect the existing frontend before looking for components.
   - Identify the framework, routing model, component structure,
     styling system, design tokens, typography, spacing scale, colors,
     radii, shadows, icon set, dependencies, accessibility
     conventions, and responsive patterns.
   - Reuse existing primitives and local component APIs wherever
     sensible.
   - Do not introduce a new component library, animation package, or
     styling approach unless the benefit is clear and proportionate.

2. Define the UI problem precisely.
   - Determine whether the task needs a layout pattern, page section,
     form, navigation element, command surface, table, dashboard
     module, AI interaction, empty/loading/error state, animation,
     transition, or interaction polish.
   - Identify what currently feels weak: hierarchy, density, contrast,
     alignment, affordance, state handling, motion, copy, or mobile
     behavior.

3. Establish a project-specific design direction.
   - Make four explicit choices before generating UI: reference
     direction, color decision, type decision, and layout intent.
   - If the product already has brand or design tokens, use those
     choices. If it does not, pick the closest archetype in
     `references/design-briefs.md` and adapt it to the product's
     audience and workflow. State the direction plainly and commit to
     one; avoid empty directions like "modern and clean" and do not
     blend two briefs.
   - The layout should come from the user's real workflow, not from a
     default page skeleton. For example, incident software should
     foreground alert routing, service ownership, timelines, status
     updates, or monitoring context; a local repair shop should
     foreground booking, service menu, location, turnaround, and trust.
   - Litmus test before building: a user arriving on this screen should
     land inside their real task. If the screen mainly signals "this is
     a nicely designed page," the direction is still generic and should
     be redone around the workflow.

4. Use a small visual vocabulary.
   - Pick one or two strong visual motifs and execute them consistently
     instead of stacking half-ideas.
   - Be deliberate about color, type, radius, borders, elevation,
     iconography, illustration, data display, and motion. Avoid adding
     gradients, glow, cards, blobs, glass, shadows, and animations just
     because they are available.
   - Do not replace one default look with another. Swapping AI-purple
     gradients for warm cream, sage green, and a refined serif is still
     a default if the project did not ask for it.

5. Scout curated sources when references would improve the result.
   - Search or browse the relevant source sites for current
     components, code, and behavior. Prefer the actual implementation
     over imitating a screenshot.
   - Look for several plausible candidates when the choice affects the
     product experience.
   - If a source exposes install commands or registry items, inspect
     what it adds before integrating it.

6. Evaluate candidates before using one.
   - Consider visual fit, UX fit, stack compatibility, dependency
     cost, accessibility, responsive behavior, implementation
     complexity, maintainability, and how easily the component can be
     adapted to the product's visual language.
   - Prefer one strong foundation over stitching together several
     unrelated aesthetics.
   - Reject components whose personality, motion, density, or
     dependency footprint would make the product feel inconsistent.

7. Adapt the selected pattern into the existing design language.
   - Match local typography, spacing, colors, radius, shadows,
     iconography, state management, component APIs, and accessibility
     patterns.
   - Keep the useful layout or interaction idea while removing
     irrelevant styling, decorative effects, demo content, and foreign
     abstractions.
   - The result should look native to the project, not transplanted
     from another library.

8. Polish and verify.
   - Render the result and review the actual screenshot at desktop and
     mobile widths. Verify against the render, not from the code alone.
   - Check hierarchy, spacing, density, alignment, hover/focus/active
     states, keyboard behavior, reduced-motion behavior, mobile
     layout, empty/loading/error states, and accessibility.
   - Audit for AI-built visual tells before finishing; treat this as a
     hard gate, not a soft preference. Any tell the product did not
     explicitly ask for gets fixed, not shipped. Untouched
     shadcn or Tailwind defaults, purple or blue gradient defaults,
     gradient hero text, unprompted neon glow, emoji-as-icons,
     excessive pill rounding, generic Inter or Geist by reflex,
     cream-plus-serif-plus-sage by reflex, and the centered hero plus
     three-card feature layout.
   - A flagged choice is acceptable when it is clearly intentional for
     the product. The problem is the unspecified default, not the color,
     typeface, framework, or component by itself.
   - Preserve existing functionality unless the user explicitly asks
     for behavior changes.
   - Improve the smallest appropriate surface area.

## Curated Sources

Use these as the starting set. Search them actively when they match
the task, and keep any new suggestions rare and high-quality.

- `https://beautifului.dev` - Best for AI-native product surfaces:
  thinking states, streaming text, approval cards, tool chips, task
  rows, prompt bars, context cards, diff tables, records tables,
  search, side navigation, and other agent/workflow primitives.
- `https://beui.dev` - Best for animated React/Next.js components
  built with Motion and Tailwind, especially command palettes,
  drawers, tabs, toasts, inputs, selects, docks, dynamic islands, OTP
  inputs, swipeable lists, theme toggles, and other interaction-heavy
  primitives.
- `https://rareui.com` - Best for distinctive animated React
  components that should stand out, such as playful input states,
  reveal effects, visual widgets, and shadcn-installable one-file
  components. Use sparingly in products that can support a more
  expressive moment.
- `https://transitions.dev` - Best for focused UI motion: dropdowns,
  modals, accordions, number changes, notification badges, skeleton
  reveals, success states, page transitions, tooltip motion, and small
  copy-paste CSS or React transitions.
- `https://ui.shadcn.com` - Best as a customizable foundation for
  modern React interfaces: accessible primitives, app components,
  forms, tables, command menus, sidebars, dialogs, charts, blocks, and
  the wider registry ecosystem. Review generated or registry code
  before adopting it.

## Integration Rules

- Reference first, adapt second, invent only where necessary.
- Do not blindly copy a component just because it looks good in
  isolation.
- Make specific choices before styling. The work should look like it
  belongs to this product, this audience, and this workflow.
- Do not create a Frankenstein UI assembled from mismatched libraries,
  clashing radii, incompatible shadows, random gradients, inconsistent
  motion, or competing interaction models.
- Avoid stereotypical AI design flourishes unless they genuinely fit
  the product: oversized cards, gratuitous gradients, glassmorphism,
  decorative blobs, excessive rounding, dramatic shadows, and motion
  for its own sake.
- Avoid the newer tasteful default too: warm cream backgrounds, sage or
  forest accents, refined serif display type, and soft editorial cards
  are not automatically more human. Use them only when they match the
  product's actual direction.
- When a required page shape includes common sections such as hero,
  benefits, pricing, and CTA, vary the composition around the domain's
  workflow so it does not collapse into the same centered hero and
  three-card template.
- Favor coherence over flair. A quiet, well-integrated component is
  usually better than a flashy imported one.
- Apply any decorative treatment (grain, noise, gradient, blur, a
  distinctive border or shadow style) across the whole surface or not
  at all. One textured card on an otherwise flat page reads as a bug,
  not a highlight.
- Use realistic content and representative data in data-heavy modules.
  Charts, figures, and proportions should be computed from real
  numbers, not approximated into decorative shapes, and never invent
  metrics that imply a precision the product does not have.
- Respect licenses, provenance, and attribution requirements for
  copied code.
- Before adding packages or running install commands, understand the
  dependency impact and follow the user's approval model.

## Motion

The resting state is the design. Motion only controls how elements
arrive and how they respond, and every animated element must end in
its correct static position and stay usable if the animation is
skipped.

- Animate `transform` and `opacity`. Avoid animating layout
  properties (width, height, top, margin) that force reflow.
- UI micro-transitions such as hover, open/close, and enter run
  roughly 120-240ms. Reserve slower motion for large surfaces like
  route changes.
- Use one easing curve for most transitions rather than a different
  feel per component. A decisive ease-out such as
  `cubic-bezier(.2, .8, .2, 1)` is a safe default.
- Stagger siblings by 40-120ms for sequence. Comparable elements
  (list rows, bars, cards in a set) share identical duration and
  easing; vary only the delay, never the speed.
- Honor `prefers-reduced-motion`: drop movement and long fades, keep
  instant state changes.

## Examples

If the user says, "Make this pricing page look better," inspect the
current pricing page, identify the weak layout or hierarchy, scout
pricing sections or card patterns, choose a compatible reference, then
adapt spacing, typography, states, and responsive behavior to the app.

If the user says, "Add a command palette," search for high-quality
command palette implementations or shadcn-compatible patterns, pick
one that matches the stack and accessibility needs, inspect the code,
then adapt it to local commands, styling, keyboard handling, and state
management.
