# Rollcall — Responsive Landing Page

A responsive, modern-UI landing page built for **Novexa Technologies — Full Stack Development, Task 2**.

Rollcall is a sample SaaS concept: client proofing software for photographers, styled around a
contact-sheet / darkroom visual theme (numbered frames, sprocket-hole rail, safelight amber accent).

## Live Preview
Open `index.html` in any modern browser — no build step required.

To deploy: drag the folder into **Netlify Drop**, or push to a repo and enable **GitHub Pages** /
**Vercel** on the `main` branch.

## Tech Stack
- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox, media queries)
- JavaScript (ES6, vanilla — no frameworks)

## Project Structure
```
rollcall/
├── index.html      # Markup: navbar, hero, features, workflow, pricing, FAQ, footer
├── style.css        # Design tokens, layout, responsive breakpoints
├── script.js         # Mobile nav, contact-sheet generator, FAQ accordion, scroll reveal
└── README.md
```

## Sections Implemented
- **Navigation bar** — sticky header with logo, nav links, CTA buttons, and a hamburger menu on mobile
- **Hero section** — headline, subhead, CTA buttons, and a generated "contact sheet" preview grid
- Trust strip / social proof
- Feature grid (6 cards)
- 3-step workflow
- Testimonial
- Pricing (3 tiers)
- FAQ accordion
- Final CTA
- Footer with sitemap links

## Interactive Features (JavaScript)
- Responsive hamburger menu for mobile navigation
- Contact-sheet frame grid generated dynamically (numbered frames, picked-frame styling)
- Accordion-style FAQ (single-open behavior)
- Scroll-triggered reveal animations via `IntersectionObserver`
- Header elevation shadow on scroll

## Responsive Design
Breakpoints at 900px, 720px, and 480px collapse the multi-column grid layouts to single columns
and swap the desktop nav for a mobile menu. Layout tested from 360px mobile widths up through
desktop.

## Accessibility Notes
- Visible keyboard focus states (`:focus-visible`)
- `aria-expanded` state on the mobile nav toggle and FAQ buttons
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Semantic landmarks (`header`, `main`, `footer`, `nav`)

## Author's Notes
No dataset was required per the task brief; all copy and pricing are sample content for a
fictional SaaS product ("Rollcall") built for demonstration purposes.
