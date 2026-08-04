// ============================================================
// Md Sahin Sardar — Portfolio interactivity
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const tabsMobile = document.getElementById('tabsMobile');

  if (menuToggle && tabsMobile) {
    menuToggle.addEventListener('click', () => {
      const isOpen = tabsMobile.classList.toggle('show');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    tabsMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        tabsMobile.classList.remove('show');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active tab highlight on scroll ---------- */
  const sections = document.querySelectorAll('main .section[id]');
  const tabs = document.querySelectorAll('.tab');

  const setActiveTab = (id) => {
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveTab(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => navObserver.observe(section));
  }

  /* ---------- Scroll cue ---------- */
  const scrollCue = document.getElementById('scrollCue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      document.getElementById('about')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealTargets = document.querySelectorAll(
    '.about-grid, .soft-skills, .json-card, .project-card, .gallery-strip, .timeline, .achievements, .contact-grid'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  /* ---------- Hero terminal typing sequence ---------- */
  const typeSequence = [
    { cmdEl: 'cmd1', outEl: 'out1', cmd: 'whoami', out: 'Md Sahin Sardar' },
    { cmdEl: 'cmd2', outEl: 'out2', cmd: 'role --list', out: 'AI Data Trainer · Full Stack Developer · MERN Developer' },
    { cmdEl: 'cmd3', outEl: 'out3', cmd: 'status --check', out: '✓ available for new opportunities' },
  ];

  function typeText(el, text, speed, done) {
    if (!el) { if (done) done(); return; }
    if (reduceMotion) { el.textContent = text; if (done) done(); return; }
    let i = 0;
    el.textContent = '';
    const timer = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (done) done();
      }
    }, speed);
  }

  function revealOutput(el, text, delay) {
    setTimeout(() => {
      if (!el) return;
      if (reduceMotion) { el.textContent = text; return; }
      el.style.opacity = 0;
      el.textContent = text;
      el.style.transition = 'opacity .3s ease';
      requestAnimationFrame(() => { el.style.opacity = 1; });
    }, delay);
  }

  function runSequence(index) {
    if (index >= typeSequence.length) {
      const finalCursor = document.getElementById('finalCursor');
      if (finalCursor) finalCursor.classList.add('cursor');
      return;
    }
    const step = typeSequence[index];
    const cmdEl = document.getElementById(step.cmdEl);
    const outEl = document.getElementById(step.outEl);

    typeText(cmdEl, step.cmd, 45, () => {
      revealOutput(outEl, step.out, 200);
      setTimeout(() => runSequence(index + 1), reduceMotion ? 0 : 700);
    });
  }

  runSequence(0);

  /* ---------- Contact form -> mailto ---------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      const mailto = `mailto:saharearsahin875@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailto;

      if (formNote) {
        formNote.textContent = '// your email app should be opening now...';
      }
    });
  }
});
