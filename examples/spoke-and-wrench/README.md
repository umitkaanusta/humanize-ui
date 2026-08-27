# Examples

These examples use the same brief to compare a typical generated landing
page against one made with the `humanize-ui` skill.

**With `humanize-ui`**
![Hero with humanize-ui](after.png)

**Without `humanize-ui`**
![Hero without humanize-ui](before.png)

## Prompt Without `humanize-ui`

```text
Create a brief static landing page for a neighborhood bike repair shop
called Spoke & Wrench.

Requirements:
- Output a single HTML file with CSS inside a <style> tag.
- Include a hero, 3 service benefits, a simple service pricing strip, and
  a final booking CTA.
- Make it responsive for mobile and desktop.
- Treat the page like a real local repair shop: show service tiers, current
  turnaround, practical booking details, and a trustworthy workshop feel.
```

Output file:

- `landing-page-without-humanize-ui.html`

## Prompt With `humanize-ui`

```text
Use the humanize-ui skill.

Create a brief static landing page for a neighborhood bike repair shop
called Spoke & Wrench.

Requirements:
- Output a single HTML file with CSS inside a <style> tag.
- Include a hero, 3 service benefits, a simple service pricing strip, and
  a final booking CTA.
- Make it responsive for mobile and desktop.
- Treat the page like a real local repair shop: show service tiers, current
  turnaround, practical booking details, and a trustworthy workshop feel.
```

Output file:

- `landing-page-with-humanize-ui.html`
