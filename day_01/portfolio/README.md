# Md Sahin Sardar — Portfolio Website

A responsive, single-page personal portfolio built for the Novexa Technologies
Full Stack Development task ("Task 1: Responsive Personal Portfolio Website").

**Live sections:** Home · About · Skills · Projects · Education · Contact

## Concept

The site is designed around the subject's own toolkit — VS Code, Git/GitHub,
and the terminal. Navigation is styled as editor tabs (`home.tsx`, `about.md`,
`skills.json`, `projects.js`, `education.yml`, `contact.sh`), the hero is a
typed terminal introduction, skills are laid out like a JSON object, and
projects read like function declarations.

## Tech

- HTML5
- CSS3 (Flexbox + Grid, custom properties, responsive breakpoints)
- Vanilla JavaScript (ES6) — typing animation, scroll reveal, mobile nav, contact form

No frameworks or build step required — just open `index.html`.

## File structure

```
index.html          → markup for all sections
style.css            → design system + responsive layout
script.js            → typing animation, nav, scroll reveals, contact form
assets/
  photo-hero.jpg      → hero section photo
  photo-about.jpg      → about section photo
  photo-gallery.jpg    → projects section photo
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Works as-is on GitHub Pages, Netlify, or Vercel — static files only, no
backend or build step needed.

## Credits

Content and photos sourced from Md Sahin Sardar's resume.
