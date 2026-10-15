/**
 * MEDICAL EDUCATION ARTICLES REPOSITORY
 * Strictly verified, non-promotional, patient-safety-focused content.
 */

const articlesData = [
  {
    id: "sleeve-gastrectomy",
    category: "bariatric",
    categoryLabelAr: "جراحات السمنة",
    categoryLabelEn: "Bariatric Surgery",
    image: "./assets/images/medical-education/sleeve-gastrectomy.svg",
    date: "2026-10",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    titleAr: "ما هي عملية تكميم المعدة بالمنظار؟",
    titleEn: "What is Laparoscopic Sleeve Gastrectomy?",
    summaryAr: "تعد عملية تكميم المعدة أحد أكثر الإجراءات الجراحية شيوعاً لمكافحة السمنة المفرطة، حيث يتم فيها تصغير حجم المعدة مع الحفاظ على مسار الجهاز الهضمي الطبيعي.",
    summaryEn: "Laparoscopic sleeve gastrectomy is one of the most widely performed bariatric procedures, reducing stomach volume while maintaining normal digestive continuity.",
    demonstrationAr: "يوضح المخطط الطبي استئصال حوالي 75% إلى 80% من قاع وجسم المعدة الطولي باستخدام دبابيس جراحية دقيقة من التيتانيوم، تاركاً أنبوباً معدياً ضيقاً يشبه الموزة مع الحفاظ على صمام البواب.",
    demonstrationEn: "The diagram illustrates the surgical removal of approximately 75–80% of the greater curvature of the stomach using precision titanium staples, leaving a narrow tubular gastric sleeve while preserving the pyloric sphincter.",
    significanceAr: "تساعد العملية في تقليل كمية الطعام المتناول بفضل صغر حجم المعدة الجديد، إضافة إلى خفض هرمون الجوع (الغريلين) الذي يُفرز أساساً من قاع المعدة المستأصل، مما يسهل التحكم في الشهية.",
    significanceEn: "The procedure reduces food intake capacity and significantly diminishes the hunger-stimulating hormone (ghrelin) secreted primarily by the removed gastric fundus, assisting in natural appetite control.",
    safetyNoteAr: "العملية تتطلب تقييماً طبياً دقيقاً وشاملاً قبل إقرارها، والالتزام الصارم بالإرشادات الغذائية والمتابعة الدورية بعد الجراحة لتجنب نقص الفيتامينات أو مضاعفات الارتجاع.",
    safetyNoteEn: "Sleeve gastrectomy necessitates comprehensive preoperative clinical assessment, lifelong nutritional compliance, and regular medical surveillance to prevent micronutrient deficiencies or reflux issues.",
    fullContentAr: `
      <h4>نظرة عامة على الإجراء الجراحي</h4>
      <p>تكميم المعدة بالمنظار (Laparoscopic Sleeve Gastrectomy) هو تدخل جراحي طفيف التوغل يتم عبر 3 إلى 4 فتحات صغيرة في جدار البطن (يتراوح قطر كل منها بين 5 إلى 12 ملم). يهدف الإجراء إلى تصغير سعة المعدة من حوالي 1500 مل إلى ما يقارب 150-200 مل.</p>
      
      <h4>كيف تؤثر العملية على الجسم؟</h4>
      <p>تعمل العملية وفق آليتين متكاملتين:</p>
      <ul>
        <li><strong>الأثر الميكانيكي:</strong> صغر حجم المعدة يؤدي إلى الشعور بالشبع السريع عند تناول كمية طعام صغيرة جداً.</li>
        <li><strong>الأثر الهرموني:</strong> استئصال قاع المعدة (Fundus) يزيل الجزء الأكبر من الخلايا المفرزة لهرمون الغريلين (Ghrelin)، مما يقلل الرغبة في تناول الطعام بشكل ملحوظ.</li>
      </ul>

      <h4>شروط الترشح للعملية</h4>
      <p>لا تناسب الجراحة كل شخص يعاني من زيادة الوزن. المعايير المعتمدة دولياً تشمل:</p>
      <ul>
        <li>مؤشر كتلة جسم (BMI) يتجاوز 40 كجم/م² دون اشتراط وجود أمراض مصاحبة.</li>
        <li>مؤشر كتلة جسم بين 35 و 39.9 كجم/م² مع وجود أمراض مصاحبة مرتبطة بالسمنة مثل السكري من النوع الثاني، أو ارتفاع ضغط الدم، أو انقطاع النفس النومي.</li>
        <li>فشل المحاولات غير الجراحية الموثقة لإنقاص الوزن عبر الأنظمة الغذائية والرياضة.</li>
      </ul>

      <h4>أهمية المتابعة والالتزام</h4>
      <p>العملية هي أداة مساعدة قوية وليست حلاً سحرياً مستقلاً؛ فالنتائج المستدامة تعتمد على مدى التزام المريض بتعديل نمط حياته، وممارسة النشاط البدني، وتناول المكملات الغذائية الموصوفة بانتظام تحت إشراف الطبيب.</p>
    `,
    fullContentEn: `
      <h4>Overview of the Surgical Procedure</h4>
      <p>Laparoscopic Sleeve Gastrectomy is a minimally invasive surgery performed through 3 to 4 tiny incisions (5–12 mm) in the abdominal wall. The primary goal is reducing gastric capacity from approximately 1500 ml to about 150–200 ml.</p>

      <h4>Physiological Mechanism</h4>
      <p>The procedure functions through two synergistic pathways:</p>
      <ul>
        <li><strong>Restrictive Action:</strong> Drastically reducing stomach size produces early and prolonged satiety with modest portions.</li>
        <li><strong>Endocrine Action:</strong> Resecting the gastric fundus eliminates the primary production site of ghrelin (the hunger hormone), significantly suppressing appetite.</li>
      </ul>

      <h4>Eligibility Guidelines</h4>
      <p>Surgery is not an arbitrary cosmetic procedure. Established clinical criteria include:</p>
      <ul>
        <li>Body Mass Index (BMI) &gt; 40 kg/m² without mandatory comorbidities.</li>
        <li>BMI 35–39.9 kg/m² accompanied by severe obesity-related conditions such as Type 2 diabetes, hypertension, or obstructive sleep apnea.</li>
        <li>Documented inability to sustain weight loss through supervised dietary and lifestyle interventions.</li>
      </ul>

      <h4>Post-Operative Discipline</h4>
      <p>The procedure acts as an invaluable metabolic tool, yet long-term success requires lifelong commitment to sensible nutrition, routine physical activity, and scheduled clinical follow-up.</p>
    `
  },
  {
    id: "bariatric-indication",
    category: "bariatric",
    categoryLabelAr: "جراحات السمنة",
    categoryLabelEn: "Bariatric Surgery",
    image: "./assets/images/medical-education/bariatric-indication.svg",
    date: "2026-10",
    readTimeAr: "4 دقائق قراءة",
    readTimeEn: "4 min read",
    titleAr: "متى قد يحتاج المريض إلى جراحة السمنة؟",
    titleEn: "When is Bariatric Surgery Clinically Indicated?",
    summaryAr: "تحديد مدى الحاجة إلى جراحة السمنة لا يعتمد على المظهر الخارجي فقط، بل يستند إلى معايير طبية وسريرية دقيقة تراعي مؤشر كتلة الجسم والأمراض المصاحبة.",
    summaryEn: "Determining eligibility for metabolic and bariatric surgery is strictly based on clinical guidelines encompassing BMI thresholds, medical comorbidities, and patient readiness.",
    demonstrationAr: "يوضح المؤشر البياني تدرج فئات الوزن وفق مؤشر كتلة الجسم (BMI)، حيث تبرز المنطقة الصفراء والحمراء المؤشرات السريرية التي تتطلب استشارة الجراح المختص.",
    demonstrationEn: "The clinical gauge categorizes BMI spectrums, highlighting yellow and red metabolic thresholds that warrant specialist surgical evaluation.",
    significanceAr: "معرفة المعايير المعتمدة يحمي المريض من اللجوء لإجراءات جراحية غير ملائمة، ويضمن اتخاذ القرار الطبي في الوقت المناسب لتفادي مضاعفات السمنة الخطيرة.",
    significanceEn: "Understanding validated clinical guidelines protects patients from inappropriate interventions and guarantees timely surgical intervention before metabolic health deteriorates.",
    safetyNoteAr: "جراحة السمنة ليست حلاً أولياً للسمنة البسيطة، ويجب دائماً استنفاد المحاولات التحفظية الموجهة بإشراف طبي قبل اللجوء للتدخل الجراحي.",
    safetyNoteEn: "Bariatric surgery is not recommended for mild overweight, and structured lifestyle interventions must always be evaluated prior to surgical consideration.",
    fullContentAr: `
      <h4>المؤشرات والمعايير الطبية المعتمدة</h4>
      <p>وفقاً للجمعية الدولية لجراحة البدانة والاضطرابات الاستقلابية (IFSO) والأكاديميات الطبية المعتمدة، يُعد التدخل الجراحي خياراً مدروساً في الحالات الآتية:</p>
      <ul>
        <li><strong>مؤشر كتلة الجسم (BMI):</strong> الوزن بالكيلوجرام مقسوماً على مربع الطول بالمتر. إذا كان الناتج 40 فما فوق، أو 35 مع وجود مضاعفات طبية مصاحبة.</li>
        <li><strong>الأمراض الاستقلابية المصاحبة:</strong> مثل صعوبة ضبط السكري، متلازمة انقطاع النفس الانسدادي أثناء النوم، الكبد الدهني غير الكحولي، واعتلال المفاصل الحاد الناتج عن زيادة العبء الحركي.</li>
        <li><strong>الاستقرار النفسي والجاهزية:</strong> قدرة المريض على فهم طبيعة الجراحة والالتزام بتعليمات التغذية والمتابعة بعد العملية.</li>
      </ul>
      <p>يتم في عيادة د. أحمد جودة فحص المريض بدقة شاملة وإجراء التحاليل المخبرية لتقييم الغدد الصماء والوظائف الحيوية للتأكد من عدم وجود سبب هرموني قابل للعلاج الدوائي أولاً.</p>
    `,
    fullContentEn: `
      <h4>Established Clinical Benchmarks</h4>
      <p>According to the International Federation for the Surgery of Obesity (IFSO) and modern surgical consensuses, surgical intervention is considered when:</p>
      <ul>
        <li><strong>Body Mass Index (BMI):</strong> Exceeds 40 kg/m², or 35 kg/m² with documented metabolic comorbidities.</li>
        <li><strong>Associated Comorbidities:</strong> Poorly controlled Type 2 diabetes, severe hypertension, obstructive sleep apnea, NAFLD, or weight-bearing osteoarthritis.</li>
        <li><strong>Psychological & Behavioral Readiness:</strong> Demonstrated comprehension of dietary stages and willingness to maintain clinical surveillance.</li>
      </ul>
      <p>Preoperative assessment at Dr. Ahmed Gouda's clinic includes full metabolic and endocrine screening to exclude reversible hormonal causes of excess weight prior to recommending surgery.</p>
    `
  },
  {
    id: "laparoscopy-vs-open",
    category: "laparoscopy",
    categoryLabelAr: "جراحات المناظير",
    categoryLabelEn: "Laparoscopic Surgery",
    image: "./assets/images/medical-education/laparoscopy-vs-open.svg",
    date: "2026-10",
    readTimeAr: "4 دقائق قراءة",
    readTimeEn: "4 min read",
    titleAr: "ما الفرق بين الجراحة التقليدية وجراحة المناظير؟",
    titleEn: "Open Surgery vs. Laparoscopic Keyhole Surgery",
    summaryAr: "أحدثت جراحة المناظير ثورة في الطب الحديث؛ حيث حلت الفتحات الدقيقة محل الشقوق الجراحية الكبيرة، مما وفر أماناً أكبر وألماً أقل وسرعة تعافٍ فائقة.",
    summaryEn: "Laparoscopic surgery has revolutionized operative care by replacing extensive open incisions with micro-incisions, offering superior precision, reduced pain, and rapid recovery.",
    demonstrationAr: "مقارنة بصرية واضحة بين الشق الجراحي التقليدي (10-15 سم) وما يرافقه من ندبات وألم، وبين جراحة المناظير المعتمدة على كاميرا مكبرة و3 فتحات دقيقة (5-10 ملم).",
    demonstrationEn: "A comparative graphic contrasting extensive traditional incisions (10–15 cm) with laparoscopic keyhole trocars (5–10 mm) guided by high-definition optics.",
    significanceAr: "يساعد هذا التوضيح المريض على إدراك سبب تفضيل الجراح للمنظار كلما كان ذلك ممكناً طبياً، وطمأنته بشأن سرعة العودة لعمله وأنشطته اليومية.",
    significanceEn: "Clarifies why minimally invasive approaches are prioritized whenever clinically viable, reassuring patients regarding accelerated return to regular work and daily life.",
    safetyNoteAr: "في بعض الحالات النادرة أو الطارئة والمعقدة، قد يستوجب الأمان الطبي التحويل إلى الجراحة المفتوحة؛ والقرار النهائي يعود دائماً لسلامة المريض أولاً.",
    safetyNoteEn: "In certain complex or emergent scenarios, patient safety may dictate conversion to open surgery; surgical decision-making always prioritizes safety above all.",
    fullContentAr: `
      <h4>مقارنة تفصيلية بين التقنيتين</h4>
      <p>على مدار العقود الماضية، أصبحت جراحة المناظير المعيار الذهبي لمعظم عمليات البطن، مثل استئصال المرارة بالمنظار، إصلاح الفتق الإربي والبطني، وجراحات السمنة والقولون.</p>
      
      <h4>أبرز مزايا جراحة المناظير:</h4>
      <ul>
        <li><strong>ألم أقل بشكل ملحوظ:</strong> تقليل صدمة عضلات وأعصاب جدار البطن يعني حاجة أقل للمسكنات القوية بعد العملية.</li>
        <li><strong>فترة استشفاء قصيرة:</strong> يغادر المريض المستشفى عادة في غضون 24 إلى 48 ساعة مقارنة بأسبوع أو أكثر في الجراحة المفتوحة.</li>
        <li><strong>نتائج تجميلية ممتازة:</strong> التئام الفتحات الصغيرة يترك ندبات تكاد تكون غير مرئية مع مرور الوقت.</li>
        <li><strong>دقة رؤية فائقة:</strong> توفر كاميرات المناظير الحديثة 4K تكبيراً فائقاً للأنسجة والأوعية الدموية الدقيقة مما يقلل احتمالية النزف.</li>
        <li><strong>انخفاض خطر الفتق الجراحي والالتهابات:</strong> الجروح الصغيرة تلتئم أسرع وبفرص التهاب أقل كثيراً.</li>
      </ul>
    `,
    fullContentEn: `
      <h4>In-Depth Comparative Analysis</h4>
      <p>Minimally invasive laparoscopy has become the gold standard for numerous abdominal procedures, including cholecystectomy, inguinal and ventral hernia repair, bariatric interventions, and colorectal resections.</p>

      <h4>Key Clinical Advantages:</h4>
      <ul>
        <li><strong>Substantially Less Post-Op Pain:</strong> Sparing abdominal wall muscles results in reduced reliance on systemic analgesics.</li>
        <li><strong>Accelerated Convalescence:</strong> Patients are frequently discharged within 24–48 hours rather than enduring extended hospital stays.</li>
        <li><strong>Cosmetic Superiority:</strong> Minute entry ports heal with minimal scar formation over time.</li>
        <li><strong>Optical Magnification:</strong> 4K video optics provide ultra-detailed anatomical visualization, mitigating microvascular injury.</li>
        <li><strong>Lower Incisional Hernia & Infection Rates:</strong> Small puncture sites heal securely with minimal infectious complications.</li>
      </ul>
    `
  },
  {
    id: "surgical-prep",
    category: "care",
    categoryLabelAr: "الاستعداد للعملية",
    categoryLabelEn: "Surgical Prep",
    image: "./assets/images/medical-education/surgical-prep.svg",
    date: "2026-10",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    titleAr: "كيف يستعد المريض للعملية الجراحية؟ دليل إرشادي شامل",
    titleEn: "How to Prepare for Surgery: Comprehensive Patient Guide",
    summaryAr: "الاستعداد الدقيق للعملية الجراحية هو الركيزة الأساسية لضمان سلامة التخدير ونجاح التدخل الجراحي ومرور مرحلة الإفاقة دون أي مضاعفات.",
    summaryEn: "Meticulous preoperative preparation forms the cornerstone of surgical safety, optimal anesthetic delivery, and smooth post-anesthetic recovery.",
    demonstrationAr: "مخطط توعوي يبرز المراحل الثلاث للاستعداد: الاستشارة السريرية ومراجعة الأدوية، الفحوصات والتحاليل المخبرية، وساعات الصيام المطلوبة قبل التخدير.",
    demonstrationEn: "An infographic outlining the three core prep phases: clinical consultation, laboratory workups, and strict fasting guidelines prior to general anesthesia.",
    significanceAr: "يمنح المريض وضوحاً كاملاً بما يتوجب فعله قبل التوجه للمستشفى، وتفادي تأجيل العملية بسبب عدم الالتزام بالصيام أو عدم ضبط أدوية السيولة.",
    significanceEn: "Provides patients with clear, actionable steps before arriving at the hospital, preventing avoidable cancellations due to medication oversight or fasting errors.",
    safetyNoteAr: "يجب إبلاغ الجراح وطبيب التخدير بجميع الأدوية والمكملات والأعشاب التي يتناولها المريض، خاصة أدوية السيولة وضغط الدم والسكري.",
    safetyNoteEn: "Always inform the surgical team and anesthesiologist of all prescribed medications, antiplatelets, anticoagulants, and supplements.",
    fullContentAr: `
      <h4>قائمة التحقق قبل موعد الجراحة</h4>
      <p>حرصاً على أمانك التام وسلامة الإجراء، يرجى الالتزام بالخطوات الآتية بالتنسيق مع عيادة د. أحمد جودة:</p>
      
      <h4>1. الفحوصات والتحاليل المخبرية</h4>
      <ul>
        <li>صورة دم كاملة (CBC) وفحوصات سيولة الدم (PT, PTT, INR).</li>
        <li>وظائف كبد وكلى، وتحليل سكر الدم الصائم والتراكمي.</li>
        <li>رسم قلب كهربائي (ECG) وأشعة سينية على الصدر للحالات التي تستدعي ذلك.</li>
      </ul>

      <h4>2. تنظيم تناول الأدوية</h4>
      <ul>
        <li><strong>أدوية السيولة والأسبرين:</strong> يتم إيقافها أو تعديلها ببدائل مؤقتة قبل العملية بعدد محدد من الأيام وفق تعليمات الطبيب فقط.</li>
        <li><strong>أدوية السكري والضغط:</strong> يحدد طبيب التخدير الجرعة والتوقيت المسموح به صباح يوم الجراحة.</li>
      </ul>

      <h4>3. تعليمات الصيام</h4>
      <p>الامتناع التام عن تناول الأطعمة الصلبة لمدة 8 ساعات، والامتناع عن السوائل الشفافة لمدة ساعتين إلى 4 ساعات قبل موعد العملية المحدد، لحماية الرئتين من الارتجاع أثناء التخدير.</p>
    `,
    fullContentEn: `
      <h4>Preoperative Clinical Checklist</h4>
      <p>For your maximal safety, please adhere strictly to these guidelines coordinated with Dr. Ahmed Gouda's clinical staff:</p>

      <h4>1. Diagnostic Labs & Screenings</h4>
      <ul>
        <li>Complete Blood Count (CBC) and Coagulation Profile (PT, PTT, INR).</li>
        <li>Hepatorenal function panels and fasting glycemic tests.</li>
        <li>Electrocardiogram (ECG) and chest radiography as indicated clinically.</li>
      </ul>

      <h4>2. Medication Management</h4>
      <ul>
        <li><strong>Blood Thinners / Aspirin:</strong> Adjusted or bridged according to strict medical instructions.</li>
        <li><strong>Antihypertensives & Diabetic Therapy:</strong> Specific morning dosing coordinated directly with the anesthesia team.</li>
      </ul>

      <h4>3. Strict Fasting Protocols</h4>
      <p>No solid foods for 8 hours prior to surgery; clear fluids withheld 2 to 4 hours prior, preventing pulmonary aspiration during anesthesia induction.</p>
    `
  },
  {
    id: "post-op-care",
    category: "care",
    categoryLabelAr: "الرعاية والمتابعة",
    categoryLabelEn: "Post-Op Care",
    image: "./assets/images/medical-education/post-op-care.svg",
    date: "2026-10",
    readTimeAr: "4 دقائق قراءة",
    readTimeEn: "4 min read",
    titleAr: "ما أهمية المتابعة الطبية بعد الجراحة؟",
    titleEn: "The Critical Importance of Post-Operative Follow-Up",
    summaryAr: "العملية الجراحية الناجحة تكتمل برعاية ومتابعة دقيقة؛ فالزيارات الدورية للطبيب تضمن التئام الجروح، ورصد أي علامات تحذيرية، والاطمئنان على استقرار الحالة.",
    summaryEn: "A successful surgery requires dedicated post-operative care; scheduled clinical visits ensure proper wound healing, monitoring of vitals, and prompt response to symptoms.",
    demonstrationAr: "رسم بياني يوضح أركان الرعاية الأربعة بعد الجراحة: الزيارات الدورية المحددة، إدارة العلاجات والمسكنات، الحركة المبكرة، وملاحظة علامات التحذير.",
    demonstrationEn: "Diagram highlighting the four pillars of recovery: scheduled clinical visits, strict medication adherence, early mobilization, and symptom surveillance.",
    significanceAr: "توعية المريض بأن انتهاء الجراحة هو بداية مرحلة التعافي التي تتطلب شراكة مستمرة مع الفريق الطبي لضمان النتيجة المرجوة وتجنب المضاعفات.",
    significanceEn: "Empowers patients to appreciate recovery as a guided partnership with their clinical team, safeguarding surgical outcomes and peace of mind.",
    safetyNoteAr: "في حال ظهور حرارة مرتفعة، ألم حاد ومفاجئ، قيء مستمر، أو إفرازات غير طبيعية من الجرح، يجب التواصل مع العيادة فوراً دون تأخير.",
    safetyNoteEn: "Contact the clinic promptly if you experience high fever, severe unmanaged pain, persistent emesis, or abnormal wound drainage.",
    fullContentAr: `
      <h4>خطة التعافي والمتابعة السريرية</h4>
      <p>تهدف المتابعة بعد الخروج من المستشفى إلى الاطمئنان على استعادة الجسم لوظائفه الحيوية بشكل طبيعي وتفادي أي مضاعفات متأخرة.</p>
      
      <h4>أهم مراحل المتابعة:</h4>
      <ul>
        <li><strong>الزيارة الأولى (بعد 3-5 أيام):</strong> فحص الجروح والتأكد من عدم وجود التهاب أو تجمع سوائل، والاطمئنان على حركة الأمعاء وتحمل السوائل.</li>
        <li><strong>الزيارة الثانية (بعد 10-14 يوماً):</strong> إزالة الغرز الجراحية التجميلية (إن وجدت)، وتقييم الانتقال للمرحلة الغذائية التالية في جراحات السمنة.</li>
        <li><strong>المتابعة الشهرية والدورية:</strong> لمراجعة الوزن، التحاليل المخبرية الدورية، وضبط المكملات الغذائية والفيتامينات.</li>
      </ul>

      <h4>نصائح للتعافي السليم في المنزل:</h4>
      <ul>
        <li>المشي الخفيف والمتكرر داخل المنزل لتنشيط الدورة الدموية وتقليل احتمالية تجلط الأوردة العميقة.</li>
        <li>الحفاظ على نظافة وجفاف مناطق الجروح وتجنب غمرها بالماء حتى يسمح الطبيب بذلك.</li>
        <li>تجنب حمل الأوزان الثقيلة أو بذل مجهود عنيف لمدة 4 إلى 6 أسابيع لحماية عضلات البطن.</li>
      </ul>
    `,
    fullContentEn: `
      <h4>Post-Operative Recovery Roadmap</h4>
      <p>Clinical surveillance following hospital discharge confirms continuous healing and intercepts minor issues before they escalate.</p>

      <h4>Structured Timeline:</h4>
      <ul>
        <li><strong>Visit 1 (Days 3–5):</strong> Wound site inspection, assessment of gastrointestinal transit and fluid tolerance.</li>
        <li><strong>Visit 2 (Days 10–14):</strong> Suture inspection, review of systemic recovery, and dietary advancement guidance.</li>
        <li><strong>Periodic Long-Term Surveillance:</strong> Monitoring metabolic biomarkers, blood counts, and micronutrient supplementation.</li>
      </ul>

      <h4>Essential Home Recovery Guidelines:</h4>
      <ul>
        <li>Frequent, gentle ambulation indoors to stimulate circulation and prevent thromboembolism.</li>
        <li>Maintaining clean, dry dressings; avoid soaking wounds until explicit clearance from the surgeon.</li>
        <li>Strict avoidance of heavy lifting or strenuous exertion for 4 to 6 weeks to protect healing fascial planes.</li>
      </ul>
    `
  },
  {
    id: "nutrition-recovery",
    category: "bariatric",
    categoryLabelAr: "جراحات السمنة",
    categoryLabelEn: "Bariatric Surgery",
    image: "./assets/images/medical-education/nutrition-recovery.svg",
    date: "2026-10",
    readTimeAr: "5 دقائق قراءة",
    readTimeEn: "5 min read",
    titleAr: "المراحل الغذائية والتدابير الصحية بعد جراحة السمنة",
    titleEn: "Nutritional Stages and Dietary Progression Post-Bariatric Surgery",
    summaryAr: "يتطلب مسار التعافي بعد جراحة تكميم المعدة تدرجاً غذائياً دقيقاً على مدار أسابيع متتالية لحماية خط التدبيس وتأقلم الجهاز الهضمي برفق.",
    summaryEn: "Nutritional progression after bariatric surgery follows carefully calibrated phases over several weeks, protecting the staple line and acclimating the digestive tract.",
    demonstrationAr: "مخطط يوضح المراحل الأربع: السوائل الصافية، السوائل الكاملة، الطعام المهروس، ثم الانتقال للطعام الصحي اللين والمتوازن.",
    demonstrationEn: "Diagram delineating the four nutritional phases: clear liquids, full liquids, puréed foods, transitioning to balanced soft solids.",
    significanceAr: "الالتزام بهذه المراحل يضمن عدم حدوث تمدد مبكر للمعدة أو غثيان وقيء، ويدعم نزول الوزن بصحة دون إجهاد للجسم.",
    significanceEn: "Adherence prevents nausea, dehydration, and early gastric stress, facilitating healthy, progressive weight reduction while preserving lean mass.",
    safetyNoteAr: "شرب كميات كافية من الماء برشفات صغيرة طوال اليوم بين الوجبات وتجنب الشرب مع الأكل أمر حيوي لتجنب الجفاف.",
    safetyNoteEn: "Consistent hydration via small, frequent sips between meals—never during meals—is paramount to avoid dehydration and gastric distension.",
    fullContentAr: `
      <h4>المراحل الغذائية الأربع بالتفصيل</h4>
      <p>تم تصميم هذا التدرج الغذائي بواسطة خبراء التغذية العلاجية بالتعاون مع جراحي السمنة لضمان التئام جدار المعدة:</p>
      
      <h4>المرحلة الأولى: السوائل الصافية (الأيام 1 - 7)</h4>
      <p>التركيز على الماء، المشروبات العشبية غير المحلاة (يانسون، نعناع، كركديه بارد)، ومرق اللحم أو الدجاج المصفى الخالي تماماً من الدسم. تُشرب برشفات بطيئة جداً وتجنب استخدام الماصة (الشاليموه) لتفادي دخول الهواء.</p>

      <h4>المرحلة الثانية: السوائل الكاملة والبروتين (الأسبوع الثاني)</h4>
      <p>إدخال الحليب خالي الدسم، الشوربات المصفاة الكريمية الخفيفة، والبدء في تناول مكملات البروتين (Whey Protein Isolate) لضمان حصول الجسم على 60-80 جرام بروتين يومياً للحفاظ على الكتلة العضلية.</p>

      <h4>المرحلة الثالثة: الطعام المهروس (الأسابيع 3 - 4)</h4>
      <p>أطعمة ناعمة مثل الزبادي اليوناني قليل الدسم، البيض المخفوق الطري، الجبن القريش، والخضار المسلوق والمهروس جيداً في الخلاط.</p>

      <h4>المرحلة الرابعة: الطعام الصحي اللين (الشهر الثاني وما بعده)</h4>
      <p>تناول قطع صغيرة من الدجاج والسمك المطهو جيداً، الخضروات اللينة، مع المضغ البطيء والكامل (20-30 ثانية لكل لقمة)، والتوقف الفوري عند الشعور بأول إشارة امتلاء.</p>
    `,
    fullContentEn: `
      <h4>The Four Dietary Phases Explained</h4>
      <p>This evidence-based nutritional progression is formulated to safeguard the healing gastric tissue while meeting vital metabolic needs:</p>

      <h4>Phase 1: Clear Liquids (Days 1–7)</h4>
      <p>Focus on water, caffeine-free herbal teas, and strained, fat-free broths. Sip slowly and steadily; straws are strictly avoided to eliminate aerophagia.</p>

      <h4>Phase 2: Full Liquids & High Protein (Week 2)</h4>
      <p>Introduction of skimmed milk, light strained soups, and whey protein isolates aimed at achieving 60–80 grams of daily protein to safeguard lean muscle tissue.</p>

      <h4>Phase 3: Puréed Foods (Weeks 3–4)</h4>
      <p>Smooth, blenderized foods including low-fat Greek yogurt, tender scrambled eggs, cottage cheese, and puréed steamed vegetables.</p>

      <h4>Phase 4: Soft Balanced Solids (Month 2 Onward)</h4>
      <p>Moist tender poultry, flaky white fish, and soft vegetables. Thorough mastication (chewing 20–30 times per bite) and terminating meals at the first satiety cue are mandatory.</p>
    `
  }
];
