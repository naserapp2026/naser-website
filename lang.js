/*
  The language switch, for all three pages.

  Loaded synchronously in <head> so the attributes are set before the first
  paint: a page that renders in Arabic and then jumps to English reads as a
  fault. The click handler is delegated to the document, which is why it can
  be attached here, before the button it belongs to exists.

  Nothing here is required for the page to be readable. With JavaScript off,
  both languages are shown — plainer, and still complete.
*/

(function () {
  var STORE = 'naser-lang';

  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  function remembered() {
    try {
      var saved = localStorage.getItem(STORE);
      if (saved === 'ar' || saved === 'en') return saved;
    } catch (e) {
      // Private window, blocked storage: the preference just will not stick.
    }
    return null;
  }

  // Arabic is the default. English only if the visitor asked for it, here or
  // in their browser.
  var chosen = remembered();
  if (chosen === null) {
    chosen = (navigator.language || '').slice(0, 2) === 'en' ? 'en' : 'ar';
  }
  apply(chosen);

  document.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('#lang-toggle') : null;
    if (button === null) return;

    var next = document.documentElement.getAttribute('data-lang') === 'ar' ? 'en' : 'ar';
    apply(next);
    try {
      localStorage.setItem(STORE, next);
    } catch (e) {
      // The choice simply does not outlive the page.
    }
  });
})();
