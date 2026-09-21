# shadcn/ui — Design Style Reference

```yaml
# How this file was made. Sources are first-party; nothing here is
# read from a rendered page. Full breakdown at source_page below.
method: restated-from-official-docs
confidence: high
verified_at: 2026-09-03
source_page: https://www.designsystems.one/design-systems/shadcn-ui
sources:
  - https://ui.shadcn.com/
  - https://ui.shadcn.com/themes
  - https://ui.shadcn.com/docs/theming
  - https://github.com/shadcn-ui/ui
```

> **Unofficial, community-authored reference.** Compiled by [designsystems.one](https://www.designsystems.one). Not affiliated with, endorsed by, or sponsored by shadcn. "shadcn/ui" and related marks belong to their respective owners. This document describes publicly observable style attributes in original words — it contains no copied documentation, logos, icon artwork, or original token files. Always defer to the official source for canonical, current values.

**System:** shadcn/ui
**Owner:** shadcn
**Official documentation:** https://ui.shadcn.com/
**Visual character:** Achromatic zinc minimalism you own outright — near-black actions, hairline borders, and taste as the default theme.

---

## Summary

Not a library — a registry of components you copy and own.

_Editorial confidence: high. Values are drawn from well-documented public token references. Palette checked against the retained legacy zinc HSL registry snapshot on 2026-09-05, converted to rounded sRGB hex. Current presets can use different values and color spaces. Typography, spacing, radius and other unreviewed examples are project choices, not verified universal shadcn defaults. Field-level evidence: 8/76 claims source-linked, 8/76 dated. Confidence is not verification; validate canonical values before implementation._

[Inspect every field and its evidence](https://www.designsystems.one/api/style-spec?system=shadcn-ui)

## Color tokens

| Color | Value | CSS variable | Role |
| --- | --- | --- | --- |
| Background | `#ffffff` | `--background` | Page background (light, zinc default) |
| Foreground | `#09090b` | `--foreground` | Primary text |
| Primary | `#18181b` | `--primary` | Primary action fill (near-black) |
| Muted | `#f4f4f5` | `--muted` | Muted surfaces |
| Muted Foreground | `#71717a` | `--muted-foreground` | Secondary text |
| Border | `#e4e4e7` | `--border` | Borders and inputs |
| Destructive | `#ef4444` | `--destructive` | Destructive actions |
| Ring | `#09090b` | `--ring` | Focus ring in this legacy light zinc snapshot |

## Typography

- **Body:** Geist / Inter (project-defined) — weights 400, 500, 600, 700 — `var(--font-sans), ui-sans-serif, system-ui, sans-serif`
- **Mono:** Geist Mono — weights 400 — `var(--font-mono), ui-monospace, SFMono-Regular, monospace`

## Type scale

| Step | Size | Line height |
| --- | --- | --- |
| h1 | `36px` | `40px` |
| h2 | `30px` | `36px` |
| h3 | `24px` | `32px` |
| p | `16px` | `28px` |
| small | `14px` | `20px` |

## Spacing

Base unit: `4px (Tailwind scale)`

Scale: `4px` · `8px` · `12px` · `16px` · `24px` · `32px` · `48px`

## Corner radius

| Name | Value |
| --- | --- |
| radius (default) | `0.5rem` |
| sm | `calc(0.5rem - 4px)` |
| full | `9999px` |

## Elevation / shadows

| Name | Value |
| --- | --- |
| sm | `0 1px 2px 0 rgba(0,0,0,0.05)` |
| md | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` |

## Motion

| Name | Value |
| --- | --- |
| default | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

## Quick start (CSS)

```css
/* shadcn/ui — illustrative tokens, restated as CSS custom properties.
   Unofficial reference by designsystems.one; values are indicative, not
   canonical. Native dp/sp values are omitted, never silently converted.
   Official reference: https://ui.shadcn.com/
   Reference scope: Palette checked against the retained legacy zinc HSL registry snapshot on 2026-09-05, converted to rounded sRGB hex. Current presets can use different values and color spaces. Typography, spacing, radius and other unreviewed examples are project choices, not verified universal shadcn defaults.
   Field evidence: https://www.designsystems.one/api/style-spec?system=shadcn-ui */

:root {
  /* Color */
  --background: #ffffff; /* Page background (light, zinc default) */
  --foreground: #09090b; /* Primary text */
  --primary: #18181b; /* Primary action fill (near-black) */
  --muted: #f4f4f5; /* Muted surfaces */
  --muted-foreground: #71717a; /* Secondary text */
  --border: #e4e4e7; /* Borders and inputs */
  --destructive: #ef4444; /* Destructive actions */
  --ring: #09090b; /* Focus ring in this legacy light zinc snapshot */

  /* Typography */
  --font-body: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-mono), ui-monospace, SFMono-Regular, monospace;

  /* Type scale */
  --text-h1: 36px; /* line-height 40px */
  --text-h2: 30px; /* line-height 36px */
  --text-h3: 24px; /* line-height 32px */
  --text-p: 16px; /* line-height 28px */
  --text-small: 14px; /* line-height 20px */

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;

  /* Radius */
  --radius-radius-default-: 0.5rem;
  --radius-sm: calc(0.5rem - 4px);
  --radius-full: 9999px;

  /* Elevation */
  --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);

  /* Motion */
  --motion-default: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Origin

shadcn launched in late 2023 as a deliberately anti-library design system: components are not installed as a dependency but copied into your codebase via a CLI. The model became the de facto starter for new React + Tailwind + Radix projects in 2024–2026.

## Governance

Single-maintainer-led, open source, MIT. Community contributions plus a growing registry ecosystem (other authors publish shadcn-compatible component sets).

## Known for

- The copy-not-install model — your team owns every line, can edit it, and isn't blocked by upstream releases.
- Built on Radix primitives + Tailwind, so accessibility comes free and theming is token-driven.
- The registry format — every shadcn component has a JSON manifest that AI agents can consume directly.

## Underrated

- The registry isn't shadcn-only. Any team can ship a shadcn-compatible registry at their own URL, and `npx shadcn add` will install from it.
- Theming via CSS variables + Tailwind makes shadcn one of the cleanest substrates for an internal design system.

## Watch out for

- Because components are copied, version drift across a large team is real. Establish a refresh cadence.
- Composition over configuration is great until your team is unfamiliar with composition. Budget for onboarding.

## Components worth studying

- **Button** — The most-imitated button API in modern React; clean variant model.
- **Dialog** — Radix-backed modal with focus trap, escape, and overlay correctness.
- **Form** — react-hook-form integration with Zod schemas — the reference modern form pattern.

## When to choose shadcn/ui

Pick shadcn/ui as a starting point for any new React + Tailwind project where you want a clean substrate to build your own design system on top of. It's not an end-state design system — it's the best public starting kit.

## Apply this style with an AI tool

Paste this into your AI coding assistant as a direction, then iterate:

> Design in the spirit of shadcn/ui by shadcn — Not a library — a registry of components you copy and own. Character: Achromatic zinc minimalism you own outright — near-black actions, hairline borders, and taste as the default theme. Use a primary colour near #18181b, the typeface "Geist / Inter (project-defined)" (or a close equivalent), corner radius around 0.5rem, a spacing rhythm on a 4px (Tailwind scale) base. Lean into what it's known for: The copy-not-install model — your team owns every line, can edit it, and isn't blocked by upstream releases. Match the intent, not the pixels; adapt it to my product rather than cloning it.

## Official references

- [shadcn/ui docs](https://ui.shadcn.com/)
- [shadcn on GitHub](https://github.com/shadcn-ui/ui)
- [Registry format](https://ui.shadcn.com/docs/registry)

---

_Generated by [designsystems.one](https://www.designsystems.one/design-systems/shadcn-ui) — a catalogue of public design systems. Style facts are reported for reference and education; adapt them to your own product. Report issues or takedown requests via the site._
