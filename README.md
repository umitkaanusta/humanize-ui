# humanize-ui

Give your coding agent some design taste. Humanize your UI with proven, human-designed components instead of starting from scratch.

_by [Winglet](https://agentwinglet.com)_

AI can write frontend code quickly, but visual taste is harder to summon from a blank prompt. `humanize-ui` gives your coding agent a better workflow: inspect the app, find strong human-designed components, evaluate them, then adapt the best pieces into the existing frontend.

Think of it as a LEGO box for interface work. The goal is not to paste a new theme over your product. The goal is to choose proven building blocks and make them feel native.

## What It Teaches Agents

- Inspect the existing frontend before scouting components.
- Search curated UI sources such as Beautiful UI, beUI, Rare UI, Transitions.dev, and shadcn/ui.
- Evaluate fit, dependencies, accessibility, responsiveness, and maintainability.
- Adapt component code to the product's design language.
- Avoid Frankenstein UI made from mismatched libraries.

## Install

Copy this repository into your coding agent's skills directory:

```bash
git clone https://github.com/umitkaanusta/humanize-ui.git ~/.codex/skills/humanize-ui
```

Then invoke it as `humanize-ui` when asking your agent to improve or build frontend UI.

## Built by Winglet

`humanize-ui` helps agents make better frontend decisions. [Winglet](https://agentwinglet.com) helps coding agents such as Codex and Claude Code manage context and reduce unnecessary token usage during longer sessions.
