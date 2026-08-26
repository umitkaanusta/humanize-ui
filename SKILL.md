---
name: humanize-ui
description: Give your coding agent some design taste. Humanize your UI with proven, human-designed components instead of starting from scratch.
---

# humanize-ui

Use this skill when improving or building frontend UI where the result should feel more polished than a generic AI-generated interface.

The operating model is: inspect the product first, scout strong human-designed references second, then adapt the best-fitting pieces into the existing frontend foundation. Treat component libraries like LEGO, not like a theme you paste over the app.

## Workflow

1. Inspect the existing frontend before looking for components.
   - Identify the framework, routing model, component structure, styling system, design tokens, typography, spacing scale, colors, radii, shadows, icon set, dependencies, accessibility conventions, and responsive patterns.
   - Reuse existing primitives and local component APIs wherever sensible.
   - Do not introduce a new component library, animation package, or styling approach unless the benefit is clear and proportionate.

2. Define the UI problem precisely.
   - Determine whether the task needs a layout pattern, page section, form, navigation element, command surface, table, dashboard module, AI interaction, empty/loading/error state, animation, transition, or interaction polish.
   - Identify what currently feels weak: hierarchy, density, contrast, alignment, affordance, state handling, motion, copy, or mobile behavior.

3. Scout curated sources when references would improve the result.
   - Search or browse the relevant source sites for current components, code, and behavior. Prefer the actual implementation over imitating a screenshot.
   - Look for several plausible candidates when the choice affects the product experience.
   - If a source exposes install commands or registry items, inspect what it adds before integrating it.

4. Evaluate candidates before using one.
   - Consider visual fit, UX fit, stack compatibility, dependency cost, accessibility, responsive behavior, implementation complexity, maintainability, and how easily the component can be adapted to the product's visual language.
   - Prefer one strong foundation over stitching together several unrelated aesthetics.
   - Reject components whose personality, motion, density, or dependency footprint would make the product feel inconsistent.

5. Adapt the selected pattern into the existing design language.
   - Match local typography, spacing, colors, radius, shadows, iconography, state management, component APIs, and accessibility patterns.
   - Keep the useful layout or interaction idea while removing irrelevant styling, decorative effects, demo content, and foreign abstractions.
   - The result should look native to the project, not transplanted from another library.

6. Polish and verify.
   - Check hierarchy, spacing, density, alignment, hover/focus/active states, keyboard behavior, reduced-motion behavior, mobile layout, empty/loading/error states, and accessibility.
   - Preserve existing functionality unless the user explicitly asks for behavior changes.
   - Improve the smallest appropriate surface area.

## Curated Sources

Use these as the starting set. Search them actively when they match the task, and keep any new suggestions rare and high-quality.

- `https://beautifului.dev` - Best for AI-native product surfaces: thinking states, streaming text, approval cards, tool chips, task rows, prompt bars, context cards, diff tables, records tables, search, side navigation, and other agent/workflow primitives.
- `https://beui.dev` - Best for animated React/Next.js components built with Motion and Tailwind, especially command palettes, drawers, tabs, toasts, inputs, selects, docks, dynamic islands, OTP inputs, swipeable lists, theme toggles, and other interaction-heavy primitives.
- `https://rareui.com` - Best for distinctive animated React components that should stand out, such as playful input states, reveal effects, visual widgets, and shadcn-installable one-file components. Use sparingly in products that can support a more expressive moment.
- `https://transitions.dev` - Best for focused UI motion: dropdowns, modals, accordions, number changes, notification badges, skeleton reveals, success states, page transitions, tooltip motion, and small copy-paste CSS or React transitions.
- `https://ui.shadcn.com` - Best as a customizable foundation for modern React interfaces: accessible primitives, app components, forms, tables, command menus, sidebars, dialogs, charts, blocks, and the wider registry ecosystem. Review generated or registry code before adopting it.

## Integration Rules

- Reference first, adapt second, invent only where necessary.
- Do not blindly copy a component just because it looks good in isolation.
- Do not create a Frankenstein UI assembled from mismatched libraries, clashing radii, incompatible shadows, random gradients, inconsistent motion, or competing interaction models.
- Avoid stereotypical AI design flourishes unless they genuinely fit the product: oversized cards, gratuitous gradients, glassmorphism, decorative blobs, excessive rounding, dramatic shadows, and motion for its own sake.
- Favor coherence over flair. A quiet, well-integrated component is usually better than a flashy imported one.
- Respect licenses, provenance, and attribution requirements for copied code.
- Before adding packages or running install commands, understand the dependency impact and follow the user's approval model.

## Examples

If the user says, "Make this pricing page look better," inspect the current pricing page, identify the weak layout or hierarchy, scout pricing sections or card patterns, choose a compatible reference, then adapt spacing, typography, states, and responsive behavior to the app.

If the user says, "Add a command palette," search for high-quality command palette implementations or shadcn-compatible patterns, pick one that matches the stack and accessibility needs, inspect the code, then adapt it to local commands, styling, keyboard handling, and state management.
