# Graph Report - .  (2026-05-20)

## Corpus Check
- 32 files · ~140,970 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 119 nodes · 130 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 78% EXTRACTED · 22% INFERRED · 1% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.88)
- Token cost: 18,500 input · 3,200 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Style Skill Variants|Style Skill Variants]]
- [[_COMMUNITY_Kaif Brand & Identity|Kaif Brand & Identity]]
- [[_COMMUNITY_Component Libraries|Component Libraries]]
- [[_COMMUNITY_Restaurant Visual Language|Restaurant Visual Language]]
- [[_COMMUNITY_Editorial Design System|Editorial Design System]]
- [[_COMMUNITY_AI Anti-Patterns & Guardrails|AI Anti-Patterns & Guardrails]]
- [[_COMMUNITY_Skill Routing & Recipes|Skill Routing & Recipes]]
- [[_COMMUNITY_Runtime Code Nodes|Runtime Code Nodes]]
- [[_COMMUNITY_Base Layout & Behaviors|Base Layout & Behaviors]]
- [[_COMMUNITY_OpenWolf Session Protocol|OpenWolf Session Protocol]]
- [[_COMMUNITY_Minimalism Config|Minimalism Config]]

## God Nodes (most connected - your core abstractions)
1. `Three-Dial Design System (variance, motion, density)` - 14 edges
2. `Design Taste Soft Style Skill` - 13 edges
3. `Index Page (index.astro)` - 9 edges
4. `Base Layout (Base.astro)` - 7 edges
5. `Taste Skill Pack Router (SKILL.md)` - 7 edges
6. `Kaif Design System Document` - 6 edges
7. `Components Library` - 6 edges
8. `Kaif Product Document` - 5 edges
9. `Style Recipes (component-to-style mapping)` - 5 edges
10. `React Bits Component Index` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Design System Typography (Cormorant Garamond + Neue Haas Grotesk)` --partially_implemented_by--> `Google Fonts: Alegreya + Hanken Grotesk`  [AMBIGUOUS]
  DESIGN.md → src/layouts/Base.astro
- `Astro Site Config (kaifphangan.com)` --configures_site_for--> `Kaif Brand Identity (Levantine soul food, beach bar, Koh Phangan)`  [INFERRED]
  astro.config.mjs → PRODUCT.md
- `Brand Personality: Warm, Elevated, Unhurried` --semantically_similar_to--> `Quiet Luxury Baseline Config (DESIGN_VARIANCE:4, MOTION:2, DENSITY:3)`  [INFERRED] [semantically similar]
  PRODUCT.md → taste-skill/quiet-luxury/skill.md
- `Design System Color Palette (4 named roles)` --semantically_similar_to--> `Quiet Luxury Baseline Config (DESIGN_VARIANCE:4, MOTION:2, DENSITY:3)`  [INFERRED] [semantically similar]
  DESIGN.md → taste-skill/quiet-luxury/skill.md
- `Unhurried Editorial Design Philosophy` --semantically_similar_to--> `Quiet Luxury Baseline Config (DESIGN_VARIANCE:4, MOTION:2, DENSITY:3)`  [INFERRED] [semantically similar]
  DESIGN.md → taste-skill/quiet-luxury/skill.md

## Hyperedges (group relationships)
- **Kaif Brand Triangle: Arabic meaning + Levantine food + Chaloklum Bay location together define the complete brand identity** — concept_kaif_arabic_meaning, concept_levantine_soulfood, concept_chaloklum_bay, product_md_brandidentity [EXTRACTED 1.00]
- **Design System Triad: Color palette + Typography + Elevation together implement the Still Water Deep Color north star** — design_md_colorpalette, design_md_typography, design_md_elevation, design_md_creativenorthstar [EXTRACTED 1.00]
- **Taste Skill Workflow: Router reads brief, selects style skill, uses style-recipes to pick components — tripartite dependency** — tasteskill_skill_router, tasteskill_components_stylerecipes, tasteskill_quietluxury_skill [EXTRACTED 1.00]
- **All Taste Skill style variants share the three-dial configuration system (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY)** — soft_skill_design_taste_soft, dashboards_skill_design_taste_dashboards, monochrome_modern_skill_design_taste_monochrome, premium_bento_skill_design_taste_premium_bento, gallery_minimal_skill_design_taste_gallery_minimal, editorial_premium_skill_design_taste_editorial_premium, cinematic_product_skill_design_taste_cinematic_product, swiss_system_skill_design_taste_swiss_system, soft_brutalism_skill_design_taste_soft_brutalism, brutalism_skill_design_taste_brutalism, soft_skill_three_dials_system [EXTRACTED 1.00]
- **Component library sources (React Bits, 21st Community, Aceternity UI, GSAP) collectively feed all style skill implementations** — reactbits_reactbits_index, 21st_community_21st_index, components_readme_aceternity_ui, components_readme_gsap_explore, soft_skill_design_taste_soft [EXTRACTED 1.00]
- **AI tells and forbidden patterns (purple-blue aesthetic, generic hero, card spam) are shared guardrails across all style skills** — soft_skill_ai_tells_forbidden, soft_skill_anti_ai_purple_blue, soft_skill_design_taste_soft, dashboards_skill_design_taste_dashboards, brutalism_skill_design_taste_brutalism [INFERRED 0.85]
- **Kaif Visual Brand System: Favicon + Interior Photos define teal/copper/terracotta palette and eclectic vintage-upscale aesthetic** — public_favicon_svg_asset, assets_kaif_interior_shot_image, assets_kaif_hero_image_image, concept_kaif_brand_identity [INFERRED 0.95]
- **Interior Consistency: Both interior photos share teal tufted seating, wrought iron, and warm wood elements confirming a unified decor language** — assets_kaif_interior_shot_image, assets_kaif_hero_image_image, assets_kaif_interior_shot_ambiance, assets_kaif_hero_image_seating [INFERRED 0.95]

## Communities (13 total, 2 thin omitted)

### Community 0 - "Style Skill Variants"
Cohesion: 0.1
Nodes (22): Brutalism Baseline Config (variance:6, motion:2, density:3), Design Taste Brutalism Style Skill, Cinematic Product Baseline Config (variance:7, motion:7, density:4), Design Taste Cinematic Product Style Skill, Dashboards Baseline Config (variance:4, motion:4, density:7), Design Taste Dashboards Style Skill, Editorial Premium Baseline Config (variance:5, motion:2, density:3), Design Taste Editorial Premium Style Skill (+14 more)

### Community 1 - "Kaif Brand & Identity"
Cohesion: 0.12
Nodes (17): Chaloklum Bay Location (Koh Phangan, Thailand), GSAP ScrollTrigger (scroll parallax + hero entry), Kaif (Arabic): State of pure bliss, being exactly where you are meant to be, Levantine Soul Food Identity (laffa, shakshuka, hummus, falafel), Kaif Brand Identity (Levantine soul food, beach bar, Koh Phangan), Kaif Menu Identity (Breakfast, All Day, Drinks), Astro Site Config (kaifphangan.com), About Section (#about) (+9 more)

### Community 2 - "Component Libraries"
Cohesion: 0.15
Nodes (15): 21st Community Component Index, 21st Community Pragmatic UI Primitives, 21st Community Shader Components, 21st Community Visually Rich References, 21st Community Reference, Aceternity UI Reference, Components Library, GSAP Explore Reference (+7 more)

### Community 3 - "Restaurant Visual Language"
Cohesion: 0.21
Nodes (13): Hero Color Palette: Teal/Turquoise Upholstery, Dark Wrought Iron, Warm Wood, Cool Natural Light, Kaif Hero Image Photo, Mood: Upscale Eclectic Cafe/Restaurant, Vintage-Industrial, Warm-Cool Contrast, Hero Seating: Teal Tufted Bench/Sofa with Greek Key Ironwork, Glass Facade with Natural Light, Restaurant Ambiance: Teal Tufted Seating, Wrought Iron Chairs, Copper Pendant Lights, Interior Color Palette: Teal/Turquoise, Copper/Brown, Dark Iron, Kaif Interior Shot Photo, Teal Maritime/Seafaring Mural Wall Art in Background (+5 more)

### Community 4 - "Editorial Design System"
Cohesion: 0.2
Nodes (12): Unhurried Editorial Design Philosophy, Design System Color Palette (4 named roles), Creative North Star: Still Water, Deep Color, Kaif Design System Document, Design Do's and Don'ts, Elevation System (Depth-Through-Tone, no decorative shadows), Design System Typography (Cormorant Garamond + Neue Haas Grotesk), Anti-References (design anti-patterns to avoid) (+4 more)

### Community 5 - "AI Anti-Patterns & Guardrails"
Cohesion: 0.18
Nodes (11): AI Tells Forbidden Patterns, Anti AI Purple-Blue Aesthetic Rule, Soft Baseline Config (variance:5, motion:5, density:4), Design Taste Soft Style Skill, Failure Modes and Recovery Loop, Hero and Page Checksum Rules, min-h-100dvh Hero Viewport Rule, Motion-Engine Bento Paradigm (+3 more)

### Community 6 - "Skill Routing & Recipes"
Cohesion: 0.29
Nodes (10): Aceternity UI Component Library Reference, GSAP Explore Component Library Reference, Style Recipes (component-to-style mapping), Dark Luxe Skill (design-taste-dark-luxe), Minimalism Skill (design-taste-minimalism), Quiet Luxury Skill (design-taste-quiet-luxury), Taste Skill Pack (multi-style frontend skill pack), Taste Skill Pack Router (SKILL.md) (+2 more)

### Community 7 - "Runtime Code Nodes"
Cohesion: 0.29
Nodes (5): delay, isOpen, gsap/ScrollTrigger, ../layouts/Base.astro, ../styles/global.css

### Community 8 - "Base Layout & Behaviors"
Cohesion: 0.29
Nodes (7): Google Fonts: Alegreya + Hanken Grotesk, Base Layout (Base.astro), Mobile Nav Toggle, Nav Active Section Indicator (IntersectionObserver), Scroll Reveal (IntersectionObserver), Scroll Tide Progress Indicator, Time-of-Day Hero Eyebrow (UTC+7 logic)

## Ambiguous Edges - Review These
- `Google Fonts: Alegreya + Hanken Grotesk` → `Design System Typography (Cormorant Garamond + Neue Haas Grotesk)`  [AMBIGUOUS]
  DESIGN.md · relation: partially_implemented_by

## Knowledge Gaps
- **48 isolated node(s):** `delay`, `isOpen`, `../styles/global.css`, `Astro Site Config (kaifphangan.com)`, `Time-of-Day Hero Eyebrow (UTC+7 logic)` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Google Fonts: Alegreya + Hanken Grotesk` and `Design System Typography (Cormorant Garamond + Neue Haas Grotesk)`?**
  _Edge tagged AMBIGUOUS (relation: partially_implemented_by) - confidence is low._
- **Why does `Design Taste Soft Style Skill` connect `AI Anti-Patterns & Guardrails` to `Style Skill Variants`, `Component Libraries`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `Three-Dial Design System (variance, motion, density)` connect `Style Skill Variants` to `AI Anti-Patterns & Guardrails`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `Components Library` connect `Component Libraries` to `AI Anti-Patterns & Guardrails`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `Three-Dial Design System (variance, motion, density)` (e.g. with `Soft Baseline Config (variance:5, motion:5, density:4)` and `Dashboards Baseline Config (variance:4, motion:4, density:7)`) actually correct?**
  _`Three-Dial Design System (variance, motion, density)` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `delay`, `isOpen`, `../styles/global.css` to the rest of the system?**
  _48 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Style Skill Variants` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._