# humanize-ui

Give your coding agent some design taste. Humanize your UI with proven, human-designed components instead of starting from scratch.

_by [Winglet](https://agentwinglet.com)_

AI can write frontend code quickly, but visual taste is harder to summon from a blank prompt. `humanize-ui` gives your coding agent or agent harness a better workflow: inspect the app, find strong human-designed components, evaluate them, then adapt the best pieces into the existing frontend.

Think of it as a LEGO box for interface work. The goal is not to paste a new theme over your product. The goal is to choose proven building blocks and make them feel native.

## What It Teaches Agents

- Inspect the existing frontend before scouting components.
- Search curated UI sources such as Beautiful UI, beUI, Rare UI, Transitions.dev, and shadcn/ui.
- Evaluate fit, dependencies, accessibility, responsiveness, and maintainability.
- Adapt component code to the product's design language.
- Avoid Frankenstein UI made from mismatched libraries.

## Install with npx

```bash
npx humanize-ui
```

Equivalent package-runner commands:

```bash
pnpm dlx humanize-ui
yarn dlx humanize-ui
bunx humanize-ui
```

By default this downloads the portable skill folder to `./humanize-ui`.

To place it directly into any agent's skill directory, pass that directory as the target:

```bash
npx humanize-ui --target ~/.config/my-agent/skills
```

## Install from Git

Clone this repository anywhere your agent or harness can read skill folders:

```bash
git clone https://github.com/umitkaanusta/humanize-ui.git humanize-ui
```

Then point your agent at that folder, or copy it into the skill directory your harness expects.

## Publishing

`npx` runs the executable published by the npm package. Before publishing a release:

```bash
npm run check
npm run pack:check
npm publish
```

The install payload copies only `SKILL.md`, `README.md`, and `LICENSE` into the target skill directory.

## Built by Winglet

`humanize-ui` helps agents make better frontend decisions. [Winglet](https://agentwinglet.com) helps coding agents and agent harnesses manage context and reduce unnecessary token usage during longer sessions.
