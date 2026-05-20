<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Kaif
description: A premium beach bar and restaurant in Koh Phangan — warm, elevated, unhurried.
---

# Design System: Kaif

## 1. Overview

**Creative North Star: "Still Water, Deep Color"**

Kaif is not a beach bar that announces itself. It earns its place through intention: generous space, deliberate color, and typography that assumes you already want to be here. The visual system draws from the quality of Koh Phangan at its best — the specific amber of late-afternoon light on a good terracotta surface, the contrast of deep shadow against bleached linen. Not a postcard. A room you remember.

Color is editorial punctuation: a full palette of 3-4 named roles used with purpose, not decoration. The neutral base breathes. Color arrives at moments that earn it. References are Drift by Noma (atmosphere as the product), Four Seasons Surf Club (effortless hospitality, never try-hard luxury), and Kinfolk (editorial warmth, generous white space, serif confidence). The anti-reference is the Instagram-golden-hour resort site that mistakes saturation for soul.

Motion is choreographed but unhurried. Entrances are scroll-driven and measured, never eager. The pace matches the product: a place where you linger.

**Key Characteristics:**
- Editorial serif display paired with a clean humanist sans — precision with warmth
- Full palette: neutral base, 3-4 named color roles, color as punctuation not wallpaper
- Choreographed motion at human pace — scroll-driven, ease-out-quint, nothing bounces
- Tinted neutrals toward the brand hue — no pure white, no pure black anywhere
- Generous spacing that varies for rhythm — monotony is its own kind of bad hospitality

## 2. Colors: The Full Palette

Four named roles, each earning its place. The neutral carries most of the surface; the other three arrive deliberately.

**The Named Role Rule.** Every color has a single role: Ground, Anchor, Color One, Color Two. A color used outside its role breaks the system.

### Primary
- **Ground** `oklch(97% 0.005 90)` (`--stone`): Bleached limestone surface. Salt-air white, not warm parchment. Alt surface: `oklch(94% 0.008 85)` (`--stone-warm`).

### Secondary
- **Anchor** `oklch(24% 0.03 245)` (`--navy`): Deep slate-navy. Headlines, body text, nav. Cool-coastal, not warm-espresso. Secondary text: `oklch(44% 0.025 240)` (`--navy-muted`) — WCAG AA on stone.

### Tertiary / Color One
- **Sun-Gold** `oklch(58% 0.11 75)` (`--gold`): Washed honey-gold, sun-bleached not saturated. Used for large headings, decorative, review marks. Button backgrounds and small-text use darker `oklch(45% 0.1 75)` (`--gold-label`) for WCAG AA contrast. Hover: `oklch(40% 0.09 75)` (`--gold-dark`).

### Neutral / Color Two
- **Seafoam** `oklch(72% 0.05 185)` (`--seafoam`): Faded coastal seafoam. Used for fact dividers. Section tint: `oklch(95% 0.018 185)` (`--seafoam-wash`) — reviews section background.

**The Color Splash Rule.** Color One and Color Two never appear together in equal weight. One leads; the other accents. If both appear on a screen, one covers more than 3x the area of the other.

## 3. Typography

**Display Font:** Alegreya (400 weight, with Georgia, serif as fallback) — `--font-display`
**Body Font:** Hanken Grotesk (with system-ui, sans-serif as fallback) — `--font-body`

**Character:** Alegreya carries warmth and authority without affectation. At 400 weight its letterforms are full-bodied — neither delicate nor heavy. Hanken Grotesk grounds it: humanist, warm, never sterile. Together they feel like a well-considered menu from a place that earns its reputation quietly.

### Hierarchy
- **Display** (300, clamp(3rem, 8vw, 6rem), 0.95 line-height): Hero headlines, section statements. Spaced generously. Never sentence case — title case or all-caps only, decided per surface.
- **Headline** (300–400, clamp(1.75rem, 4vw, 2.75rem), 1.1 line-height): Feature headings, pull quotes, named sections.
- **Title** (500, 1.125–1.25rem, 1.2 line-height): Subheadings, label headings, navigation items.
- **Body** (400, 1rem, 1.65 line-height): All running copy. Max line length 65–75ch. Never serif for body copy.
- **Label** (500, 0.75rem, 1.4 line-height, 0.08em letter-spacing, uppercase): Tags, category labels, section markers. Neue Haas Grotesk only.

**The Weight Contrast Rule.** Every typographic level must differ from its neighbor by at least one full weight step (e.g. 300 → 500, not 300 → 400) or by a scale ratio of 1.25 minimum. Flat scales look like indecision.

## 4. Elevation

Choreographed motion suggests depth through layering, not shadow. This system is flat by default; surfaces don't float above each other, they sit at different tonal depths. Depth is conveyed through background tones (Warm Ground vs. Color One wash) and motion timing (foreground elements arrive before background ones on scroll entry).

**The Depth-Through-Tone Rule.** No box-shadow on surface elements at rest. If a surface needs to feel elevated, tint it one step warmer or darker than its parent. Shadows appear only in response to state (hover on interactive cards, focus on form fields) and are never decorative.

## 5. Components

*Omitted in seed mode. Re-run `/impeccable document` once there's code to extract real component patterns.*

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all color values in implementation. Reduce chroma as lightness approaches 0 or 100.
- **Do** tint every neutral toward the brand hue at chroma 0.005–0.01. No pure white (`#fff`), no pure black (`#000`).
- **Do** vary spacing for rhythm. Generous breathing room on hero sections; tighter on dense content. Same padding everywhere is monotony.
- **Do** use Cormorant at 300 weight for display text. Heavier weights erase its character.
- **Do** ease all transitions out with exponential curves (ease-out-quart or ease-out-quint). Never bounce, never elastic.
- **Do** treat scroll-driven entrances as choreography: staggered, measured, directional. Foreground before background. Fast enough to feel alive, slow enough to feel deliberate.
- **Do** let the neutral base carry the surface. Color arrives to punctuate, not cover.

### Don't:
- **Don't** use sunset gradients, palm-tree motifs, or neon signage. Generic tropical cliché is the anti-reference. If it looks like a beach resort screensaver, it fails.
- **Don't** use hand-painted display fonts or "party" energy. Kaif is a sophisticated host, not a beach shack with specials on a chalkboard.
- **Don't** use stock-photography-driven corporate layouts: hero image + headline + subtitle + two CTAs. That is the hospitality industry template and it communicates nothing specific.
- **Don't** use Instagram-saturated golden-hour color grading as a palette. High-chroma warm + cool separation applied uniformly is visual fast food.
- **Don't** animate layout properties (width, height, top, left, padding). Animate transform and opacity only.
- **Don't** use Color One and Color Two in equal weight on the same surface. One leads; the other accents.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any element. Rewrite with full borders, background tints, or nothing.
- **Don't** use gradient text (`background-clip: text`). Emphasis through weight or size, always a solid color.
