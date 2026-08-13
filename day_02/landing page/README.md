# Rollcall — Responsive Landing Page

A responsive landing page built for **Novexa Technologies — Full Stack Development, Task 2**.

Rollcall is a sample SaaS concept: photo proofing for photographers, where clients pick their
favorites from a gallery instead of sending back screenshots and email feedback.

## Live Preview
Just open `index.html` in a browser — no build step, no dependencies to install.

To deploy: drag the folder into [Netlify Drop](https://app.netlify.com/drop), or push to GitHub
and turn on **GitHub Pages** in the repo settings.

## Tech Stack
- HTML5
- CSS3 (custom properties, Grid, Flexbox, gradients, media queries)
- JavaScript (ES6, vanilla — no libraries or frameworks)

## Project Structure
```
rollcall/
├── index.html    Navbar, hero, features, how-it-works, pricing, FAQ, footer
├── style.css     Colors, layout, animations, responsive breakpoints
├── script.js     Mobile menu, gallery builder, FAQ toggle, scroll animations
└── README.md
```

## Sections
- Sticky navbar with mobile hamburger menu
- Hero with a mock gallery preview (liked photos highlighted)
- Logos / social proof strip
- 6 feature cards
- 3-step "how it works"
- Testimonial
- 3-tier pricing
- FAQ accordion
- Final call-to-action
- Footer

## JavaScript Features
- Mobile nav toggle
- Gallery grid generated dynamically with the DOM (`createElement`, `appendChild`)
- FAQ accordion, one item open at a time
- Scroll-triggered fade-in animation using `IntersectionObserver`
- Navbar shadow that appears once you scroll

## Design Notes
Went with a bright purple/pink/orange gradient theme instead of a dark or corporate look —
wanted the page to feel more like a friendly creative tool than an enterprise dashboard.
Buttons are pill-shaped, cards have soft shadows and hover lift, and the hero has a slightly
tilted gallery card to make it feel less flat.

## Responsive Design
Tested from 360px mobile widths up to desktop, with breakpoints at 900px, 720px, and 480px.
Grids collapse from 3 → 2 → 1 columns, and the navbar switches to a hamburger menu under 720px.

## Accessibility
- Keyboard focus states are visible (`:focus-visible`)
- `aria-expanded` on the mobile menu button
- Respects `prefers-reduced-motion`
- Semantic HTML (`header`, `main`, `footer`, `nav`)

## Notes
No dataset was needed for this task — all copy, names, and pricing are sample content for a
fictional product built to demonstrate front-end skills.
