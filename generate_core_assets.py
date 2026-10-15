import os

images_dir = r"d:\DR AHMED GOUDA prot\assets\images"
edu_dir = os.path.join(images_dir, "medical-education")
gallery_dir = os.path.join(images_dir, "gallery")

# 1. Monogram SVG (A + G interlaced with subtle medical cross/caduceus curve in gold & teal)
monogram_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <linearGradient id="agGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE5A4" />
      <stop offset="50%" stop-color="#E6B84F" />
      <stop offset="100%" stop-color="#B88628" />
    </linearGradient>
    <linearGradient id="agTealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#088385" />
      <stop offset="100%" stop-color="#10BFC1" />
    </linearGradient>
    <linearGradient id="agNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B" />
      <stop offset="100%" stop-color="#0E2D4E" />
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Outer Octagon / Rounded Hex Shield -->
  <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#agNavyGrad)" stroke="url(#agGoldGrad)" stroke-width="3" stroke-opacity="0.85"/>
  
  <!-- Subtle Internal Concentric Ring -->
  <circle cx="100" cy="100" r="76" fill="none" stroke="url(#agTealGrad)" stroke-width="1.2" stroke-dasharray="4 6" opacity="0.45"/>

  <!-- Monogram Glyph: Harmonious Geometric A + G -->
  <!-- Letter A: Left leg, apex, right leg -->
  <path d="M 62 145 L 94 48 Q 98 38 102 38 Q 106 38 110 48 L 126 95" 
        fill="none" stroke="url(#agGoldGrad)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        
  <!-- Letter G: Sweeping circular arc embracing the right -->
  <path d="M 134 78 A 54 54 0 1 0 144 124 L 108 124" 
        fill="none" stroke="url(#agGoldGrad)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Shared Crossbar linking A and G with Medical Plus Core -->
  <line x1="77" y1="112" x2="114" y2="112" stroke="url(#agGoldGrad)" stroke-width="8" stroke-linecap="round"/>
  
  <!-- Minimal Medical Cross Accent in Luminous Teal -->
  <g transform="translate(100, 100)" filter="url(#subtleGlow)">
    <circle cx="0" cy="0" r="7" fill="#07182B" stroke="url(#agTealGrad)" stroke-width="2"/>
    <path d="M -3 0 L 3 0 M 0 -3 L 0 3" stroke="#10BFC1" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>'''

# 2. Transparent Monogram for Favicon / Navbar
favicon_svg = monogram_svg.replace('width="100%" height="100%"', 'width="64" height="64"')

# 3. Full Brand Logo (Monogram + Arabic & English Typography)
brand_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="100%" height="100%">
  <defs>
    <linearGradient id="agGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE5A4" />
      <stop offset="50%" stop-color="#E6B84F" />
      <stop offset="100%" stop-color="#B88628" />
    </linearGradient>
    <linearGradient id="agTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#088385" />
      <stop offset="100%" stop-color="#10BFC1" />
    </linearGradient>
    <linearGradient id="agNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B" />
      <stop offset="100%" stop-color="#0E2D4E" />
    </linearGradient>
  </defs>

  <!-- Left Icon Emblem -->
  <g transform="translate(10, 10) scale(0.5)">
    <rect x="0" y="0" width="200" height="200" rx="40" fill="url(#agNavyGrad)" stroke="url(#agGoldGrad)" stroke-width="4"/>
    <circle cx="100" cy="100" r="76" fill="none" stroke="url(#agTealGrad)" stroke-width="2" stroke-dasharray="5 7" opacity="0.6"/>
    <path d="M 62 145 L 94 48 Q 98 38 102 38 Q 106 38 110 48 L 126 95" fill="none" stroke="url(#agGoldGrad)" stroke-width="13" stroke-linecap="round"/>
    <path d="M 134 78 A 54 54 0 1 0 144 124 L 108 124" fill="none" stroke="url(#agGoldGrad)" stroke-width="13" stroke-linecap="round"/>
    <line x1="77" y1="112" x2="114" y2="112" stroke="url(#agGoldGrad)" stroke-width="9" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="8" fill="#07182B" stroke="#10BFC1" stroke-width="3"/>
  </g>

  <!-- Typography: Name & Specialization in Arabic and English -->
  <text x="130" y="48" font-family="'Cairo', 'Tajawal', 'Segoe UI', sans-serif" font-size="26" font-weight="800" fill="#E6B84F" letter-spacing="0.5">د. أحمد جودة ناجح</text>
  <text x="130" y="74" font-family="'Cairo', 'Tajawal', 'Segoe UI', sans-serif" font-size="14" font-weight="600" fill="#10BFC1">أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج</text>
  <text x="130" y="96" font-family="'Inter', 'Segoe UI', sans-serif" font-size="11" font-weight="500" fill="#94A3B8" letter-spacing="1.2">DR. AHMED GOUDA NAGEH | GENERAL &amp; BARIATRIC SURGERY</text>
</svg>'''

# 4. Doctor Scrubs Placeholder (High-end medical vector graphic awaiting real scrubs photo)
scrubs_placeholder_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <defs>
    <linearGradient id="scrubsNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07182B"/>
      <stop offset="100%" stop-color="#0B2238"/>
    </linearGradient>
    <linearGradient id="scrubsTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#093C53"/>
      <stop offset="100%" stop-color="#0B5D73"/>
    </linearGradient>
    <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE5A4"/>
      <stop offset="100%" stop-color="#E6B84F"/>
    </linearGradient>
  </defs>
  <rect width="600" height="700" rx="28" fill="url(#scrubsNavy)"/>
  
  <!-- Subtle grid pattern -->
  <g opacity="0.08" stroke="#10BFC1" stroke-width="1">
    <line x1="0" y1="100" x2="600" y2="100"/><line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="0" y1="300" x2="600" y2="300"/><line x1="0" y1="400" x2="600" y2="400"/>
    <line x1="0" y1="500" x2="600" y2="500"/><line x1="0" y1="600" x2="600" y2="600"/>
    <line x1="100" y1="0" x2="100" y2="700"/><line x1="200" y1="0" x2="200" y2="700"/>
    <line x1="300" y1="0" x2="300" y2="700"/><line x1="400" y1="0" x2="400" y2="700"/>
    <line x1="500" y1="0" x2="500" y2="700"/>
  </g>

  <!-- Surgical Cap Silhouette -->
  <ellipse cx="300" cy="190" rx="90" ry="70" fill="url(#scrubsTeal)" stroke="#10BFC1" stroke-width="2"/>
  <ellipse cx="300" cy="205" rx="92" ry="32" fill="#0E485F"/>
  <path d="M 210 215 C 240 250 360 250 390 215 C 385 285 215 285 210 215 Z" fill="#E2C9AC"/>

  <!-- Surgical Scrubs V-Neck Robe -->
  <path d="M 170 320 L 250 290 L 300 370 L 350 290 L 430 320 L 460 620 L 140 620 Z" fill="url(#scrubsTeal)" stroke="#10BFC1" stroke-width="2"/>
  
  <!-- Stethoscope Outline -->
  <path d="M 240 330 C 240 450 360 450 360 330" fill="none" stroke="url(#goldAcc)" stroke-width="6" stroke-linecap="round"/>
  <circle cx="300" cy="450" r="18" fill="#07182B" stroke="url(#goldAcc)" stroke-width="4"/>
  <circle cx="300" cy="450" r="7" fill="#10BFC1"/>

  <!-- Info Badge -->
  <rect x="110" y="550" width="380" height="90" rx="16" fill="#07182B" fill-opacity="0.9" stroke="url(#goldAcc)" stroke-width="2"/>
  <text x="300" y="585" font-family="'Cairo', sans-serif" font-size="18" font-weight="700" fill="#E6B84F" text-anchor="middle">الصورة بالزي الجراحي الرسمي</text>
  <text x="300" y="612" font-family="'Cairo', sans-serif" font-size="13" font-weight="500" fill="#94A3B8" text-anchor="middle">سيتم إدراجها فور تزويدها واعتمادها من العيادة</text>
</svg>'''

# 5. Watermark SVG
watermark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
  <g opacity="0.18">
    <circle cx="50" cy="50" r="38" fill="none" stroke="#E6B84F" stroke-width="2"/>
    <text x="50" y="62" font-family="'Inter', sans-serif" font-size="34" font-weight="900" fill="#E6B84F" text-anchor="middle">AG</text>
    <text x="100" y="45" font-family="'Cairo', sans-serif" font-size="16" font-weight="700" fill="#E6B84F">د. أحمد جودة ناجح</text>
    <text x="100" y="66" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#10BFC1" letter-spacing="1">MEDICAL PORTFOLIO</text>
  </g>
</svg>'''

with open(os.path.join(images_dir, "ag-monogram.svg"), "w", encoding="utf-8") as f:
    f.write(monogram_svg)
with open(os.path.join(images_dir, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(favicon_svg)
with open(os.path.join(images_dir, "ag-logo-header.svg"), "w", encoding="utf-8") as f:
    f.write(brand_logo_svg)
with open(os.path.join(images_dir, "doctor-scrubs-placeholder.svg"), "w", encoding="utf-8") as f:
    f.write(scrubs_placeholder_svg)
with open(os.path.join(images_dir, "ag-watermark.svg"), "w", encoding="utf-8") as f:
    f.write(watermark_svg)

print("Core branding assets generated successfully.")
