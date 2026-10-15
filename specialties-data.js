/**
 * SPECIALTIES AND CLINICAL SERVICES DATA
 * Dr. Ahmed Gouda Nageh | Medical Portfolio
 */

const specialtiesData = [
  {
    id: "general-surgery",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    titleAr: "الجراحة العامة",
    titleEn: "General Surgery",
    descAr: "تشخيص وعلاج الأمراض الجراحية الشائعة والمعقدة، بما يشمل جراحات جدار البطن والفتق بأنواعه المختلفة واستئصال أورام الجلد والأنسجة الرخوة وفق أحدث المعايير.",
    descEn: "Diagnosis and comprehensive management of essential and complex surgical conditions, including abdominal wall hernia repairs, benign lesions, and acute surgical care.",
    proceduresAr: [
      "إصلاح الفتق الإربي والفتق السري",
      "إصلاح الفتق الجراحي المرتجع",
      "استئصال الزائدة الدودية الجراحي",
      "جراحات الأورام الحميدة والزوائد الجلدية",
      "علاج التهابات وخراجات الأنسجة الرخوة"
    ],
    proceduresEn: [
      "Inguinal and umbilical hernia repair",
      "Recurrent incisional hernia repair",
      "Appendectomy interventions",
      "Benign soft-tissue lesion excision",
      "Soft tissue infections and abscess drainage"
    ],
    modalDetailsAr: `
      <p>تغطي الجراحة العامة ركائز التدخلات الجراحية الأساسية، مع التركيز على السلامة الإكلينيكية واستخدام الشبكات الجراحية الحديثة عالية التوافق الحيوي في إصلاح الفتق للحد من احتمالات الانتكاس.</p>
      <h5>أهم الإجراءات والخدمات المقدمة:</h5>
      <ul>
        <li><strong>إصلاح الفتق الإربي والبطني:</strong> باستخدام أحدث تقنيات الشبكات غير القابلة للامتصاص وخيوط التثبيت الدقيقة لتسريع الشفاء.</li>
        <li><strong>جراحات الطوارئ البطنية:</strong> تشخيص وعلاج حالات البطن الحادة والانسداد المعوي والتهاب الزائدة الدودية.</li>
        <li><strong>استئصال الأكياس الدهنية والأورام السطحية:</strong> بطرق تجميلية دقيقة لا تترك ندبات ملحوظة.</li>
      </ul>
      <p>يخضع المريض لفحص سريري شامل لتحديد ما إذا كان التدخل الجراحي التقليدي أو المنظار هو الخيار الأمثل لحالته الفردية.</p>
    `,
    modalDetailsEn: `
      <p>General surgery encompasses fundamental and advanced operative care, emphasizing clinical safety and high-biocompatibility surgical mesh placement in abdominal wall repairs to minimize recurrence.</p>
      <h5>Core Services:</h5>
      <ul>
        <li><strong>Inguinal & Ventral Hernia Repairs:</strong> Utilizing advanced lightweight prosthetic mesh for durable reconstruction.</li>
        <li><strong>Emergency Abdominal Care:</strong> Prompt management of acute appendicitis, bowel obstructions, and surgical emergencies.</li>
        <li><strong>Cutaneous & Subcutaneous Lesions:</strong> Aesthetic excision of lipomas, sebaceous cysts, and soft tissue masses.</li>
      </ul>
      <p>Each patient undergoes rigorous clinical evaluation to establish whether open or laparoscopic intervention delivers the optimal outcome.</p>
    `
  },
  {
    id: "laparoscopic-surgery",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    titleAr: "جراحات المناظير المتقدمة",
    titleEn: "Advanced Laparoscopy",
    descAr: "إجراء العمليات الجراحية الدقيقة عبر ثقوب صغيرة في جدار البطن باستخدام كاميرات فائقة الوضوح، لتوفير أمان مضاعف وألم أقل وسرعة تعافٍ استثنائية.",
    descEn: "Precision keyhole surgery performed through minute abdominal incisions with high-definition optical systems, minimizing trauma and expediting recovery.",
    proceduresAr: [
      "استئصال المرارة وحصواتها بالمنظار",
      "استئصال الزائدة الدودية بالمنظار",
      "إصلاح الفتق الإربي والبطني بالمنظار",
      "منظار البطن الاستكشافي التشخيصي",
      "فك الالتصاقات البطنية بالمنظار"
    ],
    proceduresEn: [
      "Laparoscopic cholecystectomy for gallstones",
      "Laparoscopic appendectomy",
      "Laparoscopic hernia repair (TAPP / TEP)",
      "Diagnostic exploratory laparoscopy",
      "Laparoscopic adhesiolysis"
    ],
    modalDetailsAr: `
      <p>تتيح جراحة المناظير المتقدمة للجراح رؤية مكبرة للأعضاء الداخلية تصل إلى عشرة أضعاف الرؤية الطبيعية، مما يضمن أقصى درجات الدقة أثناء التعامل مع الأنسجة الحساسة والشرايين الدقيقة.</p>
      <h5>مزايا جراحة المناظير لدى د. أحمد جودة:</h5>
      <ul>
        <li><strong>استئصال المرارة بالمنظار:</strong> الإجراء المعياري لحصوات المرارة والالتهابات، حيث يغادر المريض المستشفى في نفس اليوم أو اليوم التالي.</li>
        <li><strong>إصلاح الفتق بالمنظار:</strong> وضع الشبكة من داخل تجويف البطن، مما يوفر متانة عالية وألماً شبه منعدم مقارنة بالجراحة التقليدية.</li>
        <li><strong>تقليل الندبات:</strong> استخدام تقنيات الغرز التجميلية الدقيقة أسفل الجلد.</li>
      </ul>
    `,
    modalDetailsEn: `
      <p>Advanced laparoscopy offers high optical magnification, allowing surgical manipulation with millimeter precision around delicate neurovascular bundles.</p>
      <h5>Key Advantages:</h5>
      <ul>
        <li><strong>Laparoscopic Cholecystectomy:</strong> The benchmark procedure for symptomatic cholelithiasis, enabling same-day or 24-hour discharge.</li>
        <li><strong>Laparoscopic Hernia Repair (TAPP / TEP):</strong> Posterior mesh placement providing superior tensile reinforcement and minimal discomfort.</li>
        <li><strong>Minimal Scarring:</strong> Subcuticular cosmetic closures for optimal cosmetic recovery.</li>
      </ul>
    `
  },
  {
    id: "bariatric-surgery",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/><path d="M5 22v-4a7 7 0 0 1 14 0v4"/><circle cx="12" cy="12" r="2"/></svg>`,
    titleAr: "جراحات السمنة والأيض",
    titleEn: "Bariatric & Metabolic Surgery",
    descAr: "تدخلات جراحية تهدف إلى إنقاص الوزن الزائد وعلاج الأمراض الاستقلابية المرتبطة به كداء السكري وارتفاع ضغط الدم وفق أحدث البروتوكولات الدولية المعتمدة.",
    descEn: "Evidence-based surgical interventions designed to treat severe clinical obesity and reverse metabolic comorbidities under international safety protocols.",
    proceduresAr: [
      "تكميم المعدة بالمنظار (Sleeve Gastrectomy)",
      "تقييم حالات السمنة المفرطة والاستقلابية",
      "التحضير الغذائي والطبي قبل العملية",
      "برامج المتابعة الدورية بعد الجراحة",
      "الوقاية من نقص الفيتامينات والمعادن"
    ],
    proceduresEn: [
      "Laparoscopic Sleeve Gastrectomy",
      "Comprehensive metabolic obesity assessment",
      "Preoperative nutritional preparation",
      "Structured post-bariatric surveillance",
      "Micronutrient and vitamin deficiency prevention"
    ],
    modalDetailsAr: `
      <p>تهدف جراحة السمنة في المقام الأول إلى استعادة الصحة وتحسين نوعية الحياة وليس فقط المظهر الخارجي. يتم تقييم كل حالة بشكل فردي بالتنسيق مع أخصائيي التغذية والباطنة والتخدير.</p>
      <h5>مبادئ العمل في جراحات السمنة:</h5>
      <ul>
        <li><strong>الأمان أولاً:</strong> استخدام الدباسات الجراحية الأمريكية الذكية المعتمدة دولياً واختبار خط التدبيس بدقة لمنع التسريب.</li>
        <li><strong>خطة غذائية متكاملة:</strong> مرافقة المريض في كافة مراحل التغذية من السوائل حتى الطعام الصلب.</li>
        <li><strong>متابعة مستمرة:</strong> فحوصات دورية لنسب الهيموجلوبين والحديد وفيتامينات (د، ب12) والكالسيوم لضمان صحة عامة مثالية.</li>
      </ul>
    `,
    modalDetailsEn: `
      <p>Bariatric surgery is fundamentally dedicated to restoring metabolic wellness, reversing insulin resistance, and enhancing quality of life through individualized multidisciplinary care.</p>
      <h5>Safety Pillars:</h5>
      <ul>
        <li><strong>Surgical Safety:</strong> Utilizing internationally certified smart powered endoscopic staplers with routine intraoperative leak testing.</li>
        <li><strong>Comprehensive Nutrition:</strong> Structured phased dietary transitions guided by clinical dietetics.</li>
        <li><strong>Longitudinal Monitoring:</strong> Scheduled laboratory surveillance of hemoglobin, ferritin, Vitamin D, B12, and calcium.</li>
      </ul>
    `
  },
  {
    id: "colorectal-surgery",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    titleAr: "جراحات الشرج والمستقيم",
    titleEn: "Colorectal & Proctology",
    descAr: "علاج دقيق لأمراض الشرج الشائعة مثل البواسير، الناسور الشرجي، الشرخ الشرجي، والناسور العصعصي، بالاعتماد على أحدث التقنيات طفيفة التوغل والليزر.",
    descEn: "Specialized treatment of anorectal and colorectal pathologies including hemorrhoids, anal fistulas, fissures, and pilonidal sinus utilizing modern minimally invasive techniques.",
    proceduresAr: [
      "علاج البواسير الشرجية (جراحياً وبالليزر)",
      "علاج الناسور الشرجي البسيط والمعقد",
      "علاج الشرخ الشرجي الحاد والمزمن",
      "استئصال الناسور العصعصي (كيس الشعر)",
      "علاج الخراجات الشرجية والالتهابات الحادة"
    ],
    proceduresEn: [
      "Hemorrhoidectomy (Laser and surgical approaches)",
      "Anal fistula management (simple and complex)",
      "Acute and chronic anal fissure care",
      "Pilonidal sinus resection and flap techniques",
      "Perianal abscess drainage and septic care"
    ],
    modalDetailsAr: `
      <p>تتطلب أمراض الشرج والمستقيم خصوصية فائقة ودقة جراحية متناهية للحفاظ على كفاءة العضلات العاصرة وتجنب أي تأثير سلبي على التحكم، مع التركيز على تقليل الألم إلى أقصى حد ممكن.</p>
      <h5>التقنيات المتبعة:</h5>
      <ul>
        <li><strong>تقنيات الليزر الحديثة:</strong> كيّ وضمور البواسير والناسور من الداخل بطاقة حرارية مضبوطة دون الحاجة لقص جراحي مؤلم.</li>
        <li><strong>علاج الناسور العصعصي:</strong> بطرق تضمن سرعة التئام الجرح وتقليل فترة الانقطاع عن العمل والدراسة.</li>
        <li><strong>الرعاية الداعمة:</strong> وصف بروتوكولات دوائية ومغاطس ملطفة وتوجيهات غذائية غنية بالألياف تضمن راحة تامة أثناء التبرز.</li>
      </ul>
    `,
    modalDetailsEn: `
      <p>Anorectal pathologies require meticulous surgical preservation of the sphincter complex to prevent incontinence while ensuring rapid, low-pain healing.</p>
      <h5>Advanced Modalities:</h5>
      <ul>
        <li><strong>Modern Diode Laser:</strong> Precise endoluminal ablation of hemorrhoidal tissue and fistula tracts without extensive surgical incisions.</li>
        <li><strong>Pilonidal Disease:</strong> Innovative flap-sparing and minimally invasive techniques to expedite return to professional activity.</li>
        <li><strong>Supportive Proctology Care:</strong> High-fiber dietary regimens, specialized analgesia, and topical agents guaranteeing patient comfort.</li>
      </ul>
    `
  }
];
