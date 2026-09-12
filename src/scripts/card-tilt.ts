// src/scripts/card-tilt.ts
export function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const MAX_TILT = 7;

  document.querySelectorAll<HTMLElement>('.card[data-tilt]').forEach((card) => {
    let raf = 0;

    const move = (clientX: number, clientY: number) => {
      const rect = card.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * (MAX_TILT * 2);
      const rotateX = (0.5 - py) * (MAX_TILT * 2);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.setProperty('--glare-x', `${px * 100}%`);
        card.style.setProperty('--glare-y', `${py * 100}%`);
      });
    };

    const reset = () => {
      cancelAnimationFrame(raf);
      card.classList.remove('is-tilting');
      card.style.transform = '';
    };

    card.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') card.classList.add('is-tilting');
    });

    card.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse') move(e.clientX, e.clientY);
    });

    card.addEventListener('pointerleave', reset);

    card.addEventListener(
      'touchstart',
      (e) => {
        const t = e.touches[0];
        if (!t) return;
        card.classList.add('is-tilting');
        move(t.clientX, t.clientY);
      },
      { passive: true }
    );

    card.addEventListener(
      'touchmove',
      (e) => {
        const t = e.touches[0];
        if (!t) return;
        move(t.clientX, t.clientY);
      },
      { passive: true }
    );

    card.addEventListener('touchend', () => setTimeout(reset, 400));
  });
}