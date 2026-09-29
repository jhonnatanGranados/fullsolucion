// src/scripts/contact-dropdown.ts
let activeClose: (() => void) | null = null;

const PHONE = '50241080263';
const EMAIL = 'fullsolution001@gmail.com';

export function initContactDropdowns() {
  const dropdown = document.getElementById('contactDropdown');
  if (!dropdown) return;

  const baseHrefs: Record<string, string> = {};
  dropdown
    .querySelectorAll<HTMLAnchorElement>('[data-channel]')
    .forEach((a) => {
      const ch = a.dataset.channel!;
      baseHrefs[ch] = a.getAttribute('href') || '';
    });

  document
    .querySelectorAll<HTMLElement>('[data-contact-trigger]')
    .forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (activeClose) activeClose();

        const serviceCode = trigger.dataset.service || '';
        const serviceTitle = trigger.dataset.serviceTitle || '';

        customizeLinks(dropdown, baseHrefs, serviceCode, serviceTitle);
        openNear(trigger, dropdown);
      });
    });
}

function customizeLinks(
  dropdown: HTMLElement,
  baseHrefs: Record<string, string>,
  code: string,
  title: string,
) {
  const whatsapp = dropdown.querySelector<HTMLAnchorElement>(
    '[data-channel="whatsapp"]',
  );
  const gmail = dropdown.querySelector<HTMLAnchorElement>(
    '[data-channel="gmail"]',
  );

  if (!code && !title) {
    if (whatsapp) whatsapp.href = baseHrefs.whatsapp;
    if (gmail) gmail.href = baseHrefs.gmail;
    return;
  }

  const serviceLabel = `${code} – ${title}`.trim();

  if (whatsapp) {
    const msg = `Hola Full Solución, me interesa el servicio ${serviceLabel}. ¿Me pueden dar más información?`;
    whatsapp.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  }

  if (gmail) {
    const subject = `Consulta sobre ${serviceLabel}`;
    const body = `Hola Full Solución,\n\nMe interesa el servicio "${serviceLabel}". ¿Me pueden dar más información?\n\nGracias.`;
    gmail.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

function openNear(trigger: HTMLElement, dropdown: HTMLElement) {
  dropdown.removeAttribute('hidden');

  const rect = trigger.getBoundingClientRect();
  dropdown.style.top = `${rect.bottom + 8}px`;
  dropdown.style.left = `${rect.left + rect.width / 2}px`;

  requestAnimationFrame(() => {
    dropdown.classList.add('is-open');
  });

  let hoverTimer: number | null = null;

  const scheduleClose = () => {
    if (hoverTimer !== null) window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => {
      close();
    }, 180);
  };

  const cancelClose = () => {
    if (hoverTimer !== null) {
      window.clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  };

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

  const onTriggerLeave = () => scheduleClose();
  const onDropdownLeave = () => scheduleClose();
  const onTriggerEnter = () => cancelClose();
  const onDropdownEnter = () => cancelClose();

  const close = () => {
    if (hoverTimer !== null) {
      window.clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    dropdown.setAttribute('hidden', '');
    dropdown.classList.remove('is-open');
    dropdown.style.cssText = '';

    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('scroll', onScroll, true);
    window.removeEventListener('resize', onResize);

    trigger.removeEventListener('mouseenter', onTriggerEnter);
    trigger.removeEventListener('mouseleave', onTriggerLeave);
    dropdown.removeEventListener('mouseenter', onDropdownEnter);
    dropdown.removeEventListener('mouseleave', onDropdownLeave);

    activeClose = null;
  };

  activeClose = close;

  setTimeout(() => {
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);

    trigger.addEventListener('mouseenter', onTriggerEnter);
    trigger.addEventListener('mouseleave', onTriggerLeave);
    dropdown.addEventListener('mouseenter', onDropdownEnter);
    dropdown.addEventListener('mouseleave', onDropdownLeave);
  }, 0);
}