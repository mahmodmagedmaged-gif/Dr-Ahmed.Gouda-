import os

gallery_dir = r"d:\DR AHMED GOUDA prot\assets\images\gallery"

# 1. Clinic Examination & Consultation Suite
clinic_suite = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0E2842"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg1)"/>
  
  <!-- Clinic Floor line -->
  <line x1="50" y1="460" x2="750" y2="460" stroke="#10BFC1" stroke-width="2" opacity="0.4"/>
  
  <!-- Examination Couch -->
  <rect x="120" y="320" width="280" height="40" rx="8" fill="#143A59" stroke="#10BFC1" stroke-width="2"/>
  <rect x="110" y="280" width="90" height="50" rx="10" transform="rotate(-20 110 280)" fill="#10BFC1" fill-opacity="0.8"/>
  <line x1="160" y1="360" x2="160" y2="460" stroke="#E6B84F" stroke-width="6"/>
  <line x1="360" y1="360" x2="360" y2="460" stroke="#E6B84F" stroke-width="6"/>
  <line x1="140" y1="460" x2="180" y2="460" stroke="#E6B84F" stroke-width="4"/>
  <line x1="340" y1="460" x2="380" y2="460" stroke="#E6B84F" stroke-width="4"/>

  <!-- Doctor Consultation Desk -->
  <rect x="470" y="340" width="240" height="120" rx="12" fill="#0B2035" stroke="#E6B84F" stroke-width="2"/>
  <!-- Ultrasound / Patient Records Monitor on Desk -->
  <rect x="520" y="230" width="140" height="95" rx="8" fill="#07182B" stroke="#10BFC1" stroke-width="2.5"/>
  <path d="M 535 275 Q 560 250 590 280 T 645 260" fill="none" stroke="#10BFC1" stroke-width="2.5"/>
  <line x1="590" y1="325" x2="590" y2="340" stroke="#E6B84F" stroke-width="4"/>
  <line x1="565" y1="340" x2="615" y2="340" stroke="#E6B84F" stroke-width="4"/>

  <!-- Wall Medical Certificate Frame -->
  <rect x="520" y="80" width="140" height="90" rx="6" fill="#0B1C2D" stroke="#E6B84F" stroke-width="2.5"/>
  <rect x="535" y="95" width="110" height="60" fill="#081421"/>
  <line x1="550" y1="115" x2="630" y2="115" stroke="#E6B84F" stroke-width="2"/>
  <line x1="550" y1="130" x2="610" y2="130" stroke="#10BFC1" stroke-width="1.5"/>

  <!-- Lighting element -->
  <line x1="260" y1="40" x2="260" y2="130" stroke="#94A3B8" stroke-width="2"/>
  <ellipse cx="260" cy="135" rx="45" ry="15" fill="#10BFC1" fill-opacity="0.6"/>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">غرفة الفحص والاستشارات السريرية المجهزة</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">بيئة طبية مريحة تراعي خصوصية المريض وأعلى معايير الرعاية</text>
</svg>'''

# 2. Laparoscopic 4K Tower
lap_tower = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#09253B"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg2)"/>

  <!-- Tower Stand Structure -->
  <rect x="280" y="100" width="240" height="420" rx="14" fill="#0E2B45" stroke="#10BFC1" stroke-width="2"/>
  <circle cx="310" cy="535" r="14" fill="#334155" stroke="#E6B84F" stroke-width="2"/>
  <circle cx="490" cy="535" r="14" fill="#334155" stroke="#E6B84F" stroke-width="2"/>

  <!-- 4K Ultra HD Surgical Monitor -->
  <rect x="250" y="50" width="300" height="170" rx="10" fill="#05101D" stroke="#E6B84F" stroke-width="3"/>
  <rect x="265" y="65" width="270" height="140" fill="#0A1E30"/>
  <text x="400" y="130" font-family="'Inter', sans-serif" font-size="20" fill="#10BFC1" font-weight="800" text-anchor="middle">4K ULTRA HD</text>
  <text x="400" y="160" font-family="'Cairo', sans-serif" font-size="14" fill="#E6B84F" text-anchor="middle">رؤية جراحية مجهرية فائقة الوضوح</text>

  <!-- Unit 1: Insufflator -->
  <rect x="300" y="240" width="200" height="60" rx="6" fill="#07182B" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="320" y="275" font-family="'Inter', sans-serif" font-size="14" fill="#E2E8F0">CO2 INSUFFLATOR</text>
  <text x="460" y="275" font-family="'Inter', sans-serif" font-size="16" fill="#34D399" font-weight="700">14 mmHg</text>

  <!-- Unit 2: High-Power Light Source -->
  <rect x="300" y="320" width="200" height="60" rx="6" fill="#07182B" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="320" y="355" font-family="'Inter', sans-serif" font-size="14" fill="#E2E8F0">LED LIGHT SOURCE</text>
  <circle cx="470" cy="350" r="10" fill="#E6B84F"/>

  <!-- Unit 3: Harmonic / Electrosurgery Unit -->
  <rect x="300" y="400" width="200" height="60" rx="6" fill="#07182B" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="320" y="435" font-family="'Inter', sans-serif" font-size="14" fill="#E2E8F0">ENERGY GENERATOR</text>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">برج جراحة المناظير المتقدم</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">تجهيزات دقيقة تمكّن من إجراء التدخلات بأقل تدخل جراحي ممكن</text>
</svg>'''

# 3. Surgical Monitoring & Anesthesia
surg_monitor = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#082236"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg3)"/>

  <!-- Multi-Parameter Vital Signs Monitor Screen -->
  <rect x="150" y="70" width="500" height="360" rx="20" fill="#030D17" stroke="#10BFC1" stroke-width="3"/>
  
  <!-- ECG Trace in Vivid Teal -->
  <path d="M 180 180 L 250 180 L 260 160 L 270 210 L 280 120 L 290 200 L 300 180 L 420 180 L 430 160 L 440 210 L 450 120 L 460 200 L 470 180 L 610 180" 
        fill="none" stroke="#10BFC1" stroke-width="3"/>
  <text x="590" y="150" font-family="'Inter', sans-serif" font-size="28" fill="#10BFC1" font-weight="800">72</text>
  <text x="590" y="170" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8">نبض/دقيقة</text>

  <!-- SpO2 Oxygen Saturation Trace -->
  <path d="M 180 270 Q 220 240 250 270 T 320 270 T 390 270 T 460 270 T 530 270" fill="none" stroke="#38BDF8" stroke-width="3"/>
  <text x="590" y="260" font-family="'Inter', sans-serif" font-size="28" fill="#38BDF8" font-weight="800">99%</text>
  <text x="590" y="280" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8">تشبع الأكسجين</text>

  <!-- Blood Pressure & Safety Parameters -->
  <rect x="180" y="320" width="180" height="75" rx="8" fill="#0B2135"/>
  <text x="200" y="350" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8">ضغط الدم NIBP</text>
  <text x="200" y="380" font-family="'Inter', sans-serif" font-size="22" fill="#E6B84F" font-weight="700">120 / 78</text>

  <rect x="400" y="320" width="180" height="75" rx="8" fill="#0B2135"/>
  <text x="420" y="350" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8">حرارة الجسم TEMP</text>
  <text x="420" y="380" font-family="'Inter', sans-serif" font-size="22" fill="#34D399" font-weight="700">36.8 °C</text>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">المراقبة المستمرة للمؤشرات الحيوية</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">التزام صارم بأعلى بروتوكولات الأمان والسلامة داخل غرف العمليات</text>
</svg>'''

# 4. Patient Clinical Counseling
counseling = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0F2B48"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg4)"/>

  <!-- Interactive Decision Diagram / Pathway -->
  <g transform="translate(100, 100)">
    <!-- Stage 1 -->
    <circle cx="100" cy="130" r="45" fill="#0B2238" stroke="#10BFC1" stroke-width="3"/>
    <text x="100" y="135" font-family="'Cairo', sans-serif" font-size="14" fill="#FFFFFF" font-weight="700" text-anchor="middle">التقييم الشامل</text>
    
    <!-- Arrow -->
    <path d="M 155 130 L 245 130" stroke="#E6B84F" stroke-width="3" stroke-dasharray="6 4"/>
    
    <!-- Stage 2 -->
    <circle cx="300" cy="130" r="50" fill="#0B2238" stroke="#E6B84F" stroke-width="3.5"/>
    <text x="300" y="135" font-family="'Cairo', sans-serif" font-size="14" fill="#E6B84F" font-weight="700" text-anchor="middle">الخطة المخصصة</text>

    <!-- Arrow -->
    <path d="M 360 130 L 445 130" stroke="#E6B84F" stroke-width="3" stroke-dasharray="6 4"/>

    <!-- Stage 3 -->
    <circle cx="500" cy="130" r="45" fill="#0B2238" stroke="#10BFC1" stroke-width="3"/>
    <text x="500" y="135" font-family="'Cairo', sans-serif" font-size="14" fill="#FFFFFF" font-weight="700" text-anchor="middle">المتابعة والرعاية</text>
  </g>

  <!-- Clinical Explanatory Card -->
  <rect x="140" y="280" width="520" height="150" rx="16" fill="#0B1F33" stroke="#10BFC1" stroke-width="1.5"/>
  <text x="400" y="325" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">مبدأ الشفافية وإشراك المريض في القرار العلاجي</text>
  <text x="400" y="360" font-family="'Cairo', sans-serif" font-size="14" fill="#E2E8F0" text-anchor="middle">شرح متكامل لفوائد الإجراء الجراحي والبدائل المتاحة</text>
  <text x="400" y="390" font-family="'Cairo', sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">مع الإجابة الشاملة على كافة تساؤلات المريض وذويه</text>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">التثقيف الطبي والاستشارة الجراحية الواعية</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">حق المريض الأصيل في فهم حالته والخطوات العلاجية المتبعة</text>
</svg>'''

# 5. Laser Proctology Equipment
laser_procto = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0B2034"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg5)"/>

  <!-- Laser Console Device -->
  <rect x="220" y="110" width="360" height="260" rx="20" fill="#0D263E" stroke="#10BFC1" stroke-width="2.5"/>
  <rect x="250" y="140" width="300" height="120" rx="10" fill="#06121E" stroke="#E6B84F" stroke-width="2"/>
  <text x="400" y="190" font-family="'Inter', sans-serif" font-size="18" fill="#10BFC1" font-weight="800" text-anchor="middle">DIODE LASER SURGERY 1470nm</text>
  <text x="400" y="225" font-family="'Cairo', sans-serif" font-size="14" fill="#E6B84F" text-anchor="middle">طاقة ليزر دقيقة ومضبوطة حرارياً</text>

  <!-- Laser Fiber Cable and Handpiece -->
  <path d="M 400 370 C 400 440 280 440 280 390 L 280 320" fill="none" stroke="#E6B84F" stroke-width="4"/>
  <line x1="280" y1="320" x2="280" y2="280" stroke="#10BFC1" stroke-width="8" stroke-linecap="round"/>
  <!-- Glowing Laser Tip -->
  <circle cx="280" cy="275" r="9" fill="#EF4444"/>
  <circle cx="280" cy="275" r="16" fill="#EF4444" fill-opacity="0.3"/>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">تقنيات الليزر في جراحات الشرج والمستقيم</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">علاج دقيق للبواسير والناسور والشرخ الشرجي بأقل قدر من الألم وسرعة شفاء عالية</text>
</svg>'''

# 6. Sterile Laparoscopic Micro-Instruments
instruments = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="galBg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/><stop offset="100%" stop-color="#0E2D48"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="16" fill="url(#galBg6)"/>

  <!-- Instrument 1: Laparoscopic Grasper -->
  <g transform="translate(150, 100) rotate(-15)">
    <line x1="0" y1="50" x2="420" y2="50" stroke="#CBD5E1" stroke-width="7" stroke-linecap="round"/>
    <line x1="420" y1="50" x2="460" y2="40" stroke="#10BFC1" stroke-width="4"/>
    <line x1="420" y1="50" x2="460" y2="60" stroke="#10BFC1" stroke-width="4"/>
    <rect x="-40" y="30" width="50" height="40" rx="8" fill="#07182B" stroke="#E6B84F" stroke-width="3"/>
  </g>

  <!-- Instrument 2: Ultrasonic Harmonic Scalpel -->
  <g transform="translate(180, 220) rotate(-10)">
    <line x1="0" y1="50" x2="380" y2="50" stroke="#94A3B8" stroke-width="9" stroke-linecap="round"/>
    <line x1="380" y1="50" x2="410" y2="45" stroke="#E6B84F" stroke-width="5"/>
    <rect x="-60" y="25" width="70" height="50" rx="10" fill="#0B2238" stroke="#10BFC1" stroke-width="3"/>
  </g>

  <!-- Instrument 3: Clip Applier -->
  <g transform="translate(160, 340) rotate(-5)">
    <line x1="0" y1="50" x2="400" y2="50" stroke="#CBD5E1" stroke-width="7" stroke-linecap="round"/>
    <circle cx="410" cy="50" r="8" fill="#E6B84F"/>
    <rect x="-50" y="30" width="60" height="40" rx="8" fill="#07182B" stroke="#CBD5E1" stroke-width="2.5"/>
  </g>

  <rect x="40" y="490" width="720" height="70" rx="12" fill="#07182B" fill-opacity="0.95" stroke="#10BFC1" stroke-width="1"/>
  <text x="400" y="525" font-family="'Cairo', sans-serif" font-size="18" fill="#E6B84F" font-weight="700" text-anchor="middle">أدوات ومناظير جراحية دقيقة معقمة</text>
  <text x="400" y="547" font-family="'Cairo', sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">تطبيق بروتوكولات التعقيم الصارمة لحماية صحة وسلامة المرضى</text>
</svg>'''

with open(os.path.join(gallery_dir, "clinic-suite.svg"), "w", encoding="utf-8") as f:
    f.write(clinic_suite)
with open(os.path.join(gallery_dir, "laparoscopic-tower.svg"), "w", encoding="utf-8") as f:
    f.write(lap_tower)
with open(os.path.join(gallery_dir, "surgical-monitoring.svg"), "w", encoding="utf-8") as f:
    f.write(surg_monitor)
with open(os.path.join(gallery_dir, "patient-counseling.svg"), "w", encoding="utf-8") as f:
    f.write(counseling)
with open(os.path.join(gallery_dir, "laser-proctology.svg"), "w", encoding="utf-8") as f:
    f.write(laser_procto)
with open(os.path.join(gallery_dir, "sterile-instruments.svg"), "w", encoding="utf-8") as f:
    f.write(instruments)

print("Gallery assets generated successfully.")
