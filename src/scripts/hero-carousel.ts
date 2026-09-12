// src/scripts/hero-carousel.ts
export function initHeroCarousel() {
  document.querySelectorAll<HTMLElement>('.hero[data-interval]').forEach((el) => {
    const slides = Array.from(el.querySelectorAll<HTMLElement>('.hero__slide'));
    if (slides.length <= 1) return;

    const interval = Number(el.dataset.interval ?? 5000);
    let current = 0;

    setInterval(() => {
      slides[current].dataset.active = 'false';
      current = (current + 1) % slides.length;
      slides[current].dataset.active = 'true';
    }, interval);
  });
}