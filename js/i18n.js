/**
 * Internationalization — English & Arabic
 */
const translations = {
  en: {
    skipToContent: 'Skip to content',
    nav: {
      cover: 'Cover',
      about: 'About',
      services: 'Services',
      resume: 'Resume',
      contact: 'Contact',
    },
    cover: {
      greeting: "Hello, I'm",
      role: 'Computer Science Student & Backend AI Intern',
      typingPrefix: 'I build as a',
      tagline: 'I build backend systems, AI-powered applications, and reliable APIs with a strong focus on clean architecture and scalable design.',
      btnResume: 'View Resume',
      btnContact: 'Contact Me',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      title: 'A bit about how I got here',
      p1: 'I’m a Computer Science student with a growing focus on backend development and AI systems. My work centers on building reliable services, APIs, and data-driven applications that solve real problems.',
      p2: 'My interest in backend engineering grew from wanting to understand how systems behave under load, how data flows across services, and how to design architectures that stay maintainable over time. I’m currently gaining hands-on experience through an AI backend internship and practical projects.',
      p3: 'I value clean architecture, thoughtful design, and continuous learning. Whether I’m working with LLM-based features, microservices, or authentication flows, I aim to build software that is dependable and easy to evolve.',
      stat1: 'Projects built',
      stat2: 'CGPA',
      stat3: 'Languages',
    },
    services: {
      label: 'Services',
      title: 'How I Can Help',
      desc: 'For startups, small businesses, and growing teams that need solid backend foundations—not quick fixes that fall apart later.',
      items: [
        {
          title: 'Custom Website Development',
          desc: 'When your business needs a site that loads fast and reflects your brand—not a template that looks like everyone else\'s.',
        },
        {
          title: 'Backend Development',
          desc: 'The core logic, business rules, and data handling that keep your product running smoothly behind the UI.',
        },
        {
          title: 'REST APIs',
          desc: 'Clean, documented endpoints so your web app, mobile app, and third-party tools can all talk to the same system reliably.',
        },
        {
          title: 'Authentication Systems',
          desc: 'Secure login, roles, and permissions—so the right people access the right data without opening security holes.',
        },
        {
          title: 'Database Design',
          desc: 'Structured data models that grow with your product instead of slowing it down after the first thousand users.',
        },
        {
          title: 'Performance Optimization',
          desc: 'Finding why things feel slow—queries, caching, bottlenecks—and fixing the root cause, not just the symptom.',
        },
        {
          title: 'Deployment',
          desc: 'Getting your app from local machine to production with CI/CD, containers, and environments that don\'t break on release day.',
        },
        {
          title: 'Maintenance',
          desc: 'Updates, monitoring, and fixes so your system stays healthy long after the initial launch.',
        },
      ],
    },
    resume: {
      label: 'Resume',
      title: 'Experience & Background',
      desc: 'Student-focused work across backend systems, AI projects, courses, and campus activities.',
      education: 'Education',
      skills: 'Skills',
      experience: 'Work Experience',
      projects: 'Projects',
      courses: 'Courses',
      activities: 'Activities',
      achievements: 'Achievements',
      viewGithub: 'View on GitHub',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something great together.",
      desc: 'Have a project in mind or just want to talk through an idea? Send a message—I usually reply within a day.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Alexandria, Egypt',
      formName: 'Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'you@example.com',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me about your project...',
      formSubmit: 'Send Message',
      formSuccess: 'Thanks! Your message is ready—I\'ll get back to you soon.',
      formError: 'Please fill in all fields correctly.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    typing: [
      'Backend Engineer',
      'AI Backend Intern',
      'Node.js Developer',
      'FastAPI Developer',
      'Problem Solver',
    ],
  },
  ar: {
    skipToContent: 'تخطي إلى المحتوى',
    nav: {
      cover: 'الرئيسية',
      about: 'نبذة',
      services: 'الخدمات',
      resume: 'السيرة',
      contact: 'تواصل',
    },
    cover: {
      greeting: 'مرحباً، أنا',
      role: 'مهندس برمجيات — Backend',
      typingPrefix: 'أعمل كـ',
      tagline: 'أستمتع ببناء أنظمة backend موثوقة تنمو مع المنتج—من APIs بسيطة إلى معماريات قابلة للتوسع.',
      btnResume: 'عرض السيرة',
      btnContact: 'تواصل معي',
      scroll: 'مرر للأسفل',
    },
    about: {
      label: 'نبذة',
      title: 'كيف وصلت إلى هنا',
      p1: 'أنا طالب علوم حاسوب مع تركيز متزايد على تطوير الـ backend وأنظمة الذكاء الاصطناعي. يتركز عملي على بناء خدمات وAPIs وتطبيقات قائمة على البيانات لحل مشاكل حقيقية.',
      p2: 'أدى اهتمامي بتطوير الـ backend إلى الرغبة في فهم كيفية تصرف الأنظمة تحت الضغط، وكيفية تدفق البيانات عبر الخدمات، وكيفية تصميم معماريات تبقى قابلة للصيانة بمرور الوقت. أكتسب حاليًا خبرة عملية من خلال تدريب داخلي في backend AI ومشاريع عملية.',
      p3: 'أؤمن بالعمارة النظيفة والتصميم المدروس والتعلم المستمر. سواء كنت أعمل على ميزات مبنية على LLM أو microservices أو تدفقات مصادقة، أهدف إلى بناء برمجيات موثوقة وسهلة التطوير.',
      stat1: 'مشاريع مبنية',
      stat2: 'المعدل التراكمي',
      stat3: 'لغات',
    },
    services: {
      label: 'الخدمات',
      title: 'كيف يمكنني المساعدة',
      desc: 'للشركات الناشئة والأعمال الصغيرة والفرق المتنامية التي تحتاج أساس backend متين—لا حلول مؤقتة تنهار لاحقاً.',
      items: [
        {
          title: 'تطوير مواقع مخصصة',
          desc: 'عندما تحتاج موقعاً سريعاً يعكس علامتك—لا قالباً يشبه كل المواقع الأخرى.',
        },
        {
          title: 'تطوير Backend',
          desc: 'المنطق الأساسي، قواعد العمل، ومعالجة البيانات التي تجعل منتجك يعمل بسلاسة خلف الواجهة.',
        },
        {
          title: 'REST APIs',
          desc: 'نقاط نهاية واضحة وموثقة حتى تتواصل تطبيقاتك وأدواتك مع نفس النظام بموثوقية.',
        },
        {
          title: 'أنظمة المصادقة',
          desc: 'تسجيل دخول آمن، أدوار، وصلاحيات—حتى يصل الأشخاص المناسبون للبيانات المناسبة.',
        },
        {
          title: 'تصميم قواعد البيانات',
          desc: 'نماذج بيانات منظمة تنمو مع منتجك بدلاً من إبطائه بعد أول ألف مستخدم.',
        },
        {
          title: 'تحسين الأداء',
          desc: 'اكتشاف سبب البطء—الاستعلامات، التخزين المؤقت، الاختناقات—وإصلاح السبب الجذري.',
        },
        {
          title: 'النشر',
          desc: 'نقل تطبيقك من الجهاز المحلي إلى الإنتاج مع CI/CD وحاويات وبيئات لا تنهار يوم الإطلاق.',
        },
        {
          title: 'الصيانة',
          desc: 'تحديثات، مراقبة، وإصلاحات حتى يبقى نظامك سليماً بعد الإطلاق.',
        },
      ],
    },
    resume: {
      label: 'السيرة',
      title: 'الخبرة والخلفية',
      desc: 'عمل أكاديمي ومهني على أنظمة backend ومشاريع الذكاء الاصطناعي والدورات والأنشطة الطلابية.',
      education: 'التعليم',
      skills: 'المهارات',
      experience: 'الخبرة العملية',
      projects: 'المشاريع',
      courses: 'الدورات',
      activities: 'الأنشطة',
      achievements: 'الإنجازات',
      viewGithub: 'عرض على GitHub',
    },
    contact: {
      label: 'تواصل',
      title: 'لنبني شيئاً رائعاً معاً.',
      desc: 'لديك مشروع أو فكرة تريد مناقشتها؟ أرسل رسالة—عادة أرد خلال يوم.',
      phone: 'الهاتف',
      email: 'البريد',
      location: 'الموقع',
      locationValue: 'الإسكندرية، مصر',
      formName: 'الاسم',
      formNamePlaceholder: 'اسمك',
      formEmail: 'البريد الإلكتروني',
      formEmailPlaceholder: 'you@example.com',
      formMessage: 'الرسالة',
      formMessagePlaceholder: 'أخبرني عن مشروعك...',
      formSubmit: 'إرسال الرسالة',
      formSuccess: 'شكراً! سأرد عليك قريباً.',
      formError: 'يرجى ملء جميع الحقول بشكل صحيح.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
    typing: [
      'مهندس Backend',
      'متدرب AI Backend',
      'مطور Node.js',
      'مطور FastAPI',
      'محلّل مشاكل',
    ],
  },
};

/** Resume data — edit here to update content */
const resumeData = {
  en: {
    education: [
      {
        title: 'B.Sc. in Computer Science & Artificial Intelligence',
        org: 'Pharos University in Alexandria',
        period: 'Sep 2023 – Jun 2027',
        desc: 'Expected graduation June 2027 · CGPA 3.45',
      },
    ],
    skills: [
      'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL',
      'Node.js', 'Express', 'FastAPI', 'Mongoose', 'SQLAlchemy',
      'MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'Visual Studio Code',
      'Data Structures', 'Algorithms', 'Problem Solving', 'OOP', 'Design Patterns',
      'REST APIs', 'ORM', 'ODM', 'Microservices',
    ],
    experience: [
      {
        title: 'Backend AI Intern',
        org: 'FlyRank',
        period: 'Jul 2026 – Sep 2026',
        desc: 'Selected for an AI Backend Engineering internship focused on RAG pipelines, LLM APIs, agent-based systems, evaluation, grounding techniques, and production-ready backend architecture.',
      },
    ],
    projects: [
      {
        title: 'Library Management System',
        desc: 'Microservices-based library management system built with FastAPI, including an API Gateway, service-to-service communication, gRPC migration, and RabbitMQ messaging.',
        tags: ['FastAPI', 'Microservices', 'gRPC', 'RabbitMQ'],
        github: 'https://github.com/xByteA/Library-Management-System',
      },
      {
        title: 'Cryptocurrency Simulator',
        desc: 'JavaScript blockchain simulator featuring block creation, mining simulation, validation, and automated testing with Jest.',
        tags: ['JavaScript', 'Blockchain', 'Jest'],
        github: 'https://github.com/xByteA/cryptocurrency',
      },
      {
        title: 'Authentication Access Management Service',
        desc: 'Secure authentication gateway built with Express using JWT, authorization, password hashing, clean architecture, OOP, and SOLID principles.',
        tags: ['Express', 'JWT', 'Architecture', 'SOLID'],
        github: 'https://github.com/xByteA/Authentication',
      },
      {
        title: 'Anonymous Chat',
        desc: 'Anonymous messaging platform with secure authentication, profile management, and anonymous messaging using Node.js, Express, and MongoDB.',
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/xByteA/anonymous-chat',
      },
    ],
    courses: [
      {
        title: 'Backend Node.js',
        org: 'Route Academy',
        period: 'Apr 2025 – Dec 2025',
        desc: 'Advanced backend development training focused on building practical Node.js services.',
      },
      {
        title: 'Node.js',
        org: 'Cloud Native Base Camp',
        period: 'Feb 2025 – Aug 2025',
        desc: 'Node.js and cloud-native development training with hands-on practice.',
      },
    ],
    activities: [
      {
        title: 'Vice Web',
        org: 'IEEE PUA',
        period: 'Nov 2025 – Present',
        desc: 'Contributed to designing and managing web content while supporting technical events and workshops.',
      },
      {
        title: 'Vice Web',
        org: 'Hult Prize',
        period: 'Oct 2025 – Mar 2026',
        desc: 'Organized and coordinated digital activities while supporting competition events.',
      },
    ],
    achievements: [
      {
        title: 'Selected for AI Backend Internship',
        desc: 'Chosen to join FlyRank for an internship centered on backend AI engineering and RAG systems.',
      },
      {
        title: 'Practical Project Experience',
        desc: 'Built multiple backend and full-stack projects covering authentication, distributed systems, and blockchain concepts.',
      },
    ],
  },
  ar: {
    education: [
      {
        title: 'بكالوريوس علوم حاسوب وذكاء اصطناعي',
        org: 'جامعة فاروس بالإسكندرية',
        period: 'سبتمبر 2023 – يونيو 2027',
        desc: 'التخرج المتوقع يونيو 2027 · المعدل 3.45',
      },
    ],
    skills: [
      'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL',
      'Node.js', 'Express', 'FastAPI', 'Mongoose', 'SQLAlchemy',
      'MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'Visual Studio Code',
      'هياكل البيانات', 'الخوارزميات', 'حل المشكلات', 'OOP', 'أنماط التصميم',
      'REST APIs', 'ORM', 'ODM', 'Microservices',
    ],
    experience: [
      {
        title: 'متدرب Backend AI',
        org: 'FlyRank',
        period: 'يوليو 2026 – سبتمبر 2026',
        desc: 'اختير لتدريب هندسة Backend AI يركز على RAG pipelines وLLM APIs وأنظمة Agent-based وتقنيات التقييم وال grounding والهندسة الخلفية الجاهزة للإنتاج.',
      },
    ],
    projects: [
      {
        title: 'نظام إدارة المكتبة',
        desc: 'نظام إدارة مكتبة يعتمد على microservices باستخدام FastAPI، ويضم API Gateway والتواصل بين الخدمات والانتقال إلى gRPC والمراسلة عبر RabbitMQ.',
        tags: ['FastAPI', 'Microservices', 'gRPC', 'RabbitMQ'],
        github: 'https://github.com/xByteA/Library-Management-System',
      },
      {
        title: 'محاكي العملة المشفرة',
        desc: 'محاكي blockchain بلغة JavaScript يشتمل على إنشاء الكتل ومحاكاة التعدين والتحقق والاختبار الآلي باستخدام Jest.',
        tags: ['JavaScript', 'Blockchain', 'Jest'],
        github: 'https://github.com/xByteA/cryptocurrency',
      },
      {
        title: 'خدمة إدارة الوصول للمصادقة',
        desc: 'بوابة مصادقة آمنة مبنية بـ Express باستخدام JWT والترخيص وتشفير كلمات المرور والعمارة النظيفة ومبادئ SOLID.',
        tags: ['Express', 'JWT', 'Architecture', 'SOLID'],
        github: 'https://github.com/xByteA/Authentication',
      },
      {
        title: 'Anonymous Chat',
        desc: 'منصة مراسلة مجهولة الهوية مع مصادقة آمنة وإدارة الملف الشخصي ومراسلة مجهولة باستخدام Node.js وExpress وMongoDB.',
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/xByteA/anonymous-chat',
      },
    ],
    courses: [
      {
        title: 'Backend Node.js',
        org: 'Route Academy',
        period: 'أبريل 2025 – ديسمبر 2025',
        desc: 'تدريب متقدم على تطوير خدمات Node.js عملية.',
      },
      {
        title: 'Node.js',
        org: 'Cloud Native Base Camp',
        period: 'فبراير 2025 – أغسطس 2025',
        desc: 'تدريب على Node.js والتطوير السحابي مع ممارسة عملية.',
      },
    ],
    activities: [
      {
        title: 'Vice Web',
        org: 'IEEE PUA',
        period: 'نوفمبر 2025 – الحاضر',
        desc: 'ساهمت في تصميم وإدارة المحتوى الإلكتروني ودعم الفعاليات وورش العمل التقنية.',
      },
      {
        title: 'Vice Web',
        org: 'Hult Prize',
        period: 'أكتوبر 2025 – مارس 2026',
        desc: 'نظمت وساهمت في الأنشطة الرقمية ودعمت فعاليات المسابقة.',
      },
    ],
    achievements: [
      {
        title: 'اختيار للتدريب في AI Backend',
        desc: 'تم اختياري للانضمام إلى FlyRank لتدريب يركز على هندسة Backend AI وأنظمة RAG.',
      },
      {
        title: 'خبرة عملية في المشاريع',
        desc: 'بنيت مشاريع متعددة تغطي المصادقة والأنظمة الموزعة ومفاهيم blockchain.',
      },
    ],
  },
};

const serviceIcons = [
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
];

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function getNested(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(t, key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNested(t, key);
    if (value) el.placeholder = value;
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'en' ? 'AR' : 'EN';

  renderServices(lang);
  renderResume(lang);

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function renderServices(lang) {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  const items = translations[lang].services.items;
  grid.innerHTML = items.map((item, i) => `
    <article class="glass-card service-card reveal reveal--delay-${i % 3}">
      <div class="service-card__icon" aria-hidden="true">${serviceIcons[i] || serviceIcons[0]}</div>
      <h3 class="service-card__title">${item.title}</h3>
      <p class="service-card__desc">${item.desc}</p>
    </article>
  `).join('');

  if (window.initReveal) window.initReveal(grid.querySelectorAll('.reveal'));
}

function renderResume(lang) {
  const data = resumeData[lang];
  const t = translations[lang].resume;

  const educationList = document.getElementById('educationList');
  if (educationList) {
    educationList.innerHTML = data.education.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__header">
          <span class="resume-card__title">${item.title}</span>
          <span class="resume-card__meta">${item.period}</span>
        </div>
        <div class="resume-card__org">${item.org}</div>
        <p class="resume-card__desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const skillsList = document.getElementById('skillsList');
  if (skillsList) {
    skillsList.innerHTML = data.skills.map((skill) => `
      <span class="skill-pill">${skill}</span>
    `).join('');
  }

  const experienceList = document.getElementById('experienceList');
  if (experienceList) {
    experienceList.innerHTML = data.experience.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__header">
          <span class="resume-card__title">${item.title}</span>
          <span class="resume-card__meta">${item.period}</span>
        </div>
        <div class="resume-card__org">${item.org}</div>
        <p class="resume-card__desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const projectsList = document.getElementById('projectsList');
  if (projectsList) {
    projectsList.innerHTML = data.projects.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__header">
          <span class="resume-card__title">${item.title}</span>
        </div>
        <p class="resume-card__desc">${item.desc}</p>
        <div class="resume-card__tags">
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${item.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--sm" style="margin-top:1rem">${t.viewGithub}</a>
      </div>
    `).join('');
  }

  const coursesList = document.getElementById('coursesList');
  if (coursesList) {
    coursesList.innerHTML = data.courses.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__header">
          <span class="resume-card__title">${item.title}</span>
          <span class="resume-card__meta">${item.period}</span>
        </div>
        <div class="resume-card__org">${item.org}</div>
        <p class="resume-card__desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const activitiesList = document.getElementById('activitiesList');
  if (activitiesList) {
    activitiesList.innerHTML = data.activities.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__header">
          <span class="resume-card__title">${item.title}</span>
          <span class="resume-card__meta">${item.period}</span>
        </div>
        <div class="resume-card__org">${item.org}</div>
        <p class="resume-card__desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const achievementsList = document.getElementById('achievementsList');
  if (achievementsList) {
    achievementsList.innerHTML = data.achievements.map((item) => `
      <div class="glass-card resume-card">
        <div class="resume-card__title">${item.title}</div>
        <p class="resume-card__desc">${item.desc}</p>
      </div>
    `).join('');
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('portfolio-lang', currentLang);
  applyTranslations(currentLang);
}

function initI18n() {
  applyTranslations(currentLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', toggleLanguage);
}

document.addEventListener('DOMContentLoaded', initI18n);
