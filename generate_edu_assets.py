import os

edu_dir = r"d:\DR AHMED GOUDA prot\assets\images\medical-education"
gallery_dir = r"d:\DR AHMED GOUDA prot\assets\images\gallery"

# 1. Sleeve Gastrectomy Diagram
sleeve_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0F2F4A"/>
    </linearGradient>
    <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5989B"/><stop offset="100%" stop-color="#B56576"/>
    </linearGradient>
    <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10BFC1"/><stop offset="100%" stop-color="#087E80"/>
    </linearGradient>
    <linearGradient id="goldLin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE5A4"/><stop offset="100%" stop-color="#E6B84F"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu1)"/>
  
  <!-- Subtle Grid & Medical Cross Background -->
  <g opacity="0.05" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="125" x2="800" y2="125"/><line x1="0" y1="250" x2="800" y2="250"/><line x1="0" y1="375" x2="800" y2="375"/>
    <line x1="200" y1="0" x2="200" y2="500"/><line x1="400" y1="0" x2="400" y2="500"/><line x1="600" y1="0" x2="600" y2="500"/>
  </g>

  <!-- Esophagus -->
  <path d="M 360 40 L 360 120 Q 360 140 375 145" fill="none" stroke="#E5989B" stroke-width="32" stroke-linecap="round"/>

  <!-- Resected Part (The Fundus / Outer curvature, dashed and translucent) -->
  <path d="M 375 145 C 500 130 620 220 580 340 C 550 420 460 420 420 380" 
        fill="none" stroke="url(#stomachGrad)" stroke-width="8" stroke-dasharray="10 8" opacity="0.6"/>
  <path d="M 375 145 C 500 130 620 220 580 340 C 550 420 460 420 420 380 Z" 
        fill="#B56576" fill-opacity="0.15"/>
  <text x="560" y="270" font-family="'Cairo', sans-serif" font-size="16" fill="#F87171" font-weight="700">الجزء المستأصل (قاع المعدة)</text>

  <!-- Preserved Gastric Sleeve (Narrow Tube) -->
  <path d="M 375 145 Q 360 250 370 360 L 420 380 Q 400 260 400 145 Z" 
        fill="url(#tubeGrad)" stroke="#10BFC1" stroke-width="3"/>

  <!-- Staple Line (Gold Titanium Staples) -->
  <path d="M 400 145 Q 400 260 420 380" fill="none" stroke="url(#goldLin)" stroke-width="4" stroke-dasharray="6 4"/>
  <text x="240" y="270" font-family="'Cairo', sans-serif" font-size="16" fill="#10BFC1" font-weight="700">الأنبوب المتبقي (كم المعدة ~20%)</text>
  <text x="440" y="380" font-family="'Cairo', sans-serif" font-size="14" fill="#E6B84F" font-weight="600">خط الدبابيس الجراحية</text>

  <!-- Duodenum -->
  <path d="M 370 360 Q 330 390 310 440" fill="none" stroke="#E5989B" stroke-width="26" stroke-linecap="round"/>

  <!-- Title Badge -->
  <rect x="40" y="35" width="230" height="50" rx="12" fill="#07182B" fill-opacity="0.85" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="155" y="66" font-family="'Cairo', sans-serif" font-size="17" fill="#E6B84F" font-weight="700" text-anchor="middle">توضيح تكميم المعدة بالمنظار</text>
</svg>'''

# 2. Bariatric Indication / BMI criteria
indication_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0C263F"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu2)"/>

  <!-- Gauge Arc -->
  <path d="M 180 340 A 220 220 0 0 1 620 340" fill="none" stroke="#1E3A5F" stroke-width="36" stroke-linecap="round"/>
  
  <!-- Gauge colored sections -->
  <path d="M 180 340 A 220 220 0 0 1 290 190" fill="none" stroke="#34D399" stroke-width="34" stroke-linecap="round"/>
  <path d="M 290 190 A 220 220 0 0 1 510 190" fill="none" stroke="#FBBF24" stroke-width="34"/>
  <path d="M 510 190 A 220 220 0 0 1 620 340" fill="none" stroke="#F87171" stroke-width="34" stroke-linecap="round"/>

  <!-- Gauge Needle to BMI 35+ -->
  <circle cx="400" cy="340" r="22" fill="#E6B84F"/>
  <line x1="400" y1="340" x2="520" y2="190" stroke="#E6B84F" stroke-width="8" stroke-linecap="round"/>
  <circle cx="400" cy="340" r="10" fill="#07182B"/>

  <!-- Labels -->
  <text x="210" y="375" font-family="'Cairo', sans-serif" font-size="16" fill="#34D399" font-weight="700">وزن صحي (18.5 - 24.9)</text>
  <text x="400" y="150" font-family="'Cairo', sans-serif" font-size="16" fill="#FBBF24" font-weight="700" text-anchor="middle">وزن زائد (25 - 29.9)</text>
  <text x="590" y="375" font-family="'Cairo', sans-serif" font-size="16" fill="#F87171" font-weight="700">مؤشر السمنة الجراحية (35+)</text>

  <!-- Bottom Guidelines Card -->
  <rect x="120" y="405" width="560" height="65" rx="14" fill="#0B2238" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="400" y="443" font-family="'Cairo', sans-serif" font-size="15" fill="#E2E8F0" font-weight="600" text-anchor="middle">
    التقييم الطبي الفردي والفحوصات السريرية هي المعيار لتحديد الأنسب لكل حالة
  </text>
  
  <text x="400" y="70" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">معايير ومؤشرات اللجوء لجراحات السمنة</text>
</svg>'''

# 3. Laparoscopy vs Open Surgery
lap_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0D2D49"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu3)"/>

  <!-- Split Divider -->
  <line x1="400" y1="40" x2="400" y2="460" stroke="#10BFC1" stroke-width="2" stroke-dasharray="6 6" opacity="0.6"/>

  <!-- Left: Traditional Open Surgery -->
  <text x="200" y="75" font-family="'Cairo', sans-serif" font-size="20" fill="#94A3B8" font-weight="700" text-anchor="middle">الجراحة المفتوحة التقليدية</text>
  
  <!-- Abdominal wall with large incision -->
  <rect x="80" y="110" width="240" height="150" rx="16" fill="#14263D" stroke="#334155" stroke-width="2"/>
  <line x1="200" y1="135" x2="200" y2="235" stroke="#EF4444" stroke-width="8" stroke-linecap="round"/>
  <!-- Stitch marks -->
  <path d="M 185 155 L 215 155 M 185 185 L 215 185 M 185 215 L 215 215" stroke="#FFFFFF" stroke-width="3"/>
  <text x="200" y="295" font-family="'Cairo', sans-serif" font-size="15" fill="#EF4444" font-weight="600" text-anchor="middle">شق جراحي واسع (10-15 سم)</text>
  <text x="200" y="335" font-family="'Cairo', sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">فترة استشفاء أطول بالمستشفى</text>
  <text x="200" y="365" font-family="'Cairo', sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">أثر جراحي ملحوظ</text>

  <!-- Right: Modern Laparoscopic Surgery -->
  <text x="600" y="75" font-family="'Cairo', sans-serif" font-size="20" fill="#10BFC1" font-weight="700" text-anchor="middle">جراحة المناظير الدقيقة</text>
  
  <!-- Abdominal wall with 3 tiny keyhole trocars -->
  <rect x="480" y="110" width="240" height="150" rx="16" fill="#0E334D" stroke="#10BFC1" stroke-width="2"/>
  <circle cx="530" cy="185" r="8" fill="#10BFC1" stroke="#E6B84F" stroke-width="3"/>
  <circle cx="600" cy="165" r="9" fill="#10BFC1" stroke="#E6B84F" stroke-width="3"/>
  <circle cx="670" cy="185" r="8" fill="#10BFC1" stroke="#E6B84F" stroke-width="3"/>
  
  <!-- Laparoscopic Camera beam -->
  <path d="M 600 174 L 560 250 L 640 250 Z" fill="#10BFC1" fill-opacity="0.2"/>
  
  <text x="600" y="295" font-family="'Cairo', sans-serif" font-size="15" fill="#10BFC1" font-weight="600" text-anchor="middle">فتحات متناهية الصغر (5-10 ملم)</text>
  <text x="600" y="335" font-family="'Cairo', sans-serif" font-size="14" fill="#E2E8F0" text-anchor="middle">ألم أقل وسرعة عودة للنشاط</text>
  <text x="600" y="365" font-family="'Cairo', sans-serif" font-size="14" fill="#E2E8F0" text-anchor="middle">نتائج جمالية متقدمة ودقة بصرية عالية</text>

  <!-- Bottom Summary -->
  <rect x="150" y="415" width="500" height="50" rx="12" fill="#07182B" stroke="#E6B84F" stroke-width="1.5"/>
  <text x="400" y="446" font-family="'Cairo', sans-serif" font-size="15" fill="#E6B84F" font-weight="700" text-anchor="middle">يحدد الجراح التقنية المناسبة وفق المعايير الطبية لكل حالة</text>
</svg>'''

# 4. Surgical Preparation Checklist
prep_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0B233A"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu4)"/>

  <text x="400" y="65" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">خطوات وإرشادات الاستعداد للعملية الجراحية</text>

  <!-- Step 1: Pre-op Consultation -->
  <g transform="translate(80, 110)">
    <rect width="180" height="230" rx="16" fill="#0F2B48" stroke="#10BFC1" stroke-width="2"/>
    <circle cx="90" cy="55" r="32" fill="#07182B" stroke="#E6B84F" stroke-width="3"/>
    <text x="90" y="63" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">1</text>
    <text x="90" y="125" font-family="'Cairo', sans-serif" font-size="16" fill="#FFFFFF" font-weight="700" text-anchor="middle">الفحص السريري</text>
    <text x="90" y="160" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">مراجعة التاريخ المرضي</text>
    <text x="90" y="185" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">والأدوية الحالية بدقة</text>
  </g>

  <!-- Step 2: Diagnostic Labs -->
  <g transform="translate(310, 110)">
    <rect width="180" height="230" rx="16" fill="#0F2B48" stroke="#10BFC1" stroke-width="2"/>
    <circle cx="90" cy="55" r="32" fill="#07182B" stroke="#E6B84F" stroke-width="3"/>
    <text x="90" y="63" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">2</text>
    <text x="90" y="125" font-family="'Cairo', sans-serif" font-size="16" fill="#FFFFFF" font-weight="700" text-anchor="middle">التحاليل والأشعة</text>
    <text x="90" y="160" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">فحوصات الدم وسيولة التجلط</text>
    <text x="90" y="185" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">وتقييم طبيب التخدير</text>
  </g>

  <!-- Step 3: Fasting & Hygiene -->
  <g transform="translate(540, 110)">
    <rect width="180" height="230" rx="16" fill="#0F2B48" stroke="#10BFC1" stroke-width="2"/>
    <circle cx="90" cy="55" r="32" fill="#07182B" stroke="#E6B84F" stroke-width="3"/>
    <text x="90" y="63" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">3</text>
    <text x="90" y="125" font-family="'Cairo', sans-serif" font-size="16" fill="#FFFFFF" font-weight="700" text-anchor="middle">الصيام والتعليمات</text>
    <text x="90" y="160" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">الالتزام بساعات الصيام</text>
    <text x="90" y="185" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">وفق توجيهات الفريق الطبي</text>
  </g>

  <rect x="80" y="380" width="640" height="70" rx="14" fill="#07182B" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="400" y="422" font-family="'Cairo', sans-serif" font-size="15" fill="#38BDF8" font-weight="600" text-anchor="middle">
    توفير كافة المعلومات الطبية والالتزام بالتعليمات يضمن أعلى معايير الأمان الجراحي
  </text>
</svg>'''

# 5. Post-Operative Care
post_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0E2C48"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu5)"/>
  <text x="400" y="65" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">ركائز المتابعة الطبية والرعاية بعد الجراحة</text>

  <!-- 4 Pillars of Recovery -->
  <g transform="translate(60, 110)">
    <rect width="150" height="240" rx="14" fill="#0D263D" stroke="#10BFC1" stroke-width="1.5"/>
    <circle cx="75" cy="50" r="28" fill="#10BFC1" fill-opacity="0.2" stroke="#10BFC1" stroke-width="2"/>
    <path d="M 65 50 L 72 57 L 85 44" stroke="#10BFC1" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="75" y="115" font-family="'Cairo', sans-serif" font-size="16" fill="#E6B84F" font-weight="700" text-anchor="middle">المتابعة الدورية</text>
    <text x="75" y="150" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">الالتزام بمواعيد</text>
    <text x="75" y="175" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">الزيارات المحددة</text>
    <text x="75" y="200" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">للاطمئنان على الالتئام</text>
  </g>

  <g transform="translate(230, 110)">
    <rect width="150" height="240" rx="14" fill="#0D263D" stroke="#10BFC1" stroke-width="1.5"/>
    <circle cx="75" cy="50" r="28" fill="#10BFC1" fill-opacity="0.2" stroke="#10BFC1" stroke-width="2"/>
    <circle cx="75" cy="50" r="14" fill="#E6B84F"/>
    <text x="75" y="115" font-family="'Cairo', sans-serif" font-size="16" fill="#E6B84F" font-weight="700" text-anchor="middle">إدارة الأدوية</text>
    <text x="75" y="150" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">تناول المسكنات</text>
    <text x="75" y="175" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">والمضادات الحيوية</text>
    <text x="75" y="200" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">حسب الجرعات المحددة</text>
  </g>

  <g transform="translate(400, 110)">
    <rect width="150" height="240" rx="14" fill="#0D263D" stroke="#10BFC1" stroke-width="1.5"/>
    <circle cx="75" cy="50" r="28" fill="#10BFC1" fill-opacity="0.2" stroke="#10BFC1" stroke-width="2"/>
    <path d="M 68 45 L 82 55 M 82 45 L 68 55" stroke="#10BFC1" stroke-width="3" stroke-linecap="round"/>
    <text x="75" y="115" font-family="'Cairo', sans-serif" font-size="16" fill="#E6B84F" font-weight="700" text-anchor="middle">الحركة التدريجية</text>
    <text x="75" y="150" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">المشي الخفيف مبكراً</text>
    <text x="75" y="175" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">لتنشيط الدورة الدموية</text>
    <text x="75" y="200" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">وتجنب التجلطات</text>
  </g>

  <g transform="translate(570, 110)">
    <rect width="150" height="240" rx="14" fill="#0D263D" stroke="#10BFC1" stroke-width="1.5"/>
    <circle cx="75" cy="50" r="28" fill="#10BFC1" fill-opacity="0.2" stroke="#10BFC1" stroke-width="2"/>
    <circle cx="75" cy="50" r="10" fill="#EF4444"/>
    <text x="75" y="115" font-family="'Cairo', sans-serif" font-size="16" fill="#E6B84F" font-weight="700" text-anchor="middle">علامات التحذير</text>
    <text x="75" y="150" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">التواصل العاجل عند</text>
    <text x="75" y="175" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">حدوث حرارة مرتفعة</text>
    <text x="75" y="200" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">أو ألم غير معتاد</text>
  </g>

  <rect x="100" y="390" width="600" height="60" rx="12" fill="#07182B" stroke="#E6B84F" stroke-width="1.5"/>
  <text x="400" y="427" font-family="'Cairo', sans-serif" font-size="14" fill="#E2E8F0" font-weight="600" text-anchor="middle">
    الرعاية بعد الجراحة لا تقل أهمية عن العملية نفسها لضمان أفضل نسب التعافي
  </text>
</svg>'''

# 6. Post-Bariatric Nutrition Progression
nutri_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgEdu6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0E2D4A"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="20" fill="url(#bgEdu6)"/>
  <text x="400" y="65" font-family="'Cairo', sans-serif" font-size="22" fill="#E6B84F" font-weight="800" text-anchor="middle">المراحل الغذائية التدريجية بعد جراحة السمنة</text>

  <!-- 4 Step Flow -->
  <g transform="translate(70, 120)">
    <rect width="140" height="210" rx="14" fill="#0E2B46" stroke="#10BFC1" stroke-width="1.5"/>
    <text x="70" y="40" font-family="'Cairo', sans-serif" font-size="14" fill="#10BFC1" font-weight="700" text-anchor="middle">المرحلة الأولى</text>
    <text x="70" y="70" font-family="'Cairo', sans-serif" font-size="17" fill="#E6B84F" font-weight="800" text-anchor="middle">سوائل صافية</text>
    <text x="70" y="115" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">ماء، يانسون، نعناع</text>
    <text x="70" y="145" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">رشفات هادئة وصغيرة</text>
    <text x="70" y="175" font-family="'Cairo', sans-serif" font-size="12" fill="#38BDF8" text-anchor="middle">الأيام الأولى</text>
  </g>

  <g transform="translate(230, 120)">
    <rect width="140" height="210" rx="14" fill="#0E2B46" stroke="#10BFC1" stroke-width="1.5"/>
    <text x="70" y="40" font-family="'Cairo', sans-serif" font-size="14" fill="#10BFC1" font-weight="700" text-anchor="middle">المرحلة الثانية</text>
    <text x="70" y="70" font-family="'Cairo', sans-serif" font-size="17" fill="#E6B84F" font-weight="800" text-anchor="middle">سوائل كاملة</text>
    <text x="70" y="115" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">شوربات مصفاة، حليب</text>
    <text x="70" y="145" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">بداية مخفوق البروتين</text>
    <text x="70" y="175" font-family="'Cairo', sans-serif" font-size="12" fill="#38BDF8" text-anchor="middle">الأسبوع الثاني</text>
  </g>

  <g transform="translate(390, 120)">
    <rect width="140" height="210" rx="14" fill="#0E2B46" stroke="#10BFC1" stroke-width="1.5"/>
    <text x="70" y="40" font-family="'Cairo', sans-serif" font-size="14" fill="#10BFC1" font-weight="700" text-anchor="middle">المرحلة الثالثة</text>
    <text x="70" y="70" font-family="'Cairo', sans-serif" font-size="17" fill="#E6B84F" font-weight="800" text-anchor="middle">طعام مهروس</text>
    <text x="70" y="115" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">زبادي، بيض مخفوق،</text>
    <text x="70" y="145" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">خضار مطهو ومهروس</text>
    <text x="70" y="175" font-family="'Cairo', sans-serif" font-size="12" fill="#38BDF8" text-anchor="middle">الأسبوع 3 و 4</text>
  </g>

  <g transform="translate(550, 120)">
    <rect width="140" height="210" rx="14" fill="#0E2B46" stroke="#10BFC1" stroke-width="1.5"/>
    <text x="70" y="40" font-family="'Cairo', sans-serif" font-size="14" fill="#10BFC1" font-weight="700" text-anchor="middle">المرحلة الرابعة</text>
    <text x="70" y="70" font-family="'Cairo', sans-serif" font-size="17" fill="#E6B84F" font-weight="800" text-anchor="middle">طعام صحي لين</text>
    <text x="70" y="115" font-family="'Cairo', sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">بروتين لين، خضروات</text>
    <text x="70" y="145" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">مضغ جيد ووجبات صغيرة</text>
    <text x="70" y="175" font-family="'Cairo', sans-serif" font-size="12" fill="#38BDF8" text-anchor="middle">الشهر الثاني وما بعده</text>
  </g>

  <rect x="90" y="380" width="620" height="65" rx="14" fill="#07182B" stroke="#E6B84F" stroke-width="1.5"/>
  <text x="400" y="420" font-family="'Cairo', sans-serif" font-size="14" fill="#E2E8F0" font-weight="600" text-anchor="middle">
    البرنامج الغذائي يتم تفصيله بدقة مع الفريق الطبي وأخصائي التغذية العلاجية
  </text>
</svg>'''

with open(os.path.join(edu_dir, "sleeve-gastrectomy.svg"), "w", encoding="utf-8") as f:
    f.write(sleeve_svg)
with open(os.path.join(edu_dir, "bariatric-indication.svg"), "w", encoding="utf-8") as f:
    f.write(indication_svg)
with open(os.path.join(edu_dir, "laparoscopy-vs-open.svg"), "w", encoding="utf-8") as f:
    f.write(lap_svg)
with open(os.path.join(edu_dir, "surgical-prep.svg"), "w", encoding="utf-8") as f:
    f.write(prep_svg)
with open(os.path.join(edu_dir, "post-op-care.svg"), "w", encoding="utf-8") as f:
    f.write(post_svg)
with open(os.path.join(edu_dir, "nutrition-recovery.svg"), "w", encoding="utf-8") as f:
    f.write(nutri_svg)

print("Medical Education illustrations generated successfully.")
