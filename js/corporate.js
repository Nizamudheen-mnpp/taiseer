/* =========================================================
   Taiseer Transactions Services — CORPORATE JS
   ========================================================= */
(function () {
  'use strict';

  var WHATSAPP = '971506102838';

  function svg(paths) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }
  var ICON = {
    keyboard: svg('<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>'),
    passport: svg('<path d="M4 3h13a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4Z"/><circle cx="11.5" cy="10" r="3"/><path d="M8.5 16h6"/>'),
    id:       svg('<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8.5" cy="10" r="2"/><path d="M13 9h5M13 13h5M5.5 15c.7-1.3 4.3-1.3 5 0"/>'),
    seal:     svg('<circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1 7.5 4.5-2.5 4.5 2.5-1-7.5"/><path d="m10 9 1.5 1.5L15 7"/>'),
    globe:    svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>'),
    building: svg('<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M17 21V9h2a2 2 0 0 1 2 2v10"/><path d="M8 7h2M8 11h2M8 15h2"/>'),
    car:      svg('<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0v4h2v-2m10 2h2v-4"/>'),
    shield:   svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>'),
    carShield:svg('<path d="M12 22s7-3.5 7-9V4l-7-2-7 2v9c0 5.5 7 9 7 9Z"/><path d="M8 12h8l-.8-2.4A1.5 1.5 0 0 0 13.8 8.5h-3.6a1.5 1.5 0 0 0-1.4 1.1Z"/>'),
    ticket:   svg('<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z"/><path d="M9 6v12" stroke-dasharray="2 2"/>'),
    phoneApp: svg('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/><path d="m9.5 9 1.7 1.7L15 7"/>'),
    stamp:    svg('<path d="M15 3a3 3 0 0 0-6 0c0 1 .5 2 1 3 .4.8.4 2-1 2H8a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3h-1c-1.4 0-1.4-1.2-1-2 .5-1 1-2 1-3Z"/><path d="M4 21h16M6 15v3M18 15v3"/>'),
    fire:     svg('<path d="M12 3s5 3.5 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 .5 1.5 1.5 2 1.5 2S8 8 12 3Z"/>'),
    printer:  svg('<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>'),
    letter:   svg('<path d="M4 4h16v16H4Z"/><path d="m4 6 8 6 8-6"/><path d="M8 16h4"/>'),
    court:    svg('<path d="M3 21h18M6 21V10M18 21V10M4 10h16L12 3Z"/><path d="M12 10v11"/>')
  };
  var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var SERVICES = [
    { icon: 'keyboard',  title: 'Typing Services',         desc: 'Professional typing for all forms and applications.' },
    { icon: 'passport',  title: 'Visa & Immigration',      desc: 'Family visa, visit visa and immigration processing.' },
    { icon: 'id',        title: 'Emirates ID',             desc: 'New, renewal and update of Emirates ID services.' },
    { icon: 'seal',      title: 'Certificate Attestation', desc: 'Educational & non-educational attestation, MOFA.' },
    { icon: 'globe',     title: 'Translation Services',    desc: 'Legal translation in 21 international languages.' },
    { icon: 'building',  title: 'Business Setup',          desc: 'Company formation and trade licence assistance.' },
    { icon: 'car',       title: 'Driving Licence',         desc: 'Driving licence application and related services.' },
    { icon: 'shield',    title: 'Health Insurance',        desc: 'Daman and health insurance plan processing.' },
    { icon: 'carShield', title: 'Vehicle Insurance',       desc: 'Fast vehicle insurance issuance and renewal.' },
    { icon: 'ticket',    title: 'Mawaqif & Permits',       desc: 'Parking permits and municipality services.' },
    { icon: 'phoneApp',  title: 'UAE Pass',                desc: 'UAE Pass registration and digital ID support.' },
    { icon: 'stamp',     title: 'Rubber Stamp',            desc: 'Custom rubber stamps made quickly.' },
    { icon: 'fire',      title: 'Civil Defense',           desc: 'Civil defense applications and approvals.' },
    { icon: 'printer',   title: 'Photocopy Services',      desc: 'Printing, scanning and photocopy services.' },
    { icon: 'letter',    title: 'Letter Drafting',         desc: 'Professional letters and document drafting.' },
    { icon: 'court',     title: 'Court & Tasheel',         desc: 'Abu Dhabi court services and Tasheel transactions.' }
  ];

  var grid = document.getElementById('servicesGrid');
  if (grid) {
    grid.innerHTML = SERVICES.map(function (s, i) {
      return '<article class="scard reveal" data-delay="' + (i % 4) + '">' +
        '<div class="scard__icon">' + (ICON[s.icon] || '') + '</div>' +
        '<h4>' + s.title + '</h4><p>' + s.desc + '</p>' +
        '<a class="scard__link" href="https://wa.me/' + WHATSAPP + '?text=' +
          encodeURIComponent('Hello Taiseer Typing, I need: ' + s.title) +
          '" target="_blank" rel="noopener">Enquire Now ' + arrow + '</a>' +
        '</article>';
    }).join('');
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Open / Closed now */
  (function () {
    var el = document.getElementById('openNow');
    if (!el) return;
    var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
    var open = (day === 5) ? (h >= 16 && h < 21) : (h >= 8 && h < 21);
    el.textContent = open ? 'Open now' : 'Closed';
    el.className = 'open-now ' + (open ? 'is-open' : 'is-closed');
  })();

  /* Progress bar */
  var bar = document.getElementById('progress');
  function updateBar() {
    if (!bar) return;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docH > 0 ? (window.scrollY / docH) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateBar, { passive: true });
  window.addEventListener('resize', updateBar);
  updateBar();

  /* Counters */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(function (c) { countObs.observe(c); });

  /* FAQ single-open */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) faqItems.forEach(function (o) { if (o !== item) o.open = false; });
    });
  });

  /* Header + back-to-top */
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

  /* Mobile nav */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('open'); toggle.classList.remove('open');
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

  /* Active link spy */
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav__link');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + id); });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { spy.observe(s); });

  /* Reveal */
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* Reviews slider */
  (function () {
    var track = document.getElementById('reviewsTrack');
    if (!track) return;
    var slides = track.children;
    var prev = document.getElementById('revPrev');
    var next = document.getElementById('revNext');
    var dotsWrap = document.getElementById('revDots');
    var index = 0, timer;
    function perView() { return window.innerWidth >= 720 ? 3 : 1; }
    function maxIndex() { return Math.max(0, slides.length - perView()); }
    function buildDots() {
      dotsWrap.innerHTML = '';
      for (var i = 0; i <= maxIndex(); i++) {
        (function (n) {
          var b = document.createElement('button');
          b.setAttribute('aria-label', 'Go to review group ' + (n + 1));
          b.addEventListener('click', function () { go(n); autoplay(); });
          dotsWrap.appendChild(b);
        })(i);
      }
    }
    function render() {
      track.style.transform = 'translateX(' + (-(index * (100 / perView()))) + '%)';
      Array.prototype.forEach.call(dotsWrap.children, function (d, i) { d.classList.toggle('active', i === index); });
    }
    function go(n) { index = Math.max(0, Math.min(n, maxIndex())); render(); }
    function nextS() { index = index >= maxIndex() ? 0 : index + 1; render(); }
    function prevS() { index = index <= 0 ? maxIndex() : index - 1; render(); }
    function autoplay() { stop(); timer = setInterval(nextS, 5000); }
    function stop() { if (timer) clearInterval(timer); }
    if (next) next.addEventListener('click', function () { nextS(); autoplay(); });
    if (prev) prev.addEventListener('click', function () { prevS(); autoplay(); });
    track.parentElement.addEventListener('pointerenter', stop);
    track.parentElement.addEventListener('pointerleave', autoplay);
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { index = Math.min(index, maxIndex()); buildDots(); render(); }, 150);
    });
    var startX = null;
    track.addEventListener('pointerdown', function (e) { startX = e.clientX; stop(); });
    window.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 45) { dx < 0 ? nextS() : prevS(); }
      startX = null; autoplay();
    });
    buildDots(); render(); autoplay();
  })();

  /* Contact form -> WhatsApp */
  function toWhatsApp(text) { window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank'); }
  var contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contact.checkValidity()) { contact.reportValidity(); return; }
      var msg = 'Hello Taiseer Typing,\nName: ' + contact.name.value + '\nPhone: ' + contact.phone.value +
        '\nService: ' + contact.service.value + '\nMessage: ' + (contact.message.value || '-');
      toWhatsApp(msg); contact.reset();
    });
  }
})();
