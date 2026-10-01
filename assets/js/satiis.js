(function () {
  'use strict';

  var body = document.body;
  var header = document.getElementById('siteHeader');
  var toTop = document.getElementById('toTop');

  // Header shadow & back-to-top
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Mobile navigation
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Wrap tables inside article content so they scroll horizontally on small screens
  document.querySelectorAll('.prose table').forEach(function (t) {
    if (t.parentElement && t.parentElement.classList.contains('table-wrap')) return;
    var w = document.createElement('div');
    w.className = 'table-wrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Copy-to-clipboard buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        var old = btn.textContent;
        btn.textContent = '복사됨';
        setTimeout(function () { btn.textContent = old; }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done);
    });
  });

  // Notice board: category filter + search
  var board = document.getElementById('noticeBoard');
  if (board) {
    var rows = Array.prototype.slice.call(board.querySelectorAll('tbody tr[data-cat]'));
    var chips = document.querySelectorAll('.board-filters .chip');
    var input = document.getElementById('noticeSearch');
    var countEl = document.getElementById('noticeCount');
    var empty = document.getElementById('noticeEmpty');
    var current = '전체';

    var apply = function () {
      var q = (input && input.value || '').trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r) {
        var okCat = current === '전체' || r.getAttribute('data-cat') === current;
        var okQ = !q || r.textContent.toLowerCase().indexOf(q) !== -1;
        var show = okCat && okQ;
        r.hidden = !show;
        if (show) shown++;
      });
      if (countEl) countEl.textContent = shown;
      if (empty) empty.hidden = shown !== 0;
    };

    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('is-active'); x.setAttribute('aria-pressed', 'false'); });
        c.classList.add('is-active');
        c.setAttribute('aria-pressed', 'true');
        current = c.getAttribute('data-filter');
        apply();
      });
    });
    if (input) input.addEventListener('input', apply);
  }

  // Admin-only write button (display only — saving is restricted by GitHub repo permissions)
  var admin = document.getElementById('adminActions');
  if (admin) {
    var flag = null;
    try {
      var m = /[?&]admin=([01])/.exec(location.search);
      if (m) { if (m[1] === '1') localStorage.setItem('satiis-admin', '1'); else localStorage.removeItem('satiis-admin'); }
      flag = localStorage.getItem('satiis-admin');
    } catch (e) {}
    if (flag === '1') admin.hidden = false;
  }

  // Bylaws table of contents: highlight current chapter
  var toc = document.querySelector('.bylaw-toc');
  if (toc && 'IntersectionObserver' in window) {
    var links = toc.querySelectorAll('a[href^="#"]');
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.classList.remove('is-current'); });
          map[e.target.id].classList.add('is-current');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.chapter[id]').forEach(function (c) { obs.observe(c); });
  }
})();
