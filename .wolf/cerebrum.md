# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-05-19

## User Preferences

- Wants real editorial design decisions, not safe choices. "Surprise me" on hero = break the template completely.
- Approved: light coastal palette (stone/navy/gold/seafoam) replacing warm Levantine palette — user asked for full colour redesign from scratch 2026-05-20.
- Approved: GSAP for motion (installed gsap@3.15.0). ScrollTrigger parallax + clipPath reveals.
- Caveman comms mode active — terse, no filler.

## Key Learnings

- **Project:** kaif-redesign — Astro 4.16 static site, Alegreya + Hanken Grotesk fonts
- Real hero photo exists at `/assets/kaif-hero-image.jpg` and `/assets/kaif-interior-shot.jpg` — not placeholders
- GSAP 3.15.0 installed. Use `import gsap from 'gsap'` + `import { ScrollTrigger } from 'gsap/ScrollTrigger'` in Astro `<script>` blocks (processed as client modules)
- Palette tokens use OKLCH. **Light coastal palette (as of 2026-05-20):** Stone bg: `oklch(97% 0.005 90)` (`--stone`). Navy text: `oklch(24% 0.03 245)` (`--navy`). Sun-gold accent: `oklch(58% 0.11 75)` (`--gold`). Seafoam foil: `oklch(72% 0.05 185)` (`--seafoam`). Brace teal: `oklch(60% 0.17 215)` (`--brace`).
- Old alias chain: `--amber → --ocean → #0080c8` (was blue). Now `--ocean` = terracotta OKLCH.
- `data-reveal` + IntersectionObserver handles scroll reveals for non-hero sections (Base.astro). GSAP handles hero entry only.

## Do-Not-Repeat

<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-05-20] Bare `{` and `}` in Astro template spans render as empty — Astro's parser treats them as expression delimiters. Always use `&#123;` / `&#125;` for literal curly braces in HTML content.
- [2026-05-20] Old parallax code in Base.astro targeted `.hero-img` but HTML used `.hero-bg-img` — was silently broken. When adding GSAP, remove old hand-rolled parallax to avoid conflicts.
- [2026-05-20] `--ocean-label` was `oklch(47% 0.18 244)` (blue hue 244) — the entire accent system was cold/blue despite DESIGN.md specifying terracotta. Always check that alias values match the brand intent.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
