/**
 * MAIN CONTROLLER
 * Dr. Ahmed Gouda Nageh | Medical Portfolio Website
 */

let activeEduCategory = "all";
let currentPhotoState = "suit"; // 'suit' or 'scrubs'

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize System Components
  setupThemeToggle();
  setupLanguageToggle();
  setupMobileNav();
  setupHeaderScroll();
  setupBackToTop();
  setupPhotoSwitcher();

  // 2. Render Dynamic Data Components
  renderSpecialties();
  renderEducationArticles();
  renderGallery();
  renderClinics();

  // 3. Setup Modal Handlers & Forms
  setupSpecialtyModal();
  setupArticleModal();
  setupGalleryEvents();
  setupBookingAssistantForm();

  // 4. Initial Language sync
  setLanguage(currentLang);
});

/* --------------------------------------------------------------------------
   SPECIALTIES RENDERING & MODAL
   -------------------------------------------------------------------------- */
function renderSpecialties() {
  const container = document.getElementById('specialties-container');
  if (!container) return;

  const isAr = currentLang === 'ar';

  container.innerHTML = specialtiesData.map(spec => {
    const title = isAr ? spec.titleAr : spec.titleEn;
    const desc = isAr ? spec.descAr : spec.descEn;
    const procedures = isAr ? spec.proceduresAr : spec.proceduresEn;
    const learnMoreLabel = isAr ? "اعرف المزيد" : "Learn More";

    return `
      <div class="card specialty-card" id="spec-${spec.id}">
        <div>
          <div class="specialty-card-header">
            <div class="specialty-icon-box">
              ${spec.icon}
            </div>
            <h3 class="specialty-title">${title}</h3>
            <p class="specialty-desc">${desc}</p>
          </div>
          <ul class="specialty-procedures-list">
            ${procedures.slice(0, 3).map(p => `
              <li class="specialty-procedure-item">
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="specialty-card-footer">
          <button type="button" class="btn btn-outline-gold btn-sm" onclick="openSpecialtyModal('${spec.id}')">
            <span>${learnMoreLabel}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openSpecialtyModal(id) {
  const spec = specialtiesData.find(s => s.id === id);
  if (!spec) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? spec.titleAr : spec.titleEn;
  const details = isAr ? spec.modalDetailsAr : spec.modalDetailsEn;
  const procedures = isAr ? spec.proceduresAr : spec.proceduresEn;
  const procTitle = isAr ? "أبرز الإجراءات التخصصية:" : "Key Specialized Procedures:";

  const modal = document.getElementById('specialty-modal');
  const titleEl = document.getElementById('specialty-modal-title');
  const bodyEl = document.getElementById('specialty-modal-body');

  if (modal && titleEl && bodyEl) {
    titleEl.textContent = title;
    bodyEl.innerHTML = `
      ${details}
      <h5 style="margin-top: 1.5rem; color: var(--color-gold-500);">${procTitle}</h5>
      <ul style="padding-${isAr ? 'right' : 'left'}: 1.25rem; line-height: 2;">
        ${procedures.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div class="medical-disclaimer-box" style="margin-top: 2rem;">
        <div class="medical-disclaimer-icon">ℹ️</div>
        <p class="medical-disclaimer-text">
          ${isAr 
            ? "تحديد الإجراء المناسب يتطلب الكشف السريري الشامل من قِبل الطبيب لتقييم الحالة الفردية والخيارات الجراحية الملائمة."
            : "Selecting the ideal clinical procedure requires an in-person surgical assessment to review individualized risks and therapeutic benefits."
          }
        </p>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSpecialtyModal() {
  const modal = document.getElementById('specialty-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function setupSpecialtyModal() {
  const modal = document.getElementById('specialty-modal');
  const closeBtn = document.getElementById('specialty-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeSpecialtyModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSpecialtyModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeSpecialtyModal();
    }
  });
}

/* --------------------------------------------------------------------------
   MEDICAL EDUCATION ARTICLES & MODAL
   -------------------------------------------------------------------------- */
function renderEducationArticles() {
  const container = document.getElementById('articles-container');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const filtered = activeEduCategory === 'all' 
    ? articlesData 
    : articlesData.filter(a => a.category === activeEduCategory);

  container.innerHTML = filtered.map(art => {
    const title = isAr ? art.titleAr : art.titleEn;
    const summary = isAr ? art.summaryAr : art.summaryEn;
    const categoryLabel = isAr ? art.categoryLabelAr : art.categoryLabelEn;
    const readTime = isAr ? art.readTimeAr : art.readTimeEn;
    const readBtnLabel = isAr ? "اقرأ المقال" : "Read Article";

    return `
      <div class="article-card" id="art-${art.id}">
        <div class="article-thumb-wrap">
          <img src="${art.image}" alt="${title}" class="article-thumb" loading="lazy" />
          <span class="article-category-badge">${categoryLabel}</span>
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span>${art.date}</span>
            <span>•</span>
            <span>${readTime}</span>
          </div>
          <h3 class="article-title">${title}</h3>
          <p class="article-summary">${summary}</p>
          <div class="article-card-footer">
            <button type="button" class="btn btn-teal btn-sm" onclick="openArticleModal('${art.id}')">
              <span>${readBtnLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openArticleModal(id) {
  const art = articlesData.find(a => a.id === id);
  if (!art) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? art.titleAr : art.titleEn;
  const demoHeading = isAr ? "ما يوضحه الرسم والبيان الطبي:" : "What This Medical Diagram Demonstrates:";
  const demoContent = isAr ? art.demonstrationAr : art.demonstrationEn;
  const sigHeading = isAr ? "أهمية هذا الموضوع للمريض:" : "Why This Matters to Patients:";
  const sigContent = isAr ? art.significanceAr : art.significanceEn;
  const safeHeading = isAr ? "إرشادات الأمان والسلامة الطبية:" : "Patient Safety & Precautions:";
  const safeContent = isAr ? art.safetyNoteAr : art.safetyNoteEn;
  const fullContent = isAr ? art.fullContentAr : art.fullContentEn;
  const reviewedBy = isAr 
    ? "مراجعة واعتماد: د. أحمد جودة ناجح (أخصائي الجراحة العامة والزمالة البريطانية)"
    : "Reviewed & Approved by: Dr. Ahmed Gouda Nageh (Specialist in General Surgery, MRCS)";

  const modal = document.getElementById('article-modal');
  const titleEl = document.getElementById('article-modal-title');
  const bodyEl = document.getElementById('article-modal-body');

  if (modal && titleEl && bodyEl) {
    titleEl.textContent = title;
    bodyEl.innerHTML = `
      <div style="margin-bottom: 2rem; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-card); background: #07182B;">
        <img src="${art.image}" alt="${title}" style="width: 100%; max-height: 380px; object-fit: contain; display: block;" />
      </div>

      <div style="background: rgba(16, 191, 193, 0.08); border-right: 4px solid var(--color-teal-500); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
        <h5 style="color: var(--color-teal-500); margin-bottom: 0.5rem; font-weight: 700;">${demoHeading}</h5>
        <p style="margin: 0; font-size: 0.95rem;">${demoContent}</p>
      </div>

      <div style="margin-bottom: 2rem;">
        ${fullContent}
      </div>

      <div style="background: rgba(230, 184, 79, 0.08); border-right: 4px solid var(--color-gold-500); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
        <h5 style="color: var(--color-gold-500); margin-bottom: 0.5rem; font-weight: 700;">${sigHeading}</h5>
        <p style="margin: 0; font-size: 0.95rem;">${sigContent}</p>
      </div>

      <div style="background: rgba(239, 68, 68, 0.08); border-right: 4px solid #EF4444; padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
        <h5 style="color: #EF4444; margin-bottom: 0.5rem; font-weight: 700;">${safeHeading}</h5>
        <p style="margin: 0; font-size: 0.95rem;">${safeContent}</p>
      </div>

      <div style="padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.85rem; color: var(--text-muted); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <span>${reviewedBy}</span>
        <span>${art.date}</span>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('article-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeArticleModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeArticleModal();
    }
  });

  // Filter tabs
  const tabs = document.querySelectorAll('#edu-filter-bar .filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeEduCategory = tab.getAttribute('data-category');
      renderEducationArticles();
    });
  });
}

/* --------------------------------------------------------------------------
   DOCTOR PORTRAIT PHOTO SWITCHER
   -------------------------------------------------------------------------- */
function setupPhotoSwitcher() {
  const switchBtn = document.getElementById('hero-photo-switch-btn');
  const doctorImg = document.getElementById('hero-doctor-img');
  const badgeTitle = document.getElementById('hero-badge-title');

  if (!switchBtn || !doctorImg || !badgeTitle) return;

  switchBtn.addEventListener('click', () => {
    const isAr = currentLang === 'ar';
    if (currentPhotoState === 'suit') {
      currentPhotoState = 'scrubs';
      doctorImg.src = './assets/images/doctor-scrubs-placeholder.svg';
      badgeTitle.textContent = isAr ? 'الصورة بالزي الجراحي الرسمي' : 'Official Surgical Scrubs';
      switchBtn.textContent = isAr ? 'عرض البدلة الرسمية' : 'Show Formal Suit';
    } else {
      currentPhotoState = 'suit';
      doctorImg.src = './assets/images/doctor-suit.png';
      badgeTitle.textContent = isAr ? 'الصورة بالزي الرسمي' : 'Formal Suit Portrait';
      switchBtn.textContent = isAr ? 'عرض الزي الجراحي' : 'Show Scrubs';
    }
  });
}

/* --------------------------------------------------------------------------
   NAVIGATION, SCROLL SPY & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function setupMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

function setupHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Global listener for language switch
window.addEventListener('ag:languageChanged', () => {
  renderSpecialties();
  renderEducationArticles();
});
