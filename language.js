/**
 * LANGUAGE & INTERNATIONALIZATION (I18N) MANAGER
 * Supports Arabic (Default, RTL) and English (LTR)
 */

let currentLang = 'ar';

(function initLanguage() {
  const savedLang = localStorage.getItem('ag_lang');
  currentLang = (savedLang === 'en' || savedLang === 'ar') ? savedLang : 'ar';
  
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
})();

function setLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('ag_lang', lang);

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update static elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      let text = translations[lang][key];
      if (key === 'footer_rights') {
        text = text.replace('{year}', new Date().getFullYear());
      }
      el.textContent = text;
    }
  });

  // Update button labels with data-i18n-attr
  const attrElements = document.querySelectorAll('[data-i18n-placeholder]');
  attrElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update language toggle button text
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
  }

  // Trigger dynamic component refresh
  window.dispatchEvent(new CustomEvent('ag:languageChanged', { detail: { lang } }));
}

function setupLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle');
  if (!langBtn) return;

  langBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';

  langBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  });
}
