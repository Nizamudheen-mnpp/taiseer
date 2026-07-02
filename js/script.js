/* ===== Taiseer Typing — interactions ===== */
(function () {
  'use strict';

  var WHATSAPP = '971506102838';

  /* ---- Services data ---- */
  var SERVICES = [
    { icon: '⌨️', title: 'Typing Services', desc: 'Professional typing for all forms and applications.' },
    { icon: '🛂', title: 'Visa & Immigration', desc: 'Family visa, visit visa and immigration processing.' },
    { icon: '🆔', title: 'Emirates ID', desc: 'New, renewal and update of Emirates ID services.' },
    { icon: '📜', title: 'Certificate Attestation', desc: 'Educational & non-educational attestation, MOFA.' },
    { icon: '🌐', title: 'Translation Services', desc: 'Legal translation in 21 international languages.' },
    { icon: '🏢', title: 'Business Setup', desc: 'Company formation and trade licence assistance.' },
    { icon: '🚗', title: 'Driving Licence', desc: 'Driving licence application and related services.' },
    { icon: '🛡️', title: 'Health Insurance', desc: 'Daman and health insurance plan processing.' },
    { icon: '🚙', title: 'Vehicle Insurance', desc: 'Fast vehicle insurance issuance and renewal.' },
    { icon: '🅿️', title: 'Mawaqif & Permits', desc: 'Parking permits and related municipality services.' },
    { icon: '📲', title: 'UAE Pass', desc: 'UAE Pass registration and digital ID support.' },
    { icon: '🔖', title: 'Rubber Stamp', desc: 'Custom rubber stamps made quickly.' },
    { icon: '🚨', title: 'Civil Defense', desc: 'Civil defense applications and approvals.' },
    { icon: '🖨️', title: 'Photocopy Services', desc: 'Printing, scanning and photocopy services.' },
    { icon: '✉️', title: 'Letter Drafting', desc: 'Professional letters and document drafting.' },
    { icon: '🏛️', title: 'Court & Tasheel', desc: 'Abu Dhabi court services and Tasheel transactions.' }
  ];

  var grid = document.getElementById('servicesGrid');
  if (grid) {
    grid.innerHTML = SERVICES.map(function (s) {
      return '<article class="scard reveal">' +
        '<div class="scard__icon">' + s.icon + '</div>' +
        '<h4>' + s.title + '</h4>' +
        '<p>' + s.desc + '</p>' +
        '</article>';
    }).join('');
  }

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Scroll progress bar ---- */
  var bar = document.getElementById('progress');
  function updateBar() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateBar, { passive: true });
  window.addEventListener('resize', updateBar);
  updateBar();

  /* ---- Animated counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(eased * target);
      el.textContent = val.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { countObs.observe(c); });

  /* ---- FAQ: single-open accordion ---- */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) { if (other !== item) other.open = false; });
      }
    });
  });

  /* ---- Header shadow + back-to-top ---- */
  var header = document.getElementById('header');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var s = window.scrollY;
    if (header) header.classList.toggle('scrolled', s > 10);
    if (toTop) toTop.classList.toggle('show', s > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function closeNav() {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  }

  /* ---- Active link on scroll ---- */
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav__link');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        links.forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { spy.observe(s); });

  /* ---- Reveal on scroll ---- */
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* ---- Forms -> WhatsApp ---- */
  function toWhatsApp(text) {
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank');
  }

  var quick = document.getElementById('quickForm');
  if (quick) {
    quick.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!quick.checkValidity()) { quick.reportValidity(); return; }
      var f = quick;
      var msg = 'Hello Taiseer Typing,%0AName: ' + f.name.value +
        '%0APhone: ' + f.phone.value +
        '%0AService: ' + f.service.value;
      var note = document.getElementById('formNote');
      if (note) { note.hidden = false; setTimeout(function () { note.hidden = true; }, 4000); }
      toWhatsApp(decodeURIComponent(msg));
      quick.reset();
    });
  }

  var contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contact.checkValidity()) { contact.reportValidity(); return; }
      var f = contact;
      var msg = 'Hello Taiseer Typing,\nName: ' + f.name.value +
        '\nPhone: ' + f.phone.value +
        '\nService: ' + f.service.value +
        '\nMessage: ' + (f.message.value || '-');
      toWhatsApp(msg);
      contact.reset();
    });
  }
})();
