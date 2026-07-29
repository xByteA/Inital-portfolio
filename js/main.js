/**
 * Main application logic
 */
(function () {
  'use strict';

  /* ---------- Theme ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = storedTheme || (prefersDark ? 'dark' : 'dark');

  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    localStorage.setItem('portfolio-theme', theme);
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  setTheme(currentTheme);
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  /* ---------- Navbar scroll & active section ---------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }

    let current = 'cover';
    const offset = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (offset >= top && offset < bottom) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === current);
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    });
  });

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Typing effect ---------- */
  const typingEl = document.getElementById('typingText');
  let typingIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimeout;

  function getTypingWords() {
    const lang = localStorage.getItem('portfolio-lang') || 'en';
    return translations[lang]?.typing || translations.en.typing;
  }

  function typeEffect() {
    if (!typingEl) return;

    const words = getTypingWords();
    const current = words[typingIndex % words.length];

    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex++;
      delay = 400;
    }

    typingTimeout = setTimeout(typeEffect, delay);
  }

  document.addEventListener('langchange', () => {
    clearTimeout(typingTimeout);
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeEffect();
  });

  if (typingEl) typeEffect();

  /* ---------- Reveal on scroll ---------- */
  function initReveal(elements) {
    const els = elements || document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  window.initReveal = initReveal;

  /* ---------- Animated counters ---------- */
  function animateCounters() {
    const counters = document.querySelectorAll('.stat__number[data-count]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const duration = 1500;
          const start = performance.now();

          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const lang = localStorage.getItem('portfolio-lang') || 'en';
      const t = translations[lang].contact;

      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      let valid = true;
      [name, email, message].forEach((field) => {
        field.classList.remove('error');
        if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (!valid) {
        formStatus.textContent = t.formError;
        formStatus.className = 'form-status error';
        return;
      }

      const subject = encodeURIComponent(`Portfolio contact from ${name.value}`);
      const body = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`);
      window.location.href = `mailto:abdelrahmanseif99@gmail.com?subject=${subject}&body=${body}`;

      formStatus.textContent = t.formSuccess;
      formStatus.className = 'form-status success';
      contactForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Init on DOM ready ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    animateCounters();
  });
})();
