/**
 * CLINIC LOCATIONS & WHATSAPP BOOKING ASSISTANT
 * Dr. Ahmed Gouda Nageh | Medical Portfolio
 * Official Phone: 01016539193 | International: +201016539193
 */

const CLINIC_PHONE = "01016539193";
const CLINIC_PHONE_INTL = "+201016539193";
const WHATSAPP_BASE = "https://wa.me/201016539193";

const clinicsData = [
  {
    id: "baramoun",
    nameAr: "البرامون",
    nameEn: "El-Baramoun",
    addressAr: "مجمع عباد الرحمن الطبي",
    addressEn: "Ebad El-Rahman Medical Complex",
    statusBadgeAr: "متاح للحجز والاستفسار",
    statusBadgeEn: "Open for Inquiries"
  },
  {
    id: "danabiq",
    nameAr: "الدنابيق",
    nameEn: "El-Danabiq",
    addressAr: "المجمع الطبي",
    addressEn: "The Medical Complex",
    statusBadgeAr: "متاح للحجز والاستفسار",
    statusBadgeEn: "Open for Inquiries"
  },
  {
    id: "kheyareya",
    nameAr: "الخيارية",
    nameEn: "El-Kheyareya",
    addressAr: "أمام المسجد القديم",
    addressEn: "In Front of the Old Mosque",
    statusBadgeAr: "متاح للحجز والاستفسار",
    statusBadgeEn: "Open for Inquiries"
  },
  {
    id: "dimeshalt",
    nameAr: "ديمشلت",
    nameEn: "Dimeshalt",
    addressAr: "برج التداوي",
    addressEn: "El-Tadawi Tower",
    statusBadgeAr: "متاح للحجز والاستفسار",
    statusBadgeEn: "Open for Inquiries"
  },
  {
    id: "meet-mezah",
    nameAr: "ميت مزاح",
    nameEn: "Meet Mezah",
    addressAr: "بجوار الوحدة الصحية",
    addressEn: "Next to the Health Unit",
    statusBadgeAr: "متاح للحجز والاستفسار",
    statusBadgeEn: "Open for Inquiries"
  }
];

function renderClinics() {
  const container = document.getElementById('clinics-container');
  if (!container) return;

  const isAr = currentLang === 'ar';
  
  container.innerHTML = clinicsData.map(clinic => {
    const name = isAr ? clinic.nameAr : clinic.nameEn;
    const address = isAr ? clinic.addressAr : clinic.addressEn;
    const status = isAr ? clinic.statusBadgeAr : clinic.statusBadgeEn;
    const bookLabel = isAr ? "حجز عبر واتساب" : "WhatsApp Inquiry";
    const callLabel = isAr ? "اتصال" : "Call";
    const scheduleLabel = isAr ? "تأكيد المواعيد عبر واتساب" : "Hours confirmed via WhatsApp";

    const defaultMsg = isAr 
      ? `السلام عليكم، أرغب في الاستفسار عن مواعيد الحجز مع د. أحمد جودة ناجح في فرع (${name} — ${address}). شكرًا لكم.`
      : `Hello, I would like to inquire about appointment scheduling with Dr. Ahmed Gouda Nageh at (${name} branch — ${address}). Thank you.`;

    const waLink = `${WHATSAPP_BASE}?text=${encodeURIComponent(defaultMsg)}`;

    return `
      <div class="clinic-card" id="clinic-${clinic.id}">
        <div>
          <div class="clinic-card-header">
            <div class="clinic-pin-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span class="clinic-badge">${status}</span>
          </div>

          <h3 class="clinic-name">${name}</h3>
          <div class="clinic-address">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${address}</span>
          </div>

          <ul class="clinic-info-list">
            <li class="clinic-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>${CLINIC_PHONE}</span>
            </li>
            <li class="clinic-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span class="text-muted">${scheduleLabel}</span>
            </li>
          </ul>
        </div>

        <div class="clinic-actions">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.777.98-.953 1.18c-.175.2-.351.226-.652.076s-1.27-.468-2.42-1.493c-.895-.798-1.5-1.785-1.676-2.086s-.019-.464.132-.613c.135-.134.301-.35.452-.525s.2-.301.301-.502c.101-.2.05-.376-.025-.526s-.678-1.633-.929-2.238c-.244-.589-.493-.509-.678-.519-.175-.01-.376-.01-.577-.01s-.527.075-.802.375c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.229 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.12.58-.087 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.351z"/>
            </svg>
            <span>${bookLabel}</span>
          </a>
          <a href="tel:${CLINIC_PHONE_INTL}" class="btn btn-secondary btn-sm" aria-label="${callLabel}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>${callLabel}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function setupBookingAssistantForm() {
  const form = document.getElementById('booking-assistant-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const clinicSelect = document.getElementById('booking-clinic-select');
    const serviceSelect = document.getElementById('booking-service-select');
    const patientName = document.getElementById('booking-patient-name');
    const notesInput = document.getElementById('booking-notes');

    const isAr = currentLang === 'ar';
    const clinicVal = clinicSelect ? clinicSelect.value : "";
    const serviceVal = serviceSelect ? serviceSelect.value : "";
    const nameVal = patientName ? patientName.value.trim() : "";
    const notesVal = notesInput ? notesInput.value.trim() : "";

    let message = "";
    if (isAr) {
      message = `السلام عليكم ورحمة الله،\nأرغب في الاستفسار عن مواعيد الحجز مع د. أحمد جودة ناجح.\n`;
      if (clinicVal) message += `• الفرع المطلوب: ${clinicVal}\n`;
      if (serviceVal) message += `• نوع الاستشارة: ${serviceVal}\n`;
      if (nameVal) message += `• اسم المريض: ${nameVal}\n`;
      if (notesVal) message += `• ملاحظات: ${notesVal}\n`;
      message += `شكرًا جزيلاً لكم.`;
    } else {
      message = `Hello,\nI would like to inquire about booking an appointment with Dr. Ahmed Gouda Nageh.\n`;
      if (clinicVal) message += `• Clinic Branch: ${clinicVal}\n`;
      if (serviceVal) message += `• Consultation: ${serviceVal}\n`;
      if (nameVal) message += `• Patient Name: ${nameVal}\n`;
      if (notesVal) message += `• Notes: ${notesVal}\n`;
      message += `Thank you very much.`;
    }

    const targetUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
}

window.addEventListener('ag:languageChanged', () => {
  renderClinics();
});
