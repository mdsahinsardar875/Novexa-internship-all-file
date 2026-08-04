// ============================================
// ROLLCALL — script.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  buildContactSheet();
  initFaqAccordion();
  initScrollReveal();
  initHeaderShadowOnScroll();
});

/* ---------- Mobile nav toggle ---------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const header = document.querySelector('.site-header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close menu after tapping a link (mobile)
  header.querySelectorAll('.main-nav a, .header-actions a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Build the hero contact sheet grid ---------- */
function buildContactSheet() {
  const grid = document.getElementById('sheetGrid');
  if (!grid) return;

  const TOTAL_FRAMES = 24;
  const pickedFrames = new Set([3, 7, 8, 12, 15, 19, 21, 24, 2, 11, 17, 6]);

  // Warm tonal placeholders standing in for real photos, generated per-frame
  const tones = ['#4a4238', '#5c5142', '#3a352c', '#6b5a44', '#453f36', '#584b3a'];

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const frame = document.createElement('div');
    frame.className = 'frame' + (pickedFrames.has(i) ? ' picked' : '');
    frame.dataset.n = String(i).padStart(2, '0');
    const tone = tones[i % tones.length];
    frame.style.background = `linear-gradient(135deg, ${tone}, ${shade(tone, -12)})`;
    grid.appendChild(frame);
  }
}

function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/* ---------- FAQ accordion ---------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------- Scroll reveal for sections ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.feature-card, .workflow-step, .price-card, .testimonial blockquote'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(el => observer.observe(el));
}

/* ---------- Header subtle elevation on scroll ---------- */
function initHeaderShadowOnScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 8 ? '0 8px 24px rgba(0,0,0,.35)' : 'none';
  });
}
