/* Mobile navigation drawer — progressive enhancement.
   Turns the existing header nav into a toggleable drawer below 820px. */
(function () {
  var header = document.querySelector('header');
  if (!header) return;
  var nav = header.querySelector('nav') || header.querySelector('.nav');
  if (!nav || header.querySelector('.nav-toggle')) return;

  nav.id = nav.id || 'site-nav';

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', nav.id);
  toggle.innerHTML = '<span class="nav-toggle-bars" aria-hidden="true"></span>';
  header.appendChild(toggle);

  function setHeaderHeight() {
    document.documentElement.style.setProperty(
      '--mobile-header-h', Math.round(header.getBoundingClientRect().height) + 'px'
    );
  }

  function close() {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  toggle.addEventListener('click', function () {
    var open = !document.body.classList.contains('nav-open');
    setHeaderHeight();
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', function () {
    setHeaderHeight();
    if (window.innerWidth > 820) close();
  });

  setHeaderHeight();
})();
