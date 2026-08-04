// Rollcall - main script
// Handles the mobile menu, builds the little gallery preview
// in the hero, runs the FAQ dropdowns, and fades sections in
// as you scroll down. Nothing fancy, just vanilla JS.

document.addEventListener('DOMContentLoaded', function () {
  setupMenu();
  buildGallery();
  setupFaq();
  setupScrollReveal();
  setupNavShadow();
});

// ---- mobile menu toggle ----
function setupMenu() {
  var burger = document.getElementById('burgerBtn');
  var nav = document.querySelector('.navbar');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // close the menu once someone taps a link
  var links = nav.querySelectorAll('.nav-links a, .nav-buttons a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }
}

// ---- build the little photo grid in the hero ----
function buildGallery() {
  var grid = document.getElementById('galleryGrid');
  if (!grid) return;

  var totalPhotos = 9;
  var likedPhotos = [1, 4, 5, 8]; // just some sample "picked" photos

  // warm gradient colors standing in for real photos
  var colors = [
    ['#F97316', '#EC4899'],
    ['#7C3AED', '#EC4899'],
    ['#14B8A6', '#7C3AED'],
    ['#F97316', '#7C3AED'],
    ['#EC4899', '#F97316']
  ];

  for (var i = 0; i < totalPhotos; i++) {
    var photo = document.createElement('div');
    photo.className = 'photo' + (likedPhotos.indexOf(i) > -1 ? ' liked' : '');
    var pair = colors[i % colors.length];
    photo.style.background = 'linear-gradient(135deg, ' + pair[0] + ', ' + pair[1] + ')';
    photo.style.opacity = '0.85';
    grid.appendChild(photo);
  }
}

// ---- FAQ accordion, only one open at a time ----
function setupFaq() {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var question = item.querySelector('.faq-q');
    question.addEventListener('click', function () {
      var alreadyOpen = item.classList.contains('open');

      items.forEach(function (other) {
        other.classList.remove('open');
      });

      if (!alreadyOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ---- fade sections in as they scroll into view ----
function setupScrollReveal() {
  var targets = document.querySelectorAll(
    '.feature-card, .step, .price-card, .testimonial-card'
  );
  targets.forEach(function (el) { el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('shown'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
}

// ---- small shadow on the navbar once you scroll down a bit ----
function setupNavShadow() {
  var nav = document.querySelector('.navbar');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 6px 20px rgba(31, 27, 46, .08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
}
