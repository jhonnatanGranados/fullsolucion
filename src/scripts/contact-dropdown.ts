// src/scripts/contact-dropdown.ts
let activeClose: (() => void) | null = null;

export function initContactDropdowns() {
  const dropdown = document.getElementById('contactDropdown');
  if (!dropdown) return;

  document
    .querySelectorAll<HTMLElement>('[data-contact-trigger]')
    .forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (activeClose) activeClose();
        openNear(trigger, dropdown);
      });
    });
}

function openNear(trigger: HTMLElement, dropdown: HTMLElement) {
  dropdown.removeAttribute('hidden');

  const rect = trigger.getBoundingClientRect();
  dropdown.style.top = `${rect.bottom + 8}px`;
  dropdown.style.left = `${rect.left + rect.width / 2}px`;
  dropdown.style.transform = 'translateX(-50%)';

  const onScroll = () => {
    const r = trigger.getBoundingClientRect();
    const out =
      r.bottom < 0 ||
      r.top > window.innerHeight ||
      r.right < 0 ||
      r.left > window.innerWidth;
    if (out) close();
  };

  const onResize = () => close();

  const onDocClick = (ev: MouseEvent) => {
    const t = ev.target as Node;
    if (!dropdown.contains(t) && !trigger.contains(t)) close();
  };

  const onKey = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') close();
  };

  const close = () => {
    dropdown.setAttribute('hidden', '');
    dropdown.style.cssText = '';
    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('scroll', onScroll, true);
    window.removeEventListener('resize', onResize);
    activeClose = null;
  };

  activeClose = close;

  setTimeout(() => {
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
  }, 0);
}