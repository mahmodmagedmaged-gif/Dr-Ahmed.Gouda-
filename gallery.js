/**
 * MEDICAL MEDIA GALLERY & ACCESSIBLE LIGHTBOX
 * Dr. Ahmed Gouda Nageh | Medical Portfolio
 */

let activeGalleryCategory = "all";

function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const filtered = activeGalleryCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeGalleryCategory);

  container.innerHTML = filtered.map(item => {
    const title = isAr ? item.titleAr : item.titleEn;
    const desc = isAr ? item.descAr : item.descEn;

    return `
      <div class="gallery-card" data-gallery-id="${item.id}" role="button" tabindex="0" aria-label="${title}">
        <img src="${item.image}" alt="${title}" class="gallery-card-img" loading="lazy" />
        <div class="gallery-card-overlay">
          <h4 class="gallery-card-title">${title}</h4>
          <span class="gallery-card-sub">${desc}</span>
        </div>
        <div class="gallery-card-zoom-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
    `;
  }).join('');

  // Add click & keyboard events to gallery items
  container.querySelectorAll('.gallery-card').forEach(card => {
    const id = card.getAttribute('data-gallery-id');
    const openItem = () => openLightbox(id);
    card.addEventListener('click', openItem);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openItem();
      }
    });
  });
}

function openLightbox(itemId) {
  const item = galleryData.find(g => g.id === itemId);
  if (!item) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? item.titleAr : item.titleEn;
  const desc = isAr ? item.descAr : item.descEn;

  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');

  if (modal && imgEl && titleEl && descEl) {
    imgEl.src = item.image;
    imgEl.alt = title;
    titleEl.textContent = title;
    descEl.textContent = desc;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function setupGalleryEvents() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Filter tabs
  const tabs = document.querySelectorAll('#gallery-filter-bar .filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeGalleryCategory = tab.getAttribute('data-category');
      renderGallery();
    });
  });
}

window.addEventListener('ag:languageChanged', () => {
  renderGallery();
});
