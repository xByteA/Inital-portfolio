/**
 * Animated particle background for cover section
 */
(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let width, height;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    const section = canvas.closest('.cover');
    width = canvas.width = section ? section.offsetWidth : window.innerWidth;
    height = canvas.height = section ? section.offsetHeight : window.innerHeight;
  }

  function createParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const dotColor = isLight ? '99, 102, 241' : '129, 140, 248';
    const lineColor = isLight ? '99, 102, 241' : '96, 165, 250';

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${p.opacity})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    if (!prefersReducedMotion) {
      animationId = requestAnimationFrame(draw);
    }
  }

  function init() {
    resize();
    const count = width < 768 ? 40 : 70;
    createParticles(count);

    if (prefersReducedMotion) {
      draw();
    } else {
      draw();
    }
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles(width < 768 ? 40 : 70);
  });

  document.addEventListener('DOMContentLoaded', init);

  document.addEventListener('themechange', () => {
    if (prefersReducedMotion) draw();
  });
})();
