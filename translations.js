/**
 * BILINGUAL TRANSLATION DICTIONARY
 * Arabic (Default - RTL) & English (LTR)
 * Dr. Ahmed Gouda Nageh | Medical Portfolio
 */

const translations = {
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "عن الدكتور",
    nav_specialties: "التخصصات",
    nav_education: "التوعية الطبية",
    nav_gallery: "المعرض التوعوي",
    nav_clinics: "أماكن العيادات",
    nav_contact: "تواصل معنا",
    cta_book_whatsapp: "احجز موعدك عبر واتساب",
    lang_toggle_btn: "English",

    // Doctor details & Titles
    dr_name: "د. أحمد جودة ناجح",
    dr_title: "أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج",
    dr_fellowship: "الزمالة البريطانية للجراحة العامة",
    dr_fellowship_desc: "عضوية الكلية الملكية للجراحين بالمملكة المتحدة (MRCS)",
    dr_verified_badge: "بيانات مهنية معتمدة",

    // Hero Section
    hero_tag: "رعاية جراحية متقدمة وفق المعايير العالمية",
    hero_bio: "نكرس خبرتنا الطبية لتقديم أعلى مستويات الأمان والدقة في الجراحة العامة وجراحات المناظير المتقدمة، مع الالتزام الكامل بالتثقيف الطبي وإشراك المريض في كل خطوة علاجية.",
    hero_cta_primary: "احجز موعدك عبر واتساب",
    hero_cta_secondary: "تعرف على التخصصات",
    hero_stat_fellowship: "الزمالة البريطانية",
    hero_stat_fellowship_sub: "للجراحة العامة (MRCS)",
    hero_stat_clinics: "5 فروع للعيادة",
    hero_stat_clinics_sub: "لتسهيل الوصول للمرضى",
    hero_stat_safety: "أعلى معايير الأمان",
    hero_stat_safety_sub: "مناظير وتدخلات طفيفة التوغل",
    hero_badge_photo_suit: "الصورة بالزي الرسمي",
    hero_badge_photo_scrubs: "الصورة بالزي الجراحي",
    hero_photo_switch: "تبديل الصورة",

    // About Section
    about_tag: "السيرة المهنية والمؤهلات",
    about_title: "نهج طبي مبني على الدقة والأمان ورعاية المريض",
    about_p1: "يقدم د. أحمد جودة ناجح، أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج، رعاية جراحية متكاملة ترتكز على أحدث ما توصل إليه الطب الحديث في مجال التدخلات الجراحية طفيفة التوغل ومناظير البطن المتقدمة.",
    about_p2: "حاصل على الزمالة البريطانية للجراحة العامة، ويعتمد في ممارسته السريرية على بروتوكولات جراحية دقيقة تضمن تقليل الألم بعد الجراحة، وتقليص فترة الإقامة بالمستشفى، وتحقيق أسرع وأفضل استشفاء ممكن بإذن الله.",
    about_feat_1_title: "الزمالة البريطانية المعتمدة",
    about_feat_1_desc: "تأهيل جراحي عالمي وفق المعايير الإكلينيكية البريطانية الصارمة.",
    about_feat_2_title: "جراحات المناظير الدقيقة",
    about_feat_2_desc: "أحدث تقنيات المناظير لتقليل الألم وتسريع عودة المريض لحياته الطبيعية.",
    about_feat_3_title: "تثقيف المريض أولاً",
    about_feat_3_desc: "شرح وافٍ للحالة والخيارات المتاحة والإجابة الدقيقة على كل الاستفسارات.",
    about_feat_4_title: "متابعة مستمرة بعد الجراحة",
    about_feat_4_desc: "بروتوكول متابعة دوري صارم لضمان التئام الجروح والتعافي الأمثل.",
    about_verification_note: "تنويه مهني: يتم عرض كافة المؤهلات والخبرات السريرية بناءً على البيانات الرسمية المعتمدة فقط وفق القواعد المنظمة للإعلان الطبي.",

    // Specialties Section
    specialties_tag: "مجالات الاختصاص السريري",
    specialties_title: "تخصصات جراحية دقيقة ومتكاملة",
    specialties_subtitle: "نقدم استشارات وتدخلات جراحية متطورة باستخدام أحدث تقنيات المناظير لضمان أفضل النتائج العلاجية.",
    btn_learn_more: "اعرف المزيد",
    modal_procedures_title: "الإجراءات والتدخلات المعتمدة:",
    modal_indications_title: "دواعي التقييم والاستشارة:",
    modal_recovery_title: "معايير التعافي والمتابعة:",

    // Education Library Section
    edu_tag: "مكتبة التوعية الطبية المعتمدة",
    edu_title: "معرفة طبية دقيقة لتمكين المريض من القرار السليم",
    edu_subtitle: "مقالات وإرشادات ورسوم توضيحية تسلط الضوء على الاستعداد للجراحة والتعافي الآمن وأسس جراحات السمنة والمناظير.",
    filter_all: "كافة الموضوعات",
    filter_bariatric: "جراحات السمنة",
    filter_laparoscopy: "جراحات المناظير",
    filter_general: "الجراحة العامة",
    filter_colorectal: "أمراض الشرج والمستقيم",
    filter_care: "الاستعداد والرعاية",
    btn_read_article: "اقرأ المقال كاملاً",
    article_demonstration_heading: "ما يوضحه الرسم والبيان الطبي:",
    article_significance_heading: "أهمية هذا الموضوع للمريض:",
    article_safety_heading: "إرشادات الأمان والسلامة الطبية:",
    article_disclaimer_note: "ملاحظة: هذا المحتوى الطبي لغايات التوعية والتثقيف الصحي العام، ولا يُعد بديلاً عن الكشف الطبي والتشخيص السريري الفردي لدى الطبيب المعالج.",
    article_reviewed_by: "مراجعة واعتماد:",

    // Gallery Section
    gallery_tag: "المعرض التوضيحي والتجهيزات",
    gallery_title: "تجهيزات حديثة وأعلى معايير التعقيم السريري",
    gallery_subtitle: "نظرة على غرف الفحص، تجهيزات المناظير الجراحية 4K، وأنظمة المراقبة الدقيقة لسلامة المرضى.",

    // Clinics Section
    clinics_tag: "فروع ومواقع العيادات",
    clinics_title: "خمسة مواقع لخدمتكم واستقبالكم",
    clinics_subtitle: "تتواجد عيادات د. أحمد جودة ناجح في خمسة مراكز رئيسية لتسهيل وصول المراجعين. يتم الحجز والاستفسار عن المواعيد عبر واتساب.",
    clinic_available_badge: "متاح للحجز عبر واتساب",
    clinic_consultation_action: "حجز موعد في هذه العيادة",
    clinic_call_action: "اتصال هاتفي مباشر",
    clinic_schedule_note: "ملاحظة: يتم تأكيد مواعيد وأيام الاستقبال لكل فرع عند التواصل المباشر مع العيادة.",
    clinic_location_1: "البرامون — مجمع عباد الرحمن الطبي",
    clinic_location_2: "الدنابيق — المجمع الطبي",
    clinic_location_3: "الخيارية — أمام المسجد القديم",
    clinic_location_4: "ديمشلت — برج التداوي",
    clinic_location_5: "ميت مزاح — بجوار الوحدة الصحية",

    // Booking & Contact Section
    booking_tag: "حجز موعد واستفسار طبي",
    booking_title: "تواصل مباشر مع عيادة د. أحمد جودة ناجح",
    booking_subtitle: "اضغط لحجز موعدك أو استخدام المساعد التفاعلي لتجهيز رسالتك مسبقاً وتأكيد تفاصيل زيارتك.",
    booking_helper_title: "المساعد التفاعلي للحجز عبر واتساب",
    booking_form_clinic_label: "اختر فرع العيادة الأقرب إليك:",
    booking_form_service_label: "نوع الاستشارة أو الإجراء الجراحي:",
    booking_form_patient_label: "اسم المريض (اختياري):",
    booking_form_notes_label: "ملاحظات أو استفسار محدد (اختياري):",
    btn_send_whatsapp: "إرسال الرسالة إلى واتساب العيادة",
    booking_notice: "تنبيه: إرسال الرسالة عبر واتساب يُعد طلباً واستفساراً عن الموعد ولا يمثل تأكيداً نهائياً للحجز حتى يتم الرد من قِبل إدارة العيادة.",
    emergency_strip: "تنبيه طبي عاجل: في الحالات الإسعافية الطارئة أو الأعراض الحادة المفاجئة، يُرجى التوجه فوراً لأقرب قسم طوارئ في المستشفى وعدم الانتظار عبر وسائل التواصل الاجتماعي.",

    // Official Channels & Disclaimers
    contact_phone_label: "هاتف الحجز والاستفسار:",
    contact_fb_label: "الصفحة الرسمية المعتمدة على فيسبوك:",
    contact_fb_btn: "زيارة صفحة فيسبوك الرسمية",
    footer_quick_links: "روابط سريعة",
    footer_specialties_title: "التخصصات الجراحية",
    footer_clinics_title: "الفروع والمواقع",
    footer_disclaimer_title: "إخلاء مسؤولية طبية وقانونية",
    footer_disclaimer_p: "المحتوى المنشور على هذا الموقع مخصص لأغراض التوعية والتثقيف الصحي العام فقط. لا تُعد أي معلومات على هذا الموقع بديلاً عن الاستشارة الطبية المتخصصة أو الفحص الإكلينيكي المباشر. لا يتم تقديم تشخيص أو وصفات علاجية أو إقرار عمليات جراحية دون الكشف السريري الشامل.",
    footer_rights: "جميع الحقوق محفوظة © {year} — د. أحمد جودة ناجح. صُمم وطُوّر وفق أعلى المعايير الطبية الدولية.",
    back_to_top: "إلى الأعلى"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Doctor",
    nav_specialties: "Specialties",
    nav_education: "Medical Education",
    nav_gallery: "Media Gallery",
    nav_clinics: "Clinic Locations",
    nav_contact: "Contact Us",
    cta_book_whatsapp: "Book via WhatsApp",
    lang_toggle_btn: "العربية",

    // Doctor details & Titles
    dr_name: "Dr. Ahmed Gouda Nageh",
    dr_title: "Specialist in General Surgery, Laparoscopy, Bariatric & Colorectal Surgery",
    dr_fellowship: "British Fellowship in General Surgery (MRCS)",
    dr_fellowship_desc: "Member of the Royal College of Surgeons, United Kingdom",
    dr_verified_badge: "Verified Medical Credentials",

    // Hero Section
    hero_tag: "Advanced Surgical Care According to Global Standards",
    hero_bio: "Dedicated to providing the highest standards of safety and precision in general surgery and advanced laparoscopy, with an unwavering commitment to patient education and collaborative healthcare decisions.",
    hero_cta_primary: "Book via WhatsApp",
    hero_cta_secondary: "Explore Specialties",
    hero_stat_fellowship: "British Fellowship",
    hero_stat_fellowship_sub: "General Surgery (MRCS)",
    hero_stat_clinics: "5 Clinic Locations",
    hero_stat_clinics_sub: "Convenient Patient Access",
    hero_stat_safety: "Highest Safety Standards",
    hero_stat_safety_sub: "Minimally Invasive Techniques",
    hero_badge_photo_suit: "Formal Suit Portrait",
    hero_badge_photo_scrubs: "Surgical Scrubs Portrait",
    hero_photo_switch: "Switch Photo",

    // About Section
    about_tag: "Professional Profile & Qualifications",
    about_title: "A Surgical Approach Founded on Precision, Safety & Patient Care",
    about_p1: "Dr. Ahmed Gouda Nageh, Specialist in General Surgery, Laparoscopy, Bariatric, and Colorectal Surgery, delivers comprehensive surgical care centered on modern minimally invasive and laparoscopic techniques.",
    about_p2: "Holding the British Fellowship in General Surgery (MRCS), his clinical practice follows rigorous evidence-based surgical protocols designed to minimize post-operative pain, shorten hospital stay, and achieve optimal recovery outcomes.",
    about_feat_1_title: "Verified British Fellowship",
    about_feat_1_desc: "International surgical credentialing adhering to rigorous clinical benchmarks.",
    about_feat_2_title: "Precision Laparoscopy",
    about_feat_2_desc: "State-of-the-art keyhole surgery ensuring less trauma and faster convalescence.",
    about_feat_3_title: "Patient Education First",
    about_feat_3_desc: "Thorough explanation of conditions, surgical alternatives, and transparent counseling.",
    about_feat_4_title: "Structured Post-Op Care",
    about_feat_4_desc: "Strict post-surgical follow-up protocols guaranteeing optimal wound healing.",
    about_verification_note: "Professional Notice: All medical credentials and qualifications are presented strictly based on verified official documentation in adherence with medical ethics and regulations.",

    // Specialties Section
    specialties_tag: "Clinical Disciplines",
    specialties_title: "Specialized & Integrated Surgical Services",
    specialties_subtitle: "Offering advanced consultations and operative interventions utilizing cutting-edge laparoscopic tools for premier clinical outcomes.",
    btn_learn_more: "Learn More",
    modal_procedures_title: "Confirmed Surgical Procedures:",
    modal_indications_title: "Clinical Indications for Consultation:",
    modal_recovery_title: "Recovery & Follow-up Protocols:",

    // Education Library Section
    edu_tag: "Medical Education Library",
    edu_title: "Accurate Medical Knowledge for Informed Patient Decisions",
    edu_subtitle: "Educational articles, clinical infographics, and guidance on surgical preparation, bariatric science, and recovery.",
    filter_all: "All Topics",
    filter_bariatric: "Bariatric Surgery",
    filter_laparoscopy: "Laparoscopic Surgery",
    filter_general: "General Surgery",
    filter_colorectal: "Colorectal & Proctology",
    filter_care: "Prep & Post-Op Care",
    btn_read_article: "Read Full Article",
    article_demonstration_heading: "What This Medical Diagram Demonstrates:",
    article_significance_heading: "Why This Matters to Patients:",
    article_safety_heading: "Patient Safety & Precautions:",
    article_disclaimer_note: "Notice: This educational material is for general public awareness and does not replace individualized clinical evaluation by a qualified medical professional.",
    article_reviewed_by: "Reviewed & Approved by:",

    // Gallery Section
    gallery_tag: "Clinical Facilities & Equipment",
    gallery_title: "Modern Clinical Infrastructure & Sterile Standards",
    gallery_subtitle: "An overview of our examination suites, 4K laparoscopic imaging towers, and patient monitoring workstations.",

    // Clinics Section
    clinics_tag: "Our Clinic Locations",
    clinics_title: "Five Convenient Locations to Serve You",
    clinics_subtitle: "Dr. Ahmed Gouda Nageh's clinics are located across five key centers to facilitate patient access. Inquiries and bookings are handled directly via WhatsApp.",
    clinic_available_badge: "Open for WhatsApp Booking",
    clinic_consultation_action: "Book at This Clinic",
    clinic_call_action: "Direct Phone Call",
    clinic_schedule_note: "Notice: Specific appointment days and clinic hours for each branch are confirmed upon direct WhatsApp inquiry.",
    clinic_location_1: "El-Baramoun — Ebad El-Rahman Medical Complex",
    clinic_location_2: "El-Danabiq — The Medical Complex",
    clinic_location_3: "El-Kheyareya — In Front of the Old Mosque",
    clinic_location_4: "Dimeshalt — El-Tadawi Tower",
    clinic_location_5: "Meet Mezah — Next to the Health Unit",

    // Booking & Contact Section
    booking_tag: "Appointment & Inquiries",
    booking_title: "Direct Contact with Dr. Ahmed Gouda's Clinic",
    booking_subtitle: "Click below to contact via WhatsApp or use our interactive assistant to prepare your booking inquiry message.",
    booking_helper_title: "Interactive WhatsApp Booking Assistant",
    booking_form_clinic_label: "Select Closest Clinic Branch:",
    booking_form_service_label: "Consultation or Procedure Type:",
    booking_form_patient_label: "Patient Name (Optional):",
    booking_form_notes_label: "Specific Questions or Symptoms (Optional):",
    btn_send_whatsapp: "Send Message to Clinic WhatsApp",
    booking_notice: "Notice: Sending a WhatsApp message represents an appointment inquiry and is not an automatic booking confirmation until confirmed by clinic management.",
    emergency_strip: "Urgent Medical Alert: For emergency symptoms or acute conditions, please proceed immediately to the nearest hospital emergency department rather than awaiting social media replies.",

    // Official Channels & Disclaimers
    contact_phone_label: "Inquiry & Call Line:",
    contact_fb_label: "Official Verified Facebook Page:",
    contact_fb_btn: "Visit Official Facebook Page",
    footer_quick_links: "Quick Links",
    footer_specialties_title: "Surgical Specialties",
    footer_clinics_title: "Clinic Locations",
    footer_disclaimer_title: "Medical & Legal Disclaimer",
    footer_disclaimer_p: "The information on this website is intended solely for general health education and patient awareness. It does not constitute medical advice, diagnosis, or a treatment plan. An individual in-person consultation with a qualified surgeon is essential before undergoing any procedure.",
    footer_rights: "All Rights Reserved © {year} — Dr. Ahmed Gouda Nageh. Built to international medical web standards.",
    back_to_top: "Back to Top"
  }
};
